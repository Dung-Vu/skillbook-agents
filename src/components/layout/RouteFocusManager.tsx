"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RouteFocusManager(): null {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for the next render frame after route navigation completes
    const frameId = requestAnimationFrame(() => {
      const mainElement = document.getElementById("main-content");
      if (mainElement) {
        mainElement.focus({ preventScroll: true });
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
}
