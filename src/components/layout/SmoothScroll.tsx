"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps): React.JSX.Element {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Khởi tạo Lenis Scroll với cấu hình tối ưu cảm giác mượt mà
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing khoa học dạng Exponential Out
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // 2. Đồng bộ hóa ScrollTrigger với Lenis
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // 3. Tích hợp Lenis vào GSAP Ticker để tối ưu hóa RAF (RequestAnimationFrame)
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000); // Đổi giây sang mili-giây cho Lenis
    };
    gsap.ticker.add(updateTicker);
    // gsap.ticker.lagSmoothing(0); // Disabled to allow GSAP to automatically smooth motion during large frame drops

    // 4. Cleanup khi component unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return <>{children}</>;
}
