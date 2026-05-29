"use client";

import { useEffect, useRef } from "react";

export function CyberpunkDynamicBackground(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Stars data
    const stars: Array<{ x: number; y: number; size: number; speed: number; alpha: number }> = [];
    const numStars = 60;

    // Light stream particles (for the 3D grid area)
    const streams: Array<{
      xCenterOffset: number;
      progress: number;
      speed: number;
      width: number;
      color: string;
    }> = [];
    const numStreams = 8;

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

    const initAssets = (): void => {
      // Initialize stars in the upper half of the screen
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height * 0.55), // Upper part
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.05 + 0.01,
          alpha: Math.random() * 0.6 + 0.2,
        });
      }

      // Initialize neon grid data streams
      streams.length = 0;
      for (let i = 0; i < numStreams; i++) {
        streams.push({
          xCenterOffset: (Math.random() - 0.5) * 200, // starting close to center horizon
          progress: Math.random(),
          speed: Math.random() * 0.006 + 0.003,
          width: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? "rgba(167, 139, 250, 0.8)" : "rgba(236, 72, 153, 0.8)",
        });
      }
    };

    const draw = (): void => {
      time += 1;
      const width = canvas.width;
      const height = canvas.height;
      const horizon = height * 0.55; // Horizon height split

      // Clear with very dark slate alpha to create motion trails
      ctx.fillStyle = "rgba(15, 23, 42, 0.2)";
      ctx.fillRect(0, 0, width, height);

      // --- Draw Stars (Twinkling slowly) ---
      for (const s of stars) {
        s.alpha += (Math.random() - 0.5) * 0.04;
        if (s.alpha < 0.1) s.alpha = 0.1;
        if (s.alpha > 0.8) s.alpha = 0.8;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 231, 255, ${s.alpha})`;
        ctx.fill();
      }

      // --- Draw Cyberpunk Retro Synthwave Sun (Horizon Glow) ---
      const sunX = width / 2;
      const sunY = horizon - 20;
      const sunRadius = Math.min(width * 0.12, 120);

      if (sunRadius > 30) {
        // Sun radial glow
        const sunGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius * 2);
        sunGlow.addColorStop(0, "rgba(236, 72, 153, 0.25)"); // Pink neon core
        sunGlow.addColorStop(0.5, "rgba(139, 92, 246, 0.08)"); // Indigo glow
        sunGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw Sun itself with retro horizontal grid lines
        ctx.save();
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, Math.PI, 0); // Upper half sun
        ctx.clip();

        // Sun gradient
        const sunGrad = ctx.createLinearGradient(sunX, sunY - sunRadius, sunX, sunY);
        sunGrad.addColorStop(0, "#f43f5e"); // Pink-rose neon
        sunGrad.addColorStop(1, "#8b5cf6"); // Violet-indigo neon
        ctx.fillStyle = sunGrad;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fill();

        // Overlay horizontal empty slits for retro vibe
        ctx.fillStyle = "rgba(15, 23, 42, 1)";
        for (let yOffset = sunY - sunRadius; yOffset < sunY; yOffset += 14) {
          const slitHeight = ((yOffset - (sunY - sunRadius)) / sunRadius) * 6 + 1.5;
          ctx.fillRect(sunX - sunRadius - 10, yOffset, sunRadius * 2 + 20, slitHeight);
        }
        ctx.restore();
      }

      // --- Draw 3D Perspective Cyberpunk Grid (Bottom Half) ---
      const gridSpeed = 0.05;
      const numVerticalLines = 26;
      const offset = (time * gridSpeed) % 1;

      // 1. Draw vertical perspective grid lines radiating from the center of the horizon
      ctx.strokeStyle = "rgba(139, 92, 246, 0.16)";
      ctx.lineWidth = 1.2;
      const centerX = width / 2;

      for (let i = 0; i <= numVerticalLines; i++) {
        const xHorizon = (width / numVerticalLines) * i;
        // Project radiating line downward and outward
        const xBottom = ((xHorizon - centerX) * 4) + centerX;

        ctx.beginPath();
        ctx.moveTo(xHorizon, horizon);
        ctx.lineTo(xBottom, height);
        ctx.stroke();
      }

      // 2. Draw horizontal perspective grid lines moving forward
      const numHorizontalLines = 14;
      for (let i = 0; i < numHorizontalLines; i++) {
        // Perspective distribution using power curve
        const normY = (i + offset) / numHorizontalLines;
        const perspectiveY = Math.pow(normY, 2.5); // creates exponential spacing
        const y = horizon + (height - horizon) * perspectiveY;

        ctx.strokeStyle = `rgba(139, 92, 246, ${perspectiveY * 0.45})`;
        ctx.lineWidth = 1.0 + perspectiveY * 2.2;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // --- Draw 3D Neon Light Data Streams (Flowing down the grid) ---
      for (const st of streams) {
        st.progress += st.speed;
        if (st.progress > 1.0) {
          st.progress = 0;
          st.xCenterOffset = (Math.random() - 0.5) * 180;
        }

        const pY = Math.pow(st.progress, 2.5);
        const yStart = horizon + (height - horizon) * pY;
        
        // Slightly behind for tail
        const tailProgress = Math.max(0, st.progress - 0.08);
        const pYTail = Math.pow(tailProgress, 2.5);
        const yEnd = horizon + (height - horizon) * pYTail;

        // Radiating horizontal offset projection
        const xHorizonStart = centerX + st.xCenterOffset;
        const xStart = ((xHorizonStart - centerX) * (1.0 + pY * 3.0)) + centerX;
        const xEnd = ((xHorizonStart - centerX) * (1.0 + pYTail * 3.0)) + centerX;

        ctx.beginPath();
        ctx.moveTo(xStart, yStart);
        ctx.lineTo(xEnd, yEnd);
        ctx.strokeStyle = st.color;
        ctx.lineWidth = st.width * (1.0 + pY * 3.0);
        ctx.lineCap = "round";
        ctx.shadowColor = st.color;
        ctx.shadowBlur = 10 * pY;
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      }

      // --- Draw Horizontal Cyberpunk Laser Scanner Line ---
      // A neon laser sweep line that moves vertically across the whole screen
      const scanPeriod = 0.0015;
      const scanProgress = (Math.sin(time * scanPeriod) + 1.0) / 2.0; // Oscillates smoothly 0 to 1
      const scanY = scanProgress * height;

      // Glow backing
      const laserGlow = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      laserGlow.addColorStop(0, "rgba(236, 72, 153, 0)");
      laserGlow.addColorStop(0.5, "rgba(236, 72, 153, 0.12)"); // Pink soft neon
      laserGlow.addColorStop(1, "rgba(236, 72, 153, 0)");
      ctx.fillStyle = laserGlow;
      ctx.fillRect(0, scanY - 20, width, 40);

      // Core crisp line
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.strokeStyle = "rgba(236, 72, 153, 0.55)";
      ctx.lineWidth = 2.0;
      ctx.shadowColor = "rgba(236, 72, 153, 0.8)";
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      if (isDrawing) {
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    initAssets();

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
      initAssets();
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
