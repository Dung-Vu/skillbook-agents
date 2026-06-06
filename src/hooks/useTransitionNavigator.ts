"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

export interface TransitionNavigator {
  isExiting: boolean;
  navigateTo: (e: React.MouseEvent<HTMLElement>, href: string) => void;
}

// One global event name used to broadcast the "exit started" signal to every
// component that calls this hook. Using an event (rather than a per-instance
// useState) means the page body — not just the component that owns the link
// the user clicked — animates the exit fade. Without this, clicking a nav
// link in `Header.tsx` would only flip the Header's local `isExiting` to
// true, while the `SkillCatalogClient` / `SkillDetailClient` on the same
// page would stay in their `animate` variant because their own state
// instances were never updated.
const PAGE_EXITING_EVENT = "skillbook:page-exiting";

export function useTransitionNavigator(): TransitionNavigator {
  const router = useRouter();
  const [isExiting] = useState(false);

  const navigateTo = useCallback(
    (e: React.MouseEvent<HTMLElement>, href: string) => {
      e.preventDefault();
      router.push(href);
    },
    [router]
  );

  return { isExiting, navigateTo };
}
