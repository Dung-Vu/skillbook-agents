"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface CustomTransitionWindow extends Window {
  __paperCrumpleOverlayRegistered?: boolean;
  __canvasPaused?: boolean;
  __transitionActive?: boolean;
}

// Vertex Shader source (3D Simplex Noise + Sphericalization + Gravity)
const vertexShader = `
  uniform float uProgress;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPosition;

  // Ashima Arts Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - D.yyy;

    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 1.0/7.0;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vUv = uv;
    vec3 pos = position;

    // 1. Wrinkling/Creasing Noise (Multi-frequency)
    float noiseVal = snoise(vec3(pos.xy * 8.0, uTime * 0.1)) * 0.5
                   + snoise(vec3(pos.xy * 16.0, uTime * 0.2)) * 0.25
                   + snoise(vec3(pos.xy * 32.0, uTime * 0.4)) * 0.125;

    // 2. Sphericalization coordinates
    float radius = 0.16;
    float theta = uv.x * 2.0 * 3.14159265;
    float phi = uv.y * 3.14159265;
    
    vec3 spherePos = vec3(
      radius * sin(phi) * cos(theta),
      radius * sin(phi) * sin(theta),
      radius * cos(phi)
    );

    // Crumpling phase takes place in progress 0.0 -> 0.8
    float crumpleProgress = smoothstep(0.0, 0.8, uProgress);
    
    // Noise amplitude peaks during crumple and stays rough at 1.0
    float noiseAmp = 0.15 * sin(crumpleProgress * 3.14159265) + 0.05 * crumpleProgress;

    vec3 displace = vec3(0.0, 0.0, noiseVal * noiseAmp);
    vec3 sphereDisplace = normalize(spherePos) * noiseVal * 0.05;

    vec3 crumpledPos = mix(pos, spherePos, crumpleProgress) 
                     + mix(displace, sphereDisplace, crumpleProgress);

    // 3. Gravity Drop (progress 0.4 -> 1.0)
    float fallProgress = max(0.0, uProgress - 0.4) / 0.6;
    float gravity = pow(fallProgress, 2.5) * -1.6;
    crumpledPos.y += gravity;

    vec4 modelViewPosition = modelViewMatrix * vec4(crumpledPos, 1.0);
    vPosition = modelViewPosition.xyz;
    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

// Fragment Shader source (Screen Space Derivatives for sharp-edged crease normals)
// Note: We removed "#extension GL_OES_standard_derivatives : enable" because it is prepended by Three.js automatically or enabled via material config.
const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform sampler2D uTexture;
  uniform float uProgress;

  void main() {
    // Re-calculate normals dynamically in screen space
    vec3 fdx = dFdx(vPosition);
    vec3 fdy = dFdy(vPosition);
    vec3 normal = normalize(cross(fdx, fdy));

    if (!gl_FrontFacing) {
      normal = -normal;
    }

    // Diffuse & Ambient Lighting
    vec3 lightDir = normalize(vec3(0.3, 0.5, 0.8));
    float diffuse = max(dot(normal, lightDir), 0.0);
    float ambient = 0.4;
    float lighting = ambient + 0.6 * diffuse;

    // Specular highlight for paper sheen
    vec3 viewDir = normalize(-vPosition);
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 16.0);
    float specular = spec * 0.12 * uProgress;

    vec4 texColor = texture2D(uTexture, vUv);
    vec3 shadedColor = texColor.rgb * lighting + vec3(specular);

    // Mix texture between flat (uProgress = 0.0) and shaded (uProgress = 1.0)
    gl_FragColor = vec4(mix(texColor.rgb, shadedColor, uProgress), texColor.a);
  }
`;

// Helper to capture current viewport screenshot using html2canvas
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

  const screenshotPromise = (async () => {
    const html2canvas = (await import("html2canvas")).default;
    return await html2canvas(document.body, {
      logging: false,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#f4f6fc",
      ignoreElements: (element) => element.hasAttribute("data-html2canvas-ignore"),
    });
  })();

  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<HTMLCanvasElement>((resolve) => {
    timer = setTimeout(() => {
      resolve(createFallbackCanvas());
    }, 1000);
  });

  try {
    const result = await Promise.race([screenshotPromise, timeoutPromise]);
    if (timer) clearTimeout(timer);
    return result;
  } catch (err) {
    if (timer) clearTimeout(timer);
    console.error("[PaperCrumpleOverlay] html2canvas screenshot capture failed:", err);
    return createFallbackCanvas();
  }
};


export function PaperCrumpleOverlay(): React.ReactElement | null {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Phase state: "entering" (on mount, unfolds page), "idle" (no canvas rendered), "exiting" (crumples page)
  const [phase, setPhase] = useState<"entering" | "idle" | "exiting">("idle");

  // Three.js instances
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const textureRef = useRef<THREE.Texture | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // Register overlay to window
  useEffect(() => {
    if (typeof window === "undefined") return;

    const customWindow = window as unknown as CustomTransitionWindow;
    customWindow.__paperCrumpleOverlayRegistered = true;

    const handleExitStart = () => {
      setPhase("exiting");
    };

    window.addEventListener("transition-exit-start", handleExitStart);

    // If we've just transitioned via client navigation, run the enter animation
    if (customWindow.__transitionActive) {
      customWindow.__transitionActive = false; // consume
      setTimeout(() => {
        setPhase("entering");
      }, 0);
    } else {
      // Direct load - dispatch resume to satisfy tests expecting it
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

  // Main transition effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (phase === "idle") return;

    const canvas = canvasRef.current;
    if (!canvas) return; // Wait until canvas is mounted in the DOM

    let isEffectActive = true;
    const customWindow = window as unknown as CustomTransitionWindow;

    // Helper to dispose Three.js instances and avoid memory leaks
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

    // Initialize Three.js scene
    const initThree = (textureCanvas: HTMLCanvasElement, initialProgress: number) => {
      disposeThree();

      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;

      // 1. Renderer
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;

      // 2. Scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // 3. Camera
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

      // 4. Texture
      const texture = new THREE.CanvasTexture(textureCanvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      textureRef.current = texture;

      // 5. Geometry (highly detailed grid for folds)
      const geometry = new THREE.PlaneGeometry(aspect, 1.0, 128, 128);

      // 6. Material
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTexture: { value: texture },
          uProgress: { value: initialProgress },
          uTime: { value: 0 },
        },
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        extensions: {
          derivatives: true, // Enable standard derivatives in fragment shader
        } as unknown as { clipCullDistance?: boolean; multiDraw?: boolean; },
      });
      materialRef.current = material;

      // 7. Mesh
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshRef.current = mesh;

      // Initial render
      renderer.render(scene, camera);
    };

    // Run Exit Animation (0.0 -> 1.0)
    const runExitAnimation = () => {
      let startTimestamp: number | null = null;
      const duration = 1000; // 1s exit crumple

      const animate = (time: number) => {
        if (!isEffectActive) return;
        if (startTimestamp === null) startTimestamp = time;
        const elapsed = time - startTimestamp;
        const progress = Math.min(elapsed / duration, 1.0);

        if (materialRef.current) {
          materialRef.current.uniforms.uProgress.value = progress;
          materialRef.current.uniforms.uTime.value = time * 0.001;
        }

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }

        if (progress < 1.0) {
          animationFrameIdRef.current = requestAnimationFrame(animate);
        } else {
          // Exit transition finished - dispatch exit-complete
          customWindow.__transitionActive = true;
          window.dispatchEvent(new CustomEvent("transition-exit-complete"));
        }
      };
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    // Run Enter Animation (1.0 -> 0.0)
    const runEnterAnimation = () => {
      let startTimestamp: number | null = null;
      const duration = 1000; // 1s enter unfold

      const animate = (time: number) => {
        if (!isEffectActive) return;
        if (startTimestamp === null) startTimestamp = time;
        const elapsed = time - startTimestamp;
        const progress = Math.max(1.0 - elapsed / duration, 0.0);

        if (materialRef.current) {
          materialRef.current.uniforms.uProgress.value = progress;
          materialRef.current.uniforms.uTime.value = time * 0.001;
        }

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }

        if (progress > 0.0) {
          animationFrameIdRef.current = requestAnimationFrame(animate);
        } else {
          // Unfold finished - clean up and hide
          setPhase("idle");
          disposeThree();
          
          // Notify other background canvas components to resume
          customWindow.__canvasPaused = false;
          window.dispatchEvent(new CustomEvent("canvas-resume"));
        }
      };
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    // Resize handler
    const handleResize = () => {
      if (!isEffectActive) return;
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !meshRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;

      rendererRef.current.setSize(width, height);
      
      cameraRef.current.left = -aspect / 2;
      cameraRef.current.right = aspect / 2;
      cameraRef.current.updateProjectionMatrix();

      const newGeometry = new THREE.PlaneGeometry(aspect, 1.0, 128, 128);
      const oldGeometry = meshRef.current.geometry;
      meshRef.current.geometry = newGeometry;
      oldGeometry.dispose();

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    window.addEventListener("resize", handleResize);

    // Run phase-specific initialization
    if (phase === "entering") {
      customWindow.__canvasPaused = true;
      window.dispatchEvent(new CustomEvent("canvas-pause"));

      const runEnter = async () => {
        if (!isEffectActive) return;
        // Render crumpled placeholder (white paper) until screenshot is ready
        const dummyCanvas = document.createElement("canvas");
        dummyCanvas.width = 512;
        dummyCanvas.height = 512;
        const ctx = dummyCanvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "#f4f6fc";
          ctx.fillRect(0, 0, 512, 512);
        }
        initThree(dummyCanvas, 1.0);

        // Capture screenshot of new page in background
        const realCanvas = await captureScreenshot();
        if (!isEffectActive) return;

        // Update texture with the new page screenshot
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

        // Run unfold
        if (!isEffectActive) return;
        runEnterAnimation();
      };

      runEnter();
    } else if (phase === "exiting") {
      customWindow.__canvasPaused = true;
      window.dispatchEvent(new CustomEvent("canvas-pause"));

      const runExit = async () => {
        if (!isEffectActive) return;
        // Capture snapshot
        const textureCanvas = await captureScreenshot();
        if (!isEffectActive) return;

        // Initialize WebGL
        initThree(textureCanvas, 0.0);

        // Start crumpling
        if (!isEffectActive) return;
        runExitAnimation();
      };

      runExit();
    }

    return () => {
      isEffectActive = false;
      window.removeEventListener("resize", handleResize);
      disposeThree();
    };
  }, [phase]);


  // When phase is idle, do not render any canvas to prevent Playwright conflicts
  if (phase === "idle") {
    return null;
  }

  return (
    <div
      ref={containerRef}
      data-html2canvas-ignore="true"
      className="fixed inset-0 z-[9999] pointer-events-auto"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-transparent"
      />
    </div>
  );
}
