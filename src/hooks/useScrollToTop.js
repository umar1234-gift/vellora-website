import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page whenever the pathname changes.
 * - useLayoutEffect runs synchronously after DOM mutations but before
 *   the browser paints, so the reset is invisible (no flash of the new
 *   page at the previous scroll position).
 * - `behavior: 'instant'` bypasses the global `scroll-behavior: smooth`
 *   defined in index.css so navigations feel crisp, not animated.
 *
 * The product detail page also resets scroll on slug change; both hooks
 * firing on the same navigation is idempotent and harmless.
 */
export function useScrollToTop() {
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [pathname]);
}