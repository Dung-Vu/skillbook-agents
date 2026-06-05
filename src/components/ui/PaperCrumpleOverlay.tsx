"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface CustomTransitionWindow extends Window {
  __paperCrumpleOverlayRegistered?: boolean;
  __canvasPaused?: boolean;
  __transitionActive?: boolean;
}

// Easing functions
const easeInQuad = (x: number): number => {
  return x * x;
};

const easeOutBack = (x: number): number => {
  const c1 = 1.2; // Moderated elastic bounce factor to keep text readable/contained
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};

// Vertex Shader source (3D Simplex Noise + Crease/Turbulence + Twist Z + Gravity Y + Fall Rotation)
const vertexShader = `
  uniform float uProgress;
  uniform float uTime;
  uniform bool uIsEntering;
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

    // Determine how crumpled the paper is based on phase
    float crumpleProgress = 0.0;
    if (uIsEntering) {
      crumpleProgress = uProgress; // 1.0 (crumpled) -> 0.0 (flat)
    } else {
      crumpleProgress = smoothstep(0.0, 0.8, uProgress); // 0.0 (flat) -> 1.0 (crumpled)
    }

    // 1. Twist Effect (asymmetrical rotation based on distance from center)
    float dist = length(pos.xy);
    float twistAngle = crumpleProgress * 3.2 * (1.3 - dist);
    float cosA = cos(twistAngle);
    float sinA = sin(twistAngle);
    vec3 twistedPos = vec3(
      pos.x * cosA - pos.y * sinA,
      pos.x * sinA + pos.y * cosA,
      pos.z
    );

    // 2. Crease/Turbulence Noise (High frequency sharp folds mimicking real paper)
    float noiseVal1 = abs(snoise(vec3(pos.xy * 6.5, uTime * 0.06)));
    float noiseVal2 = abs(snoise(vec3(pos.xy * 13.0, uTime * 0.12)));
    float noiseVal3 = abs(snoise(vec3(pos.xy * 26.0, uTime * 0.25)));
    
    float noiseVal = 1.0 - (noiseVal1 * 0.5 + noiseVal2 * 0.3 + noiseVal3 * 0.2);
    noiseVal = pow(noiseVal, 2.5); // Sharp creases

    // 3. Sphericalization (crunching into an asymmetric crumpled ball)
    // Add low-frequency noise to the radius to make the final shape look organic
    float radiusNoise = snoise(vec3(pos.xy * 2.5, 0.0)) * 0.035;
    float radius = 0.15 + radiusNoise;
    float theta = uv.x * 2.0 * 3.14159265;
    float phi = uv.y * 3.14159265;
    
    vec3 spherePos = vec3(
      radius * sin(phi) * cos(theta),
      radius * sin(phi) * sin(theta),
      radius * cos(phi)
    );
    
    // Noise amplitude peaks during crumple transition
    float noiseAmp = 0.18 * sin(crumpleProgress * 3.14159265) + 0.07 * crumpleProgress;

    vec3 displace = vec3(0.0, 0.0, (noiseVal - 0.2) * noiseAmp);
    vec3 sphereDisplace = normalize(spherePos) * (noiseVal - 0.2) * 0.07;

    vec3 crumpledPos = mix(twistedPos, spherePos, crumpleProgress) 
                     + mix(displace, sphereDisplace, crumpleProgress);

    // 4. Motion Mechanics (Gravity, wind, throw)
    vec3 finalPos = crumpledPos;

    if (uIsEntering) {
      // ENTERING: starts at uProgress = 1.0 (crumpled) and finishes at 0.0 (unfolded flat at center)
      // Follows uProgress driven by easeOutBack, giving it an automatic elastic landing bounce
      float fallT = uProgress;
      
      float rotAngleX = fallT * 2.5;
      float rotAngleY = fallT * 3.5;
      float rotAngleZ = fallT * 1.5;
      
      float cx = cos(rotAngleX), sx = sin(rotAngleX);
      float cy = cos(rotAngleY), sy = sin(rotAngleY);
      float cz = cos(rotAngleZ), sz = sin(rotAngleZ);
      
      mat3 rot = mat3(
        cy*cz, -cy*sz, sy,
        cx*sz + sx*sy*cz, cx*cz - sx*sy*sz, -sx*cy,
        sx*sz - cx*sy*cz, sx*cz + cx*sy*sz, cx*cy
      );
      
      finalPos = rot * crumpledPos;
      
      // Translate from top-left to center
      finalPos.x -= fallT * 0.4;
      finalPos.y += fallT * 1.5;
      finalPos.z -= fallT * 0.3;
    } else {
      // EXITING: starts at uProgress = 0.0 (flat) and finishes at 1.0 (crumpled & thrown away)
      // Paper begins rotating and flying immediately, accelerating outwards
      float throwT = uProgress;
      
      float rotAngleX = throwT * 3.0;
      float rotAngleY = throwT * 4.2;
      float rotAngleZ = throwT * 2.0;
      
      float cx = cos(rotAngleX), sx = sin(rotAngleX);
      float cy = cos(rotAngleY), sy = sin(rotAngleY);
      float cz = cos(rotAngleZ), sz = sin(rotAngleZ);
      
      mat3 rot = mat3(
        cy*cz, -cy*sz, sy,
        cx*sz + sx*sy*cz, cx*cz - sx*sy*sz, -sx*cy,
        sx*sz - cx*sy*cz, sx*cz + cx*sy*sz, cx*cy
      );
      
      finalPos = rot * crumpledPos;
      
      // Translate: rise slightly at first, then fall rapidly to bottom-right
      finalPos.x += throwT * 0.5;
      finalPos.y += throwT * 0.25 - pow(throwT, 2.5) * 2.05;
      finalPos.z -= throwT * 0.5;
    }

    vec4 modelViewPosition = modelViewMatrix * vec4(finalPos, 1.0);
    vPosition = modelViewPosition.xyz;
    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

// Fragment Shader source (Screen Space Derivatives for sharp crease rendering)
const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform sampler2D uTexture;
  uniform float uProgress;

  void main() {
    // Re-calculate normals dynamically in screen space for detailed lighting
    vec3 fdx = dFdx(vPosition);
    vec3 fdy = dFdy(vPosition);
    vec3 normal = normalize(cross(fdx, fdy));

    if (!gl_FrontFacing) {
      normal = -normal;
    }

    // Diffuse & Ambient Lighting
    vec3 lightDir = normalize(vec3(0.4, 0.6, 0.7));
    float diffuse = max(dot(normal, lightDir), 0.0);
    
    // Ambient light reduces as paper crumples to make shadows deeper and high contrast
    float ambient = mix(0.48, 0.22, uProgress);
    float lighting = ambient + 0.78 * diffuse;

    // Specular highlight for paper sheen (increase highlight for crumpled paper)
    vec3 viewDir = normalize(-vPosition);
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 32.0); // sharp highlights
    float specular = spec * mix(0.0, 0.28, uProgress);

    vec4 texColor = texture2D(uTexture, vUv);
    vec3 shadedColor = texColor.rgb * lighting + vec3(specular);

    // Mix texture between flat (uProgress = 0.0) and shaded (uProgress = 1.0)
    // Non-linear mixing to make shadows emerge more naturally
    float shadowMix = smoothstep(0.05, 0.95, uProgress);
    gl_FragColor = vec4(mix(texColor.rgb, shadedColor, shadowMix), texColor.a);
  }
`;

// Helper to capture current viewport screenshot using html2canvas-pro
// html2canvas-pro natively supports oklch, oklab, lab, and lch CSS color functions, completely avoiding crashes.
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

  // Phase state: "entering", "idle", "exiting"
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

    if (customWindow.__transitionActive) {
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

  // Main transition effect
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (phase === "idle") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let isEffectActive = true;
    const customWindow = window as unknown as CustomTransitionWindow;

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

    // Initialize Three.js scene with a higher grid resolution (256x256) for sharp creases
    const initThree = (textureCanvas: HTMLCanvasElement, initialProgress: number, isEntering: boolean) => {
      disposeThree();

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

      // Segments increased from 128 to 256 for ultra-fine crumple textures
      const geometry = new THREE.PlaneGeometry(aspect, 1.0, 256, 256);

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTexture: { value: texture },
          uProgress: { value: initialProgress },
          uTime: { value: 0 },
          uIsEntering: { value: isEntering },
        },
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        extensions: {
          derivatives: true,
        } as unknown as { clipCullDistance?: boolean; multiDraw?: boolean; },
      });
      materialRef.current = material;

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshRef.current = mesh;

      renderer.render(scene, camera);
    };

    // Run Exit Animation (0.0 -> 1.0) with easeInQuad easing and backdrop filter transition
    const runExitAnimation = () => {
      let startTimestamp: number | null = null;
      const duration = 500;

      const animate = (time: number) => {
        if (!isEffectActive) return;
        if (startTimestamp === null) startTimestamp = time;
        const elapsed = time - startTimestamp;
        const rawProgress = Math.min(elapsed / duration, 1.0);
        
        // Apply easeInQuad Easing for exit transition (crumple faster & drop)
        const progress = easeInQuad(rawProgress);

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
          window.dispatchEvent(new CustomEvent("transition-exit-complete"));
        }
      };
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    // Run Enter Animation (1.0 -> 0.0) with easeOutBack easing and backdrop filter fade out
    const runEnterAnimation = () => {
      let startTimestamp: number | null = null;
      const duration = 1000;

      const animate = (time: number) => {
        if (!isEffectActive) return;
        if (startTimestamp === null) startTimestamp = time;
        const elapsed = time - startTimestamp;
        const rawProgress = Math.min(elapsed / duration, 1.0);
        
        // Apply easeOutBack Easing for smooth unfolding elastic expansion
        const factor = easeOutBack(rawProgress);
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
          customWindow.__canvasPaused = false;
          window.dispatchEvent(new CustomEvent("canvas-resume"));
        }
      };
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

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

      const newGeometry = new THREE.PlaneGeometry(aspect, 1.0, 256, 256);
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
        const dummyCanvas = document.createElement("canvas");
        dummyCanvas.width = 512;
        dummyCanvas.height = 512;
        const ctx = dummyCanvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "#f4f6fc";
          ctx.fillRect(0, 0, 512, 512);
        }
        initThree(dummyCanvas, 1.0, true);

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
        runEnterAnimation();
      };

      runEnter();
    } else if (phase === "exiting") {
      customWindow.__canvasPaused = true;
      window.dispatchEvent(new CustomEvent("canvas-pause"));

      const runExit = async () => {
        if (!isEffectActive) return;
        const textureCanvas = await captureScreenshot();
        if (!isEffectActive) return;

        initThree(textureCanvas, 0.0, false);

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

  if (phase === "idle") {
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
      <canvas ref={canvasRef} className="w-full h-full block bg-transparent" />
    </div>
  );
}
