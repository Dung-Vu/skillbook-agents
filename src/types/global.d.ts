export {};

declare global {
  interface Window {
    __canvasPaused?: boolean;
    __paperCrumpleOverlayRegistered?: boolean;
    __transitionActive?: boolean;
    __transitionClickX?: number;
    __transitionClickY?: number;
    __transitionTargetHref?: string;
  }

  interface WindowEventMap {
    "canvas-pause": CustomEvent;
    "canvas-resume": CustomEvent;
    "transition-exit-start": CustomEvent;
    "transition-exit-complete": CustomEvent;
    "transition-exit-animating": CustomEvent;
  }
}
