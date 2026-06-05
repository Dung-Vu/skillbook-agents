"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

export interface TransitionNavigator {
  isExiting: boolean;
  navigateTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

interface CustomTransitionWindow extends Window {
  __paperCrumpleOverlayRegistered?: boolean;
  __canvasPaused?: boolean;
  __transitionActive?: boolean;
}

export function useTransitionNavigator(): TransitionNavigator {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const navigateTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();

      // 1. Dispatch the canvas-pause event and set state synchronously to freeze background and free CPU immediately (E2E expectation)
      if (typeof window !== "undefined") {
        const customWindow = window as unknown as CustomTransitionWindow;
        customWindow.__canvasPaused = true;
        window.dispatchEvent(new CustomEvent("canvas-pause"));
      }

      // 2. Set isExiting state to true immediately for content fade/blur animations
      setIsExiting(true);

      // 3. Coordinate transition with WebGL overlay
      if (typeof window !== "undefined") {
        let isNavigated = false;
        let timeoutId: ReturnType<typeof setTimeout> | undefined;

        const performNavigation = (): void => {
          if (!isNavigated) {
            isNavigated = true;
            if (timeoutId) {
              clearTimeout(timeoutId);
              timeoutId = undefined;
            }
            router.push(href);
          }
        };

        // Listen for completion of the crumple animation from PaperCrumpleOverlay
        const handleTransitionComplete = (): void => {
          window.removeEventListener("transition-exit-complete", handleTransitionComplete);
          performNavigation();
        };
        window.addEventListener("transition-exit-complete", handleTransitionComplete);

        // Check if the overlay is registered on the window object
        const customWindow = window as unknown as CustomTransitionWindow;
        const hasOverlay = customWindow.__paperCrumpleOverlayRegistered === true;
        
        // Fallback delay is a safety mechanism:
        // - If overlay is registered, 800ms safety timeout (since WebGL exit transition takes 500ms).
        // - If overlay is missing, 300ms fallback delay to support basic visual delays or E2E tests.
        const fallbackDelay = hasOverlay ? 800 : 300;

        timeoutId = setTimeout(() => {
          window.removeEventListener("transition-exit-complete", handleTransitionComplete);
          customWindow.__transitionActive = true;
          performNavigation();
        }, fallbackDelay);

        // Dispatch transition-exit-start to signal the overlay to take a snapshot & begin the crumple animation
        window.dispatchEvent(new CustomEvent("transition-exit-start", { detail: { href } }));
      } else {
        router.push(href);
      }
    },
    [router]
  );

  return { isExiting, navigateTo };
}

