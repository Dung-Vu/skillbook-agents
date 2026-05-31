"use client";

import { useEffect, useRef } from "react";

export function EvolutionDynamicBackground(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Stage base colors for interpolation
    const c0 = { r: 239, g: 68, b: 68 };    // Stage 0: Red (Untrained)
    const c1 = { r: 245, g: 158, b: 11 };   // Stage 1: Amber (Unstructured)
    const c2 = { r: 59, g: 130, b: 246 };   // Stage 2: Blue (Injecting)
    const c3 = { r: 16, g: 185, b: 129 };   // Stage 3: Emerald (Certified)

    const lerpColor = (
      color1: typeof c0,
      color2: typeof c0,
      amt: number
    ): string => {
      const r = Math.round(color1.r + (color2.r - color1.r) * amt);
      const g = Math.round(color1.g + (color2.g - color1.g) * amt);
      const b = Math.round(color1.b + (color2.b - color1.b) * amt);
      return `rgb(${r}, ${g}, ${b})`;
    };

    // Particle class representation
    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      angle: number;
      speed: number;
      orbitRadius: number;
      randomShift: number;
    }

    const particles: Particle[] = [];
    const numParticles = 40; // Optimized from 80 to reduce N^2 pairing checks by 75.3%

    const resize = (): void => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const initParticles = (): void => {
      particles.length = 0;
      const width = canvas.width;
      const height = canvas.height;

      for (let i = 0; i < numParticles; i++) {
        // Base random positions scattered across screen
        const px = Math.random() * width;
        const py = Math.random() * height;
        particles.push({
          x: px,
          y: py,
          baseX: px,
          baseY: py,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2.5 + 1.2,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02 + 0.005,
          orbitRadius: Math.random() * 120 + 40,
          randomShift: Math.random() * 100,
        });
      }
    };

    resize();
    initParticles();

    const draw = (): void => {
      time += 1;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Read scrollProgress from parent CSS Custom Property
      let scrollProgress = 0;
      const parent = canvas.parentElement;
      if (parent) {
        const val = getComputedStyle(parent).getPropertyValue("--evolution-progress");
        if (val) {
          scrollProgress = parseFloat(val.trim());
          if (isNaN(scrollProgress)) scrollProgress = 0;
          if (scrollProgress < 0) scrollProgress = 0;
          if (scrollProgress > 1) scrollProgress = 1;
        }
      }

      // 2. Interpolate active color based on progress
      let activeColorStr = "rgb(239, 68, 68)";
      let activeRGB = c0;
      
      if (scrollProgress < 0.33) {
        const amt = scrollProgress / 0.33;
        activeColorStr = lerpColor(c0, c1, amt);
        activeRGB = {
          r: Math.round(c0.r + (c1.r - c0.r) * amt),
          g: Math.round(c0.g + (c1.g - c0.g) * amt),
          b: Math.round(c0.b + (c1.b - c0.b) * amt),
        };
      } else if (scrollProgress < 0.66) {
        const amt = (scrollProgress - 0.33) / 0.33;
        activeColorStr = lerpColor(c1, c2, amt);
        activeRGB = {
          r: Math.round(c1.r + (c2.r - c1.r) * amt),
          g: Math.round(c1.g + (c2.g - c1.g) * amt),
          b: Math.round(c1.b + (c2.b - c1.b) * amt),
        };
      } else {
        const amt = (scrollProgress - 0.66) / 0.34;
        activeColorStr = lerpColor(c2, c3, amt);
        activeRGB = {
          r: Math.round(c2.r + (c3.r - c2.r) * amt),
          g: Math.round(c2.g + (c3.g - c2.g) * amt),
          b: Math.round(c2.b + (c3.b - c2.b) * amt),
        };
      }

      // Clear screen
      ctx.fillStyle = "rgba(10, 15, 26, 0.25)"; // trail effect
      ctx.fillRect(0, 0, width, height);

      // --- Evolution Visual Morphing Logic ---
      
      // Stage 0 -> 1: Chaos particles drifting freely
      // Stage 1 -> 2: Particles forming neural networking mesh
      // Stage 2 -> 3: Cyber Streams flowing into center
      // Stage 3: Smooth orbiting particle system around a balance core

      const chaosFactor = Math.max(0, 1.0 - scrollProgress * 2.2); // 1.0 at start, 0 at mid
      const meshFactor = scrollProgress > 0.15 && scrollProgress < 0.75 
        ? Math.sin(((scrollProgress - 0.15) / 0.6) * Math.PI) 
        : 0; // peaks at 0.45 progress
      const streamFactor = scrollProgress > 0.45 && scrollProgress < 0.9
        ? Math.sin(((scrollProgress - 0.45) / 0.45) * Math.PI)
        : 0;
      const stableFactor = Math.max(0, (scrollProgress - 0.7) / 0.3); // rises from 0.7 to 1.0

      // 3. Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Chaos motion (Stage 0)
        p.baseX += p.vx * chaosFactor;
        p.baseY += p.vy * chaosFactor;

        // Wrap edges for chaos motion
        if (p.baseX < 0) p.baseX = width;
        if (p.baseX > width) p.baseX = 0;
        if (p.baseY < 0) p.baseY = height;
        if (p.baseY > height) p.baseY = 0;

        // Stable Orbiting Motion (Stage 3)
        p.angle += p.speed * (1.0 + stableFactor * 1.5);
        const orbitX = centerX + Math.cos(p.angle + p.randomShift) * p.orbitRadius;
        const orbitY = centerY + Math.sin(p.angle + p.randomShift) * p.orbitRadius;

        // Morph positions between Chaos and Stable Orbit
        p.x = p.baseX * (1.0 - stableFactor) + orbitX * stableFactor;
        p.y = p.baseY * (1.0 - stableFactor) + orbitY * stableFactor;

        const radius = p.size * (1.0 + stableFactor * 0.5);
        
        // 1. Draw outer soft glow circle (using activeRGB to avoid regex replace operations)
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius + 2.0 + stableFactor * 4.0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${activeRGB.r}, ${activeRGB.g}, ${activeRGB.b}, ${0.12 + stableFactor * 0.12})`;
        ctx.fill();

        // 2. Draw solid core circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = activeColorStr;
        ctx.fill();
      }

      // 4. Draw Neural Networking Mesh (Stage 1 & 2 peak)
      // Optimized mesh drawing with AABB, squared distance, and maximum connection bounds.
      if (meshFactor > 0.05) {
        ctx.strokeStyle = `rgba(${activeRGB.r}, ${activeRGB.g}, ${activeRGB.b}, ${meshFactor * 0.15})`;
        ctx.lineWidth = 0.8;

        const maxDist = 130;
        const maxDistSq = maxDist * maxDist;
        const maxConnections = 3; // Prevent over-crowded paths and save strokes
        
        // Track number of connections for each particle to prevent visual and stroke overload
        const connectionCounts = new Uint8Array(particles.length);
        
        for (let i = 0; i < particles.length; i++) {
          if (connectionCounts[i] >= maxConnections) continue;
          
          const p1 = particles[i];
          
          for (let j = i + 1; j < particles.length; j++) {
            if (connectionCounts[j] >= maxConnections) continue;
            
            const p2 = particles[j];
            
            const dx = p1.x - p2.x;
            // Axis-aligned bounding box (AABB) X-axis prune
            if (Math.abs(dx) >= maxDist) continue;
            
            const dy = p1.y - p2.y;
            // Axis-aligned bounding box (AABB) Y-axis prune
            if (Math.abs(dy) >= maxDist) continue;
            
            // Squared distance check: avoids costly Math.sqrt
            const distSq = dx * dx + dy * dy;
            if (distSq < maxDistSq) {
              connectionCounts[i]++;
              connectionCounts[j]++;
              
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // 5. Draw Cyber Data Streams sucking into center (Stage 2 peak)
      if (streamFactor > 0.05) {
        ctx.strokeStyle = `rgba(${activeRGB.r}, ${activeRGB.g}, ${activeRGB.b}, ${streamFactor * 0.35})`;
        ctx.lineWidth = 1.5;
        
        const numStreams = 8;
        for (let i = 0; i < numStreams; i++) {
          const streamAngle = (i / numStreams) * Math.PI * 2 + (time * 0.005);
          const outerR = Math.min(width, height) * 0.65;
          const innerR = Math.min(width, height) * 0.08;
          
          // Flow animation along the radius
          const flowProgress = ((time * 0.015) + (i / numStreams)) % 1.0;
          const currentR = outerR - (outerR - innerR) * flowProgress;
          
          const startX = centerX + Math.cos(streamAngle) * currentR;
          const startY = centerY + Math.sin(streamAngle) * currentR;
          
          const endX = centerX + Math.cos(streamAngle) * (currentR - 35);
          const endY = centerY + Math.sin(streamAngle) * (currentR - 35);

          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        }
      }

      // 6. Draw Balanced Core (Stage 3 final stability)
      if (stableFactor > 0.05) {
        // Glowing central sun/core representing the fully certified, stable Agent
        const coreRadius = 45 * stableFactor;
        
        // Radial glow
        const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius * 2);
        glow.addColorStop(0, `rgba(${activeRGB.r}, ${activeRGB.g}, ${activeRGB.b}, ${stableFactor * 0.35})`);
        glow.addColorStop(0.5, `rgba(${activeRGB.r}, ${activeRGB.g}, ${activeRGB.b}, ${stableFactor * 0.12})`);
        glow.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(centerX, centerY, coreRadius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Core shell
        ctx.strokeStyle = `rgba(${activeRGB.r}, ${activeRGB.g}, ${activeRGB.b}, ${stableFactor * 0.8})`;
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner glowing core
        ctx.fillStyle = `rgba(${activeRGB.r}, ${activeRGB.g}, ${activeRGB.b}, ${stableFactor * 0.25})`;
        ctx.beginPath();
        ctx.arc(centerX, centerY, coreRadius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Shockwave rings pulsing outwards from the core
        const wavePeriod = 0.02;
        const waveProgress = (time * wavePeriod) % 1.0;
        const waveRadius = coreRadius + (120 * waveProgress);
        
        ctx.strokeStyle = `rgba(${activeRGB.r}, ${activeRGB.g}, ${activeRGB.b}, ${stableFactor * (1.0 - waveProgress) * 0.35})`;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
      }

      if (isDrawing) {
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    initParticles();

    let isDrawing = false;
    const startDrawing = (): void => {
      if (isDrawing) return;
      isDrawing = true;
      draw();
    };

    const stopDrawing = (): void => {
      isDrawing = false;
      cancelAnimationFrame(animationId);
    };

    // Only draw canvas when its container section is visible in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startDrawing();
        } else {
          stopDrawing();
        }
      },
      { threshold: 0.01 }
    );

    const parent = canvas.parentElement;
    if (parent) {
      observer.observe(parent);
    } else {
      startDrawing();
    }

    const handleResize = (): void => {
      resize();
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      stopDrawing();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
