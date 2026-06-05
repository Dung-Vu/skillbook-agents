"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  history: { x: number; y: number }[];
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  alpha: number;
}

export function MeshGridBackground(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isPaused = false;
    let isLoopRunning = false;
    const particles: Particle[] = [];
    const ripples: Ripple[] = [];

    let mouseX = -1000;
    let mouseY = -1000;
    let isMouseOver = false;

    let lastWidth = 0;
    let lastHeight = 0;

    const handleResize = (): void => {
      const rect = canvas.getBoundingClientRect();
      const newWidth = rect.width;
      const newHeight = rect.height;
      if (newWidth === 0 || newHeight === 0) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = newWidth * dpr;
      canvas.height = newHeight * dpr;
      ctx.scale(dpr, dpr);

      const targetCount = window.innerWidth < 768 ? 20 : 40;

      if (particles.length === 0) {
        // Initialize new particles
        for (let i = 0; i < targetCount; i++) {
          particles.push({
            x: Math.random() * newWidth,
            y: Math.random() * newHeight,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            size: Math.random() * 1.5 + 1.2,
            history: [],
          });
        }
      } else {
        // Scale existing particles and adjust count non-destructively
        const scaleX = lastWidth > 0 ? newWidth / lastWidth : 1;
        const scaleY = lastHeight > 0 ? newHeight / lastHeight : 1;

        for (const p of particles) {
          p.x *= scaleX;
          p.y *= scaleY;
          // Scale history too
          if (p.history) {
            for (const pt of p.history) {
              pt.x *= scaleX;
              pt.y *= scaleY;
            }
          }
        }

        // Adjust particle count non-destructively
        if (particles.length < targetCount) {
          const toAdd = targetCount - particles.length;
          for (let i = 0; i < toAdd; i++) {
            particles.push({
              x: Math.random() * newWidth,
              y: Math.random() * newHeight,
              vx: (Math.random() - 0.5) * 0.35,
              vy: (Math.random() - 0.5) * 0.35,
              size: Math.random() * 1.5 + 1.2,
              history: [],
            });
          }
        } else if (particles.length > targetCount) {
          particles.length = targetCount;
        }
      }

      lastWidth = newWidth;
      lastHeight = newHeight;
    };

    let resizeTimeout: NodeJS.Timeout | null = null;
    const debouncedResize = (): void => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        handleResize();
      }, 150);
    };

    window.addEventListener("resize", debouncedResize);
    // Trigger synchronously once on mount
    handleResize();

    const handleMouseMove = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
        isMouseOver = true;
      } else {
        isMouseOver = false;
      }
    };

    const handleMouseLeave = (): void => {
      mouseX = -1000;
      mouseY = -1000;
      isMouseOver = false;
    };

    const handleTouchMove = (e: TouchEvent): void => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        if (touchX >= rect.left && touchX <= rect.right &&
            touchY >= rect.top && touchY <= rect.bottom) {
          mouseX = touchX - rect.left;
          mouseY = touchY - rect.top;
          isMouseOver = true;
        }
      }
    };

    const handleClick = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom) {
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        ripples.push({
          x: clickX,
          y: clickY,
          radius: 0,
          maxRadius: 180,
          speed: 3.5,
          alpha: 0.6,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave, { passive: true });
    window.addEventListener("click", handleClick);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent): void => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const draw = (): void => {
      if (isPaused || !isVisible) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        isLoopRunning = false;
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      // 1. Update & Draw Click Ripple Waves
      for (let k = ripples.length - 1; k >= 0; k--) {
        const rip = ripples[k];
        rip.radius += rip.speed;
        rip.alpha = (1 - rip.radius / rip.maxRadius) * 0.4;

        if (rip.radius >= rip.maxRadius) {
          ripples.splice(k, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(99, 102, 241, ${rip.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Connection buckets for batching
      interface Connection {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
      }
      const lowBucket: Connection[] = [];
      const medBucket: Connection[] = [];
      const highBucket: Connection[] = [];

      const maxConnectDist = 110;
      const mouseAttractRadius = 150;
      const attractForce = 0.02;

      // 2. Update Neural Node Particles & Collect Connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Attraction to mouse
        if (isMouseOver && !prefersReducedMotion) {
          const dx = mouseX - p1.x;
          const dy = mouseY - p1.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseAttractRadius * mouseAttractRadius) {
            const dist = Math.sqrt(distSq);
            if (dist > 0) {
              p1.vx += (dx / dist) * attractForce;
              p1.vy += (dy / dist) * attractForce;
            }
          }
        }

        // Ripple push wave
        for (const rip of ripples) {
          const dx = p1.x - rip.x;
          const dy = p1.y - rip.y;
          const distSq = dx * dx + dy * dy;
          const ripRadiusSq = rip.radius * rip.radius;
          if (distSq < ripRadiusSq && distSq > (rip.radius - 20) * (rip.radius - 20)) {
            const dist = Math.sqrt(distSq);
            if (dist > 0) {
              const pushForce = (1 - dist / rip.maxRadius) * 3;
              p1.vx += (dx / dist) * pushForce;
              p1.vy += (dy / dist) * pushForce;
            }
          }
        }

        // Limit velocity
        const speed = Math.sqrt(p1.vx * p1.vx + p1.vy * p1.vy);
        const maxSpeed = 0.75;
        if (speed > maxSpeed) {
          p1.vx = (p1.vx / speed) * maxSpeed;
          p1.vy = (p1.vy / speed) * maxSpeed;
        }

        // Update positions
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce walls
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Boundary clamp
        if (p1.x < 0) p1.x = 0;
        if (p1.x > width) p1.x = width;
        if (p1.y < 0) p1.y = 0;
        if (p1.y > height) p1.y = height;

        // Manage history trail
        if (!prefersReducedMotion) {
          p1.history.push({ x: p1.x, y: p1.y });
          if (p1.history.length > 5) {
            p1.history.shift();
          }
        } else {
          p1.history = [];
        }

        // Draw particle trails
        for (let h = 0; h < p1.history.length; h++) {
          const pt = p1.history[h];
          const trailAlpha = (h / p1.history.length) * 0.12;
          const trailSize = p1.size * (0.35 + (h / p1.history.length) * 0.65);
          ctx.fillStyle = `rgba(99, 102, 241, ${trailAlpha})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, trailSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Collect particle-to-particle connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxConnectDist * maxConnectDist) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxConnectDist) * 0.12;
            const conn = { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
            
            if (alpha < 0.045) {
              lowBucket.push(conn);
            } else if (alpha < 0.08) {
              medBucket.push(conn);
            } else {
              highBucket.push(conn);
            }
          }
        }

        // Collect particle-to-mouse connections
        if (isMouseOver) {
          const dx = mouseX - p1.x;
          const dy = mouseY - p1.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseAttractRadius * mouseAttractRadius) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / mouseAttractRadius) * 0.18;
            const conn = { x1: p1.x, y1: p1.y, x2: mouseX, y2: mouseY };
            
            if (alpha < 0.045) {
              lowBucket.push(conn);
            } else if (alpha < 0.08) {
              medBucket.push(conn);
            } else {
              highBucket.push(conn);
            }
          }
        }

        // Draw node
        ctx.fillStyle = "rgba(99, 102, 241, 0.4)";
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fill();

        // Node glow
        ctx.fillStyle = "rgba(99, 102, 241, 0.12)";
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size * 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Batch-stroke connections grouped by opacity buckets
      // Low Opacity Bucket (alpha = 0.03)
      if (lowBucket.length > 0) {
        ctx.strokeStyle = "rgba(99, 102, 241, 0.03)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        for (let i = 0; i < lowBucket.length; i++) {
          const c = lowBucket[i];
          ctx.moveTo(c.x1, c.y1);
          ctx.lineTo(c.x2, c.y2);
        }
        ctx.stroke();
      }

      // Medium Opacity Bucket (alpha = 0.06)
      if (medBucket.length > 0) {
        ctx.strokeStyle = "rgba(99, 102, 241, 0.06)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        for (let i = 0; i < medBucket.length; i++) {
          const c = medBucket[i];
          ctx.moveTo(c.x1, c.y1);
          ctx.lineTo(c.x2, c.y2);
        }
        ctx.stroke();
      }

      // High Opacity Bucket (alpha = 0.10)
      if (highBucket.length > 0) {
        ctx.strokeStyle = "rgba(99, 102, 241, 0.10)";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        for (let i = 0; i < highBucket.length; i++) {
          const c = highBucket[i];
          ctx.moveTo(c.x1, c.y1);
          ctx.lineTo(c.x2, c.y2);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    let isMountedDelayDone = false;

    const startLoop = (): void => {
      if (!isMountedDelayDone) return;
      if (!isLoopRunning && isVisible && !isPaused) {
        isLoopRunning = true;
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    const stopLoop = (): void => {
      if (isLoopRunning) {
        cancelAnimationFrame(animationFrameId);
        isLoopRunning = false;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let scrollTimeout: NodeJS.Timeout | null = null;
    let isScrolling = false;

    const handleScrollPause = (): void => {
      if (!isScrolling) {
        isScrolling = true;
        stopLoop();
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        if (isVisible && !isPaused) {
          startLoop();
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScrollPause, { passive: true });

    const handlePause = (): void => {
      isPaused = true;
      if (typeof window !== "undefined") {
        window.__canvasPaused = true;
      }
      stopLoop();
    };

    const handleResume = (): void => {
      isPaused = false;
      if (typeof window !== "undefined") {
        window.__canvasPaused = false;
      }
      startLoop();
    };

    window.addEventListener("canvas-pause", handlePause);
    window.addEventListener("canvas-resume", handleResume);

    const startTimeout = setTimeout(() => {
      isMountedDelayDone = true;
      if (isVisible && !isPaused) {
        startLoop();
      }
    }, 500);

    return () => {
      if (startTimeout) clearTimeout(startTimeout);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("scroll", handleScrollPause);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("canvas-pause", handlePause);
      window.removeEventListener("canvas-resume", handleResume);
      mediaQuery.removeEventListener("change", handleMotionChange);
      observer.disconnect();
      stopLoop();
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drift-violet {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes drift-teal {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-40px, 40px) scale(0.9); }
          66% { transform: translate(30px, -20px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes drift-blue {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, 20px) scale(1.05); }
          66% { transform: translate(-30px, -40px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}} />
      
      {/* CSS Auroras */}
      <div className="absolute top-[10%] left-[10%] w-[320px] h-[320px] rounded-full bg-[rgba(167,139,250,0.14)] blur-[80px] pointer-events-none" style={{ animation: "drift-violet 25s infinite ease-in-out" }} />
      <div className="absolute top-[20%] right-[10%] w-[360px] h-[360px] rounded-full bg-[rgba(45,212,191,0.12)] blur-[90px] pointer-events-none" style={{ animation: "drift-teal 30s infinite ease-in-out" }} />
      <div className="absolute bottom-[20%] left-[30%] w-[340px] h-[340px] rounded-full bg-[rgba(96,165,250,0.13)] blur-[80px] pointer-events-none" style={{ animation: "drift-blue 28s infinite ease-in-out" }} />

      {/* CSS-only static cyber grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(99, 102, 241, 0.045) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(99, 102, 241, 0.045) 1px, transparent 1px)
        `,
        backgroundSize: '45px 45px'
      }} />

      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-screen h-screen pointer-events-none z-0"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />
    </div>
  );
}
