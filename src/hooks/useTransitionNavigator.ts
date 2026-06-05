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

      // 2. Defer setting isExiting to true if the 3D WebGL overlay is present,
      // so that the DOM screenshot is captured sharp and fully visible.
      if (typeof window !== "undefined") {
        const customWindow = window as unknown as CustomTransitionWindow;
        const hasOverlay = customWindow.__paperCrumpleOverlayRegistered === true;
        console.log("[useTransitionNavigator] navigateTo called for:", href, "hasOverlay:", hasOverlay);
        
        let isNavigated = false;
        let timeoutId: ReturnType<typeof setTimeout> | undefined;

        const performNavigation = (): void => {
          if (!isNavigated) {
            console.log("[useTransitionNavigator] performNavigation called");
            isNavigated = true;
            if (timeoutId) {
              clearTimeout(timeoutId);
              timeoutId = undefined;
            }
            router.push(href);
          }
        };

        const handleTransitionComplete = (): void => {
          console.log("[useTransitionNavigator] transition-exit-complete event received");
          window.removeEventListener("transition-exit-complete", handleTransitionComplete);
          performNavigation();
        };
        window.addEventListener("transition-exit-complete", handleTransitionComplete);

        const fallbackDelay = hasOverlay ? 1500 : 300;
        console.log("[useTransitionNavigator] setting safety timeout with delay:", fallbackDelay);

        timeoutId = setTimeout(() => {
          console.log("[useTransitionNavigator] safety timeout triggered");
          window.removeEventListener("transition-exit-complete", handleTransitionComplete);
          customWindow.__transitionActive = true;
          performNavigation();
        }, fallbackDelay);

        if (hasOverlay) {
          const handleExitAnimating = (): void => {
            console.log("[useTransitionNavigator] transition-exit-animating event received");
            window.removeEventListener("transition-exit-animating", handleExitAnimating);
            setIsExiting(true);
          };
          window.addEventListener("transition-exit-animating", handleExitAnimating);
        } else {
          setIsExiting(true);
        }

        window.dispatchEvent(new CustomEvent("transition-exit-start", { detail: { href } }));
      } else {
        router.push(href);
      }
    },
    [router]
  );

  return { isExiting, navigateTo };
}

