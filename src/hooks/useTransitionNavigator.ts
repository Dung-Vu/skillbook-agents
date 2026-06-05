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

      // 1. Dispatch the canvas-pause event and set state synchronously to freeze background and free CPU immediately (E2E expectation)
      if (typeof window !== "undefined") {
        window.__canvasPaused = true;
        window.dispatchEvent(new CustomEvent("canvas-pause"));
        (window as any).__navigationClickedTime = Date.now();
      }

      // 2. Defer setting isExiting to true if the 3D WebGL overlay is present,
      // so that the DOM screenshot is captured sharp and fully visible.
      if (typeof window !== "undefined") {
        const customWindow = window;
        const targetHref = href;
        const isCurrentSkills = window.location.pathname === "/skills" || window.location.pathname.startsWith("/skills/");
        const isTargetSkills = targetHref === "/skills" || targetHref.startsWith("/skills/");
        const isBypassed = isCurrentSkills && isTargetSkills;

        const hasOverlay = customWindow.__paperCrumpleOverlayRegistered === true && !isBypassed;
        customWindow.__transitionTargetHref = targetHref;
        console.log("[useTransitionNavigator] navigateTo called for:", href, "hasOverlay:", hasOverlay, "isBypassed:", isBypassed);
        
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
            (window as any).__navigationExecutedTime = Date.now();
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

        // Capture click coordinates to pass to WebGL Liquid shader
        let clickX = window.innerWidth / 2;
        let clickY = window.innerHeight / 2;
        if (e && typeof e.clientX === "number" && typeof e.clientY === "number") {
          clickX = e.clientX;
          clickY = e.clientY;
        }

        customWindow.__transitionClickX = clickX;
        customWindow.__transitionClickY = clickY;

        window.dispatchEvent(new CustomEvent("transition-exit-start", { 
          detail: { 
            href,
            clickX,
            clickY
          } 
        }));
      } else {
        router.push(href);
      }
    },
    [router]
  );

  return { isExiting, navigateTo };
}

