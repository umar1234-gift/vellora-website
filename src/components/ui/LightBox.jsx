import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll.js";

export default function Lightbox({ items, initialIndex = 0, open, onClose }) {
	const [index, setIndex] = useState(initialIndex);
	const containerRef = useRef(null);
	const closeButtonRef = useRef(null);
	const previouslyFocused = useRef(null);
	const prefersReducedMotion = useReducedMotion();

	const total = items?.length ?? 0;
	const hasMultiple = total > 1;
	const isVisible = open && total > 0;

	useLockBodyScroll(isVisible);

	useEffect(() => {
		if (open) setIndex(initialIndex);
	}, [open, initialIndex]);

	useEffect(() => {
		if (!isVisible) return;

		previouslyFocused.current = document.activeElement;
		const timer = setTimeout(() => closeButtonRef.current?.focus(), 30);

		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();
				onClose();
				return;
			}
			if (event.key === "ArrowLeft" && hasMultiple) {
				event.preventDefault();
				setIndex((i) => (i - 1 + total) % total);
				return;
			}
			if (event.key === "ArrowRight" && hasMultiple) {
				event.preventDefault();
				setIndex((i) => (i + 1) % total);
				return;
			}
			if (event.key === "Tab") {
				const container = containerRef.current;
				if (!container) return;
				const focusables = container.querySelectorAll(
					'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
				);
				if (focusables.length === 0) return;
				const first = focusables[0];
				const last = focusables[focusables.length - 1];
				if (event.shiftKey && document.activeElement === first) {
					event.preventDefault();
					last.focus();
				} else if (!event.shiftKey && document.activeElement === last) {
					event.preventDefault();
					first.focus();
				}
			}
		};

		document.addEventListener("keydown", onKeyDown);
		return () => {
			clearTimeout(timer);
			document.removeEventListener("keydown", onKeyDown);
			if (previouslyFocused.current?.focus) previouslyFocused.current.focus();
		};
	}, [isVisible, hasMultiple, total, onClose]);

	const goPrev = () => setIndex((i) => (i - 1 + total) % total);
	const goNext = () => setIndex((i) => (i + 1) % total);

	const current = isVisible ? items[index] : null;

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					role="dialog"
					aria-modal="true"
					aria-label={current?.alt || "Image preview"}
					ref={containerRef}
					onClick={(e) => {
						if (e.target === e.currentTarget) onClose();
					}}
					className="fixed inset-0 z-[60] flex flex-col bg-ink/95"
					initial={prefersReducedMotion ? false : { opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: prefersReducedMotion ? 0 : 0.25,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					<button
						ref={closeButtonRef}
						type="button"
						onClick={onClose}
						aria-label="Close preview"
						className="absolute right-3 top-3 z-10 inline-flex h-12 w-12 items-center justify-center text-background transition-colors duration-[var(--duration-fast)] hover:text-champagne"
					>
						<X className="h-6 w-6" strokeWidth={1.25} />
					</button>

					{hasMultiple && (
						<>
							<button
								type="button"
								onClick={goPrev}
								aria-label="Previous image"
								className="absolute left-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-background transition-colors duration-[var(--duration-fast)] hover:text-champagne"
							>
								<ChevronLeft className="h-6 w-6" strokeWidth={1.25} />
							</button>
							<button
								type="button"
								onClick={goNext}
								aria-label="Next image"
								className="absolute right-3 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-background transition-colors duration-[var(--duration-fast)] hover:text-champagne"
							>
								<ChevronRight className="h-6 w-6" strokeWidth={1.25} />
							</button>
						</>
					)}

					<div className="pointer-events-none relative z-[1] flex flex-1 items-center justify-center px-12 py-16">
						<img
							src={current.image}
							alt={current.alt || ""}
							className="pointer-events-auto max-h-full max-w-full object-contain"
						/>
					</div>

					{(current.caption || hasMultiple) && (
						<div className="relative z-[1] border-t border-background/10 px-6 py-4 text-center">
							{current.caption && (
								<p className="text-small text-background/80">
									{current.caption}
								</p>
							)}
							{hasMultiple && (
								<p className="mt-1 text-label uppercase tracking-[0.18em] text-background/60">
									{index + 1} / {total}
								</p>
							)}
						</div>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
}