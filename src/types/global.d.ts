export {};

declare global {
  interface TransitionState {
    canvasPaused?: boolean;
    paperCrumpleOverlayRegistered?: boolean;
    transitionActive?: boolean;
    transitionClickX?: number;
    transitionClickY?: number;
    transitionTargetHref?: string;
    navigationClickedTime?: number;
    navigationExecutedTime?: number;
    isBypassed?: boolean;
  }

  interface Window {
    __transition?: TransitionState;
  }

  interface WindowEventMap {
    "canvas-pause": CustomEvent;
    "canvas-resume": CustomEvent;
    "transition-exit-start": CustomEvent;
    "transition-exit-complete": CustomEvent;
    "transition-exit-animating": CustomEvent;
    "skillbook:page-exiting": CustomEvent;
  }
}
