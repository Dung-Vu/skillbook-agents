"use client";

import { useEffect, useRef } from "react";

export function SandboxDynamicBackground(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    // Code characters pool for digital rain
    const charPool = "0101010101010101{}[]();:=>+-$_#@!ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const columns: Array<{
      x: number;
      y: number;
      speed: number;
      chars: string[];
      charsOpacity: number[];
    }> = [];

    // Circuit lines data
    interface CircuitNode {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      speed: number;
      color: string;
    }
    const circuits: CircuitNode[] = [];
    const numCircuits = 6;

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
      const width = canvas.width;
      const height = canvas.height;

      // Initialize digital rain columns (one column every 32px)
      columns.length = 0;
      const numCols = Math.ceil(width / 32);

      for (let i = 0; i < numCols; i++) {
        const colChars: string[] = [];
        const colOpacities: number[] = [];
        const len = Math.floor(Math.random() * 15) + 8;
        
        for (let j = 0; j < len; j++) {
          colChars.push(charPool[Math.floor(Math.random() * charPool.length)]);
          colOpacities.push(Math.random() * 0.15 + 0.02);
        }

        columns.push({
          x: i * 32 + (Math.random() - 0.5) * 8,
          y: Math.random() * -height,
          speed: Math.random() * 1.5 + 0.8,
          chars: colChars,
          charsOpacity: colOpacities,
        });
      }

      // Initialize circuits
      circuits.length = 0;
      for (let i = 0; i < numCircuits; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const angle = Math.floor(Math.random() * 4) * (Math.PI / 2); // 90 degree movements
        const len = Math.random() * 180 + 80;

        circuits.push({
          x: x,
          y: y,
          targetX: x + Math.cos(angle) * len,
          targetY: y + Math.sin(angle) * len,
          progress: Math.random(),
          speed: Math.random() * 0.003 + 0.001,
          color: Math.random() > 0.5 ? "rgba(168, 85, 247, 0.25)" : "rgba(99, 102, 241, 0.25)",
        });
      }
    };

    resize();
    initAssets();

    const draw = (): void => {
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas with very transparent slate background
      ctx.fillStyle = "rgba(7, 11, 19, 0.25)";
      ctx.fillRect(0, 0, width, height);

      // --- 1. Draw Digital Matrix Rain (Cheated Cyber Background) ---
      ctx.font = "11px monospace";
      ctx.textAlign = "center";

      for (const col of columns) {
        // Move column down
        col.y += col.speed;
        if (col.y > height + 200) {
          col.y = -Math.random() * 200;
          col.speed = Math.random() * 1.5 + 0.8;
        }

        // Draw character train
        for (let j = 0; j < col.chars.length; j++) {
          const charY = col.y - j * 16;
          if (charY < 0 || charY > height) continue;

          // Slowly change characters occasionally
          if (Math.random() < 0.015) {
            col.chars[j] = charPool[Math.floor(Math.random() * charPool.length)];
          }

          const opacity = col.charsOpacity[j];
          
          // Head of column glows brighter
          if (j === 0) {
            ctx.fillStyle = `rgba(236, 72, 153, ${opacity * 2.5})`; // Neon Pink head
          } else {
            ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`; // Cyber Purple trail
          }

          ctx.fillText(col.chars[j], col.x, charY);
        }
      }

      // --- 2. Draw Technological Circuit Board Lines ---
      for (const cir of circuits) {
        cir.progress += cir.speed;
        if (cir.progress > 1.0) {
          // Re-init circuit to a new location
          cir.progress = 0;
          cir.x = Math.random() * width;
          cir.y = Math.random() * height;
          const angle = Math.floor(Math.random() * 4) * (Math.PI / 2);
          const len = Math.random() * 150 + 60;
          cir.targetX = cir.x + Math.cos(angle) * len;
          cir.targetY = cir.y + Math.sin(angle) * len;
          cir.speed = Math.random() * 0.003 + 0.001;
          cir.color = Math.random() > 0.5 ? "rgba(168, 85, 247, 0.25)" : "rgba(99, 102, 241, 0.25)";
        }

        const currX = cir.x + (cir.targetX - cir.x) * cir.progress;
        const currY = cir.y + (cir.targetY - cir.y) * cir.progress;

        // Draw circuit line
        ctx.strokeStyle = cir.color;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(cir.x, cir.y);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        // Draw circuit pulsing node (glow head)
        ctx.fillStyle = cir.color;
        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw tiny circle at start coordinates representing PCB soldering joints
        ctx.strokeStyle = cir.color;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(cir.x, cir.y, 1.5, 0, Math.PI * 2);
        ctx.stroke();
      }

      if (isDrawing) {
        animationId = requestAnimationFrame(draw);
      }
    };

    const handleResize = (): void => {
      resize();
      initAssets();
    };

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
      style={{ opacity: 0.7 }}
    />
  );
}
