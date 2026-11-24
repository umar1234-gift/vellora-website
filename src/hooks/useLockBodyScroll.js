import { useEffect } from "react";

/**
 * Locks vertical body scroll while the given condition is true.
 * Restores the original inline overflow on unlock / unmount.
 */
export function useLockBodyScroll(locked) {
	useEffect(() => {
		if (!locked) return;
		const original = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = original;
		};
	}, [locked]);
}