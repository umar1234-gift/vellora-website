import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/* useLayoutEffect warns during server rendering; use useEffect there. */
const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Scrolls to the top whenever the pathname changes. `instant` bypasses the
 * global smooth scrolling so navigations feel crisp.
 */
export function useScrollToTop() {
	const { pathname } = useLocation();

	useIsomorphicLayoutEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [pathname]);
}