"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  Mesh,
  ShaderMaterial,
  Texture
} from "three";


// Easing functions
const easeOutCubic = (x: number): number => {
  return 1 - Math.pow(1 - x, 3);
};

// Vertex Shader (Flat 2D Plane, no mesh distortion)
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader (2D Liquid Glass Refraction & High-End Glow)
const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uClickPos;
  uniform float uAspect;
  uniform bool uIsEntering;

  void main() {
    // 1. Correct UV coordinates for aspect ratio to keep the ripple perfectly circular
    vec2 uvCorrected = vec2(vUv.x * uAspect, vUv.y);
    vec2 clickCorrected = vec2(uClickPos.x * uAspect, uClickPos.y);

    // 2. Distance from click center
    float dist = distance(uvCorrected, clickCorrected);

    // 3. Define the wave front radius R. R sweeps from 0.0 to 2.2
    float maxRadius = 2.2;
    float R = uIsEntering ? ((1.0 - uProgress) * maxRadius) : (uProgress * maxRadius);
    float ampFactor = uIsEntering ? uProgress : (1.0 - uProgress);

    // 4. Calculate distortion near the wave front
    // A beautiful smooth bell curve band representing the wave front
    float waveWidth = 0.25;
    float band = exp(-pow(dist - R, 2.0) / 0.02);

    // Liquid ripple wave offset
    // Sine wave creates concentric rings, scaled by uProgress
    float waveOsc = sin(dist * 45.0 - uTime * 10.0);
    float distortion = waveOsc * 0.035 * band * ampFactor;

    // 5. Refract UV coordinates along the radial direction
    vec2 uvDir = (dist > 0.0) ? normalize(vUv - uClickPos) : vec2(1.0, 0.0);
    vec2 distortedUv = vUv + uvDir * distortion;
    distortedUv = clamp(distortedUv, 0.0, 1.0);

    // 6. Sample the screenshot texture
    vec4 texColor = texture2D(uTexture, distortedUv);

    // 7. Calculate analytical 3D normal for glassy reflection
    // Slope of the wave front gradient
    float slope = cos(dist * 45.0 - uTime * 10.0) * 1.8 * band * ampFactor;
    vec3 normal = normalize(vec3(-uvDir * slope, 1.0));

    // Specular and diffuse lighting (wet glassy reflection)
    vec3 lightDir = normalize(vec3(0.3, 0.5, 0.8));
    float diffuse = max(dot(normal, lightDir), 0.0);
    float lighting = 0.6 + 0.4 * diffuse;

    vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 32.0); // high gloss
    float specular = spec * 0.25 * band * ampFactor;

    // 8. Calculate alpha dissolve
    float alpha = 1.0;
    if (uIsEntering) {
      // ENTERING: reveal behind wave front (dist < R)
      alpha = 1.0 - smoothstep(R, R - waveWidth, dist);
    } else {
      // EXITING: dissolve behind wave front (dist < R)
      alpha = smoothstep(R - waveWidth, R, dist);
    }

    // 9. Add a subtle glassy glow at the wave front (cool neon cyber-blue accent)
    vec3 glassyGlow = vec3(0.4, 0.7, 1.0) * band * 0.20 * ampFactor;
    
    // Combine texture, lighting, and glass reflections
    vec3 finalColor = texColor.rgb * lighting + vec3(specular) + glassyGlow;

    gl_FragColor = vec4(finalColor, texColor.a * alpha);
  }
`;

// Helper to capture current viewport screenshot using html2canvas-pro
const captureScreenshot = async (): Promise<HTMLCanvasElement> => {
  const createFallbackCanvas = (): HTMLCanvasElement => {
    const fallback = document.createElement("canvas");
    fallback.width = 1024;
    fallback.height = 1024;
    const ctx = fallback.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#f4f6fc";
      ctx.fillRect(0, 0, 1024, 1024);
    }
    return fallback;
  };

  try {
    const html2canvasPro = (await import("html2canvas-pro")).default;
    const canvasResult = await html2canvasPro(document.body, {
      logging: false,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#f4f6fc",
      scale: 1, // Optimize capture speed & memory footprint
      ignoreElements: (element) => element.hasAttribute("data-html2canvas-ignore"),
    });
    return canvasResult;
  } catch (err) {
    console.warn("[PaperCrumpleOverlay] html2canvas-pro screenshot capture failed (falling back):", err);
    return createFallbackCanvas();
  }
};

export function PaperCrumpleOverlay(): React.ReactElement | null {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const clickPosRef = useRef({ x: 0, y: 0 });
  const pathname = usePathname();

  // Phase state: "entering", "idle", "exiting"
  const [phase, setPhase] = useState<"entering" | "idle" | "exiting">("idle");

  // Check if transition is between catalog /skills and detail /skills/[slug]
  const customWindow = typeof window !== "undefined" ? window : null;
  const targetHref = customWindow ? customWindow.__transitionTargetHref || "" : "";
  const isCurrentSkills = pathname === "/skills" || pathname.startsWith("/skills/");
  const isTargetSkills = targetHref === "/skills" || targetHref.startsWith("/skills/");
  const isBypassed = isCurrentSkills && isTargetSkills;

  // Three.js instances
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<OrthographicCamera | null>(null);
  const meshRef = useRef<Mesh | null>(null);
  const materialRef = useRef<ShaderMaterial | null>(null);
  const textureRef = useRef<Texture | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const threeModuleRef = useRef<typeof import("three") | null>(null);

  // Register overlay to window
  useEffect(() => {
    if (typeof window === "undefined") return;

    const customWindow = window;
    customWindow.__paperCrumpleOverlayRegistered = true;

    const handleExitStart = (e: Event) => {
      const customEvent = e as CustomEvent;
      const detail = customEvent.detail || {};
      const clickX = typeof detail.clickX === "number" ? detail.clickX : window.innerWidth / 2;
      const clickY = typeof detail.clickY === "number" ? detail.clickY : window.innerHeight / 2;
      clickPosRef.current = { x: clickX, y: clickY };
      setPhase("exiting");
    };

    window.addEventListener("transition-exit-start", handleExitStart);

    if (customWindow.__transitionActive) {
      const clickX = typeof customWindow.__transitionClickX === "number" ? customWindow.__transitionClickX : window.innerWidth / 2;
      const clickY = typeof customWindow.__transitionClickY === "number" ? customWindow.__transitionClickY : window.innerHeight / 2;
      clickPosRef.current = { x: clickX, y: clickY };

      customWindow.__transitionActive = false; // consume
      setTimeout(() => {
        setPhase("entering");
      }, 0);
    } else {
      setTimeout(() => {
        customWindow.__canvasPaused = false;
        window.dispatchEvent(new CustomEvent("canvas-resume"));
      }, 50);
    }

    return () => {
      customWindow.__paperCrumpleOverlayRegistered = false;
      window.removeEventListener("transition-exit-start", handleExitStart);
    };
  }, []);

  // Lock scroll when transition is active
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (phase !== "idle") {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [phase]);

  // Main transition effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (phase === "idle" || isBypassed) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let isEffectActive = true;
    const customWindow = window;

    // Helper to dispose Three.js instances
    const disposeThree = () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      if (textureRef.current) {
        textureRef.current.dispose();
        textureRef.current = null;
      }
      if (materialRef.current) {
        materialRef.current.dispose();
        materialRef.current = null;
      }
      if (meshRef.current) {
        if (meshRef.current.geometry) {
          meshRef.current.geometry.dispose();
        }
        meshRef.current = null;
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
      sceneRef.current = null;
      cameraRef.current = null;
    };

    // Initialize Three.js scene (using a low resolution grid since all distortion is 2D in fragment shader)
    const initThree = async (textureCanvas: HTMLCanvasElement, initialProgress: number, isEntering: boolean) => {
      disposeThree();

      const THREE = threeModuleRef.current || (await import("three"));
      threeModuleRef.current = THREE;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;

      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.OrthographicCamera(
        -aspect / 2,
        aspect / 2,
        0.5,
        -0.5,
        0.1,
        10
      );
      camera.position.z = 2;
      cameraRef.current = camera;

      const texture = new THREE.CanvasTexture(textureCanvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      textureRef.current = texture;

      // Low segment count geometry (8x8) as we do not displace vertices
      const geometry = new THREE.PlaneGeometry(aspect, 1.0, 8, 8);

      const u = clickPosRef.current.x / width;
      const v = 1.0 - (clickPosRef.current.y / height);

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTexture: { value: texture },
          uProgress: { value: initialProgress },
          uTime: { value: 0 },
          uIsEntering: { value: isEntering },
          uClickPos: { value: new THREE.Vector2(u, v) },
          uAspect: { value: aspect },
        },
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
        depthTest: false,
      });
      materialRef.current = material;

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshRef.current = mesh;

      renderer.render(scene, camera);
    };

    // Run Exit Animation (0.0 -> 1.0) with easeOutCubic easing
    const runExitAnimation = () => {
      let startTimestamp: number | null = null;
      const duration = 600; // Exit duration: 600ms

      const animate = (time: number) => {
        if (!isEffectActive) return;
        if (startTimestamp === null) startTimestamp = time;
        const elapsed = time - startTimestamp;
        const rawProgress = Math.min(elapsed / duration, 1.0);
        
        // Apply easeOutCubic Easing
        const progress = easeOutCubic(rawProgress);

        if (materialRef.current) {
          materialRef.current.uniforms.uProgress.value = progress;
          materialRef.current.uniforms.uTime.value = time * 0.001;
        }

        // Apply backdrop darkening & blur
        if (containerRef.current) {
          containerRef.current.style.backgroundColor = `rgba(9, 9, 11, ${rawProgress * 0.40})`;
          containerRef.current.style.backdropFilter = `blur(${rawProgress * 8}px)`;
        }

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }

        if (rawProgress < 1.0) {
          animationFrameIdRef.current = requestAnimationFrame(animate);
        } else {
          customWindow.__transitionActive = true;
          document.body.classList.remove("transition-active-exiting");
          window.dispatchEvent(new CustomEvent("transition-exit-complete"));
        }
      };
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    // Run Enter Animation (1.0 -> 0.0) with easeOutCubic easing
    const runEnterAnimation = () => {
      let startTimestamp: number | null = null;
      const duration = 650; // Enter duration: 650ms

      const animate = (time: number) => {
        if (!isEffectActive) return;
        if (startTimestamp === null) startTimestamp = time;
        const elapsed = time - startTimestamp;
        const rawProgress = Math.min(elapsed / duration, 1.0);
        
        // Apply easeOutCubic Easing
        const factor = easeOutCubic(rawProgress);
        const progress = Math.max(1.0 - factor, 0.0);

        if (materialRef.current) {
          materialRef.current.uniforms.uProgress.value = progress;
          materialRef.current.uniforms.uTime.value = time * 0.001;
        }

        // Fade out backdrop overlay & blur
        if (containerRef.current) {
          containerRef.current.style.backgroundColor = `rgba(9, 9, 11, ${(1.0 - rawProgress) * 0.40})`;
          containerRef.current.style.backdropFilter = `blur(${(1.0 - rawProgress) * 8}px)`;
        }

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }

        if (rawProgress < 1.0) {
          animationFrameIdRef.current = requestAnimationFrame(animate);
        } else {
          setPhase("idle");
          disposeThree();
          document.body.classList.remove("transition-active-entering");
          customWindow.__canvasPaused = false;
          window.dispatchEvent(new CustomEvent("canvas-resume"));
        }
      };
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!isEffectActive) return;
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !meshRef.current) return;
      const THREE = threeModuleRef.current;
      if (!THREE) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;

      rendererRef.current.setSize(width, height);
      cameraRef.current.left = -aspect / 2;
      cameraRef.current.right = aspect / 2;
      cameraRef.current.updateProjectionMatrix();

      if (materialRef.current) {
        materialRef.current.uniforms.uAspect.value = aspect;
      }

      const newGeometry = new THREE.PlaneGeometry(aspect, 1.0, 8, 8);
      const oldGeometry = meshRef.current.geometry;
      meshRef.current.geometry = newGeometry;
      oldGeometry.dispose();

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    window.addEventListener("resize", handleResize);

    if (phase === "entering") {
      customWindow.__canvasPaused = true;
      window.dispatchEvent(new CustomEvent("canvas-pause"));

      const runEnter = async () => {
        if (!isEffectActive) return;
        const THREE = threeModuleRef.current || (await import("three"));
        threeModuleRef.current = THREE;

        const dummyCanvas = document.createElement("canvas");
        dummyCanvas.width = 512;
        dummyCanvas.height = 512;
        const ctx = dummyCanvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "#f4f6fc";
          ctx.fillRect(0, 0, 512, 512);
        }
        await initThree(dummyCanvas, 1.0, true);

        const realCanvas = await captureScreenshot();
        if (!isEffectActive) return;

        if (textureRef.current && rendererRef.current && sceneRef.current && cameraRef.current) {
          textureRef.current.dispose();
          const realTexture = new THREE.CanvasTexture(realCanvas);
          realTexture.minFilter = THREE.LinearFilter;
          realTexture.magFilter = THREE.LinearFilter;
          realTexture.generateMipmaps = false;

          textureRef.current = realTexture;
          if (materialRef.current) {
            materialRef.current.uniforms.uTexture.value = realTexture;
          }
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }

        if (!isEffectActive) return;
        document.body.classList.add("transition-active-entering");
        runEnterAnimation();
      };

      runEnter();
    } else if (phase === "exiting") {
      customWindow.__canvasPaused = true;
      window.dispatchEvent(new CustomEvent("canvas-pause"));

      const runExit = async () => {
        if (!isEffectActive) return;
        const THREE = threeModuleRef.current || (await import("three"));
        threeModuleRef.current = THREE;

        const textureCanvas = await captureScreenshot();
        if (!isEffectActive) return;

        await initThree(textureCanvas, 0.0, false);

        if (!isEffectActive) return;
        document.body.classList.add("transition-active-exiting");
        window.dispatchEvent(new CustomEvent("transition-exit-animating"));
        runExitAnimation();
      };

      runExit();
    }

    return () => {
      isEffectActive = false;
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("transition-active-exiting", "transition-active-entering");
      disposeThree();
    };
  }, [phase]);

  if (phase === "idle" || isBypassed) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      data-html2canvas-ignore="true"
      className="fixed inset-0 z-[9999] pointer-events-auto transition-all duration-300"
      style={{
        backgroundColor: phase === "exiting" ? "rgba(9, 9, 11, 0)" : "rgba(9, 9, 11, 0.40)",
        backdropFilter: phase === "exiting" ? "blur(0px)" : "blur(8px)",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        body.transition-active-exiting > *:not([data-html2canvas-ignore="true"]),
        body.transition-active-entering > *:not([data-html2canvas-ignore="true"]) {
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}} />
      <canvas ref={canvasRef} className="w-full h-full block bg-transparent" />
    </div>
  );
}
