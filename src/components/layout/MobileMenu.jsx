import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import Wordmark from "../shared/Wordmark.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll.js";
import { getCatalogueHref, isCatalogueExternal } from "../../lib/links.js";
import { buildWhatsAppUrl, isWhatsAppConfigured } from "../../lib/contact.js";
import { site } from "../../config/site.js";

export default function MobileMenu({ open, onClose, nav }) {
	const containerRef = useRef(null);
	const closeButtonRef = useRef(null);
	const previouslyFocused = useRef(null);
	const prefersReducedMotion = useReducedMotion();

	useLockBodyScroll(open);

	useEffect(() => {
		if (!open) return;

		previouslyFocused.current = document.activeElement;
		const t = setTimeout(() => closeButtonRef.current?.focus(), 30);

		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();
				onClose();
				return;
			}
			if (event.key !== "Tab") return;

			const container = containerRef.current;
			if (!container) return;
			const focusables = container.querySelectorAll(
				'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
		};

		document.addEventListener("keydown", onKeyDown);
		return () => {
			clearTimeout(t);
			document.removeEventListener("keydown", onKeyDown);
			if (previouslyFocused.current?.focus) previouslyFocused.current.focus();
		};
	}, [open, onClose]);

	const catHref = getCatalogueHref();
	const catExternal = isCatalogueExternal();
	const waConfigured = isWhatsAppConfigured();
	const waUrl = buildWhatsAppUrl();

	const overlayMotion = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: prefersReducedMotion ? 0 : 0.35,
			ease: [0.22, 1, 0.36, 1],
		},
	};

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					id="mobile-menu"
					role="dialog"
					aria-modal="true"
					aria-label="Site menu"
					ref={containerRef}
					className="fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden"
					{...overlayMotion}
				>
					<div className="flex h-16 items-center justify-between px-5 sm:px-8">
						<Wordmark size="md" onClick={onClose} />
						<button
							type="button"
							onClick={onClose}
							ref={closeButtonRef}
							aria-label="Close menu"
							className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink"
						>
							<X className="h-5 w-5" strokeWidth={1.25} />
						</button>
					</div>

					<nav aria-label="Mobile primary" className="px-5 pb-16 pt-8 sm:px-8">
						<ul className="flex flex-col">
							{nav.map((item, i) => (
								<motion.li
									key={item.to}
									initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: prefersReducedMotion ? 0 : 0.08 * i + 0.05,
										duration: 0.5,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="border-b border-border"
								>
									<Link
										to={item.to}
										onClick={onClose}
										className="flex items-center justify-between py-5 font-display text-3xl text-ink no-underline hover:no-underline"
									>
										<span>{item.label}</span>
										<ArrowUpRight
											className="h-4 w-4 text-ink-soft"
											strokeWidth={1.25}
										/>
									</Link>
								</motion.li>
							))}
						</ul>

						<div className="mt-10 flex flex-col gap-5">
							<LinkButton
								{...(catExternal ? { href: catHref } : { to: catHref })}
								variant="solid"
								size="lg"
								onClick={onClose}
								className="w-full"
							>
								View Full Catalogue
							</LinkButton>

							{waConfigured && waUrl && (
								<LinkButton
									href={waUrl}
									variant="outline"
									size="lg"
									onClick={onClose}
									className="w-full"
								>
									<MessageCircle className="h-4 w-4" strokeWidth={1.25} />
									Message on WhatsApp
								</LinkButton>
							)}

							<a
								href={site.contact.instagram.profileUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 py-2 text-label uppercase tracking-[0.18em] text-ink-soft no-underline hover:text-ink"
							>
								<Instagram className="h-4 w-4" strokeWidth={1.25} />
								<span>@{site.contact.instagram.handle}</span>
							</a>
						</div>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
}