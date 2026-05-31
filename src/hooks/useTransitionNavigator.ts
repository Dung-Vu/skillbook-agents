"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

export interface TransitionNavigator {
  isExiting: boolean;
  navigateTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function useTransitionNavigator(): TransitionNavigator {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const navigateTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      // 1. Dispatch the canvas-pause event to freeze background and free CPU
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("canvas-pause"));
      }

      // 2. Set isExiting state to true
      setIsExiting(true);

      // 3. Wait exactly 300ms before navigating
      setTimeout(() => {
        router.push(href);
      }, 300);
    },
    [router]
  );

  return { isExiting, navigateTo };
}
