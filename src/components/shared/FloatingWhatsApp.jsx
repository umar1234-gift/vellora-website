import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, isWhatsAppConfigured } from "../../lib/contact.js";
import { useScrolled } from "../../hooks/useScrolled.js";

/**
 * Floating WhatsApp button.
 *
 * Renders only when ALL of the following are true:
 *  - The WhatsApp number is configured (site.contact.whatsappNumber)
 *  - The user has scrolled past 200px (keeps the hero clean)
 *  - The user is not on /contact (avoids duplicating the primary channel)
 *
 * When the number is unconfigured the button is hidden entirely — a
 * floating button that opens a broken wa.me URL is worse than no button.
 *
 * Respects prefers-reduced-motion: appears instantly when reduced motion
 * is requested.
 */
export default function FloatingWhatsApp() {
	const location = useLocation();
	const prefersReducedMotion = useReducedMotion();
	const scrolled = useScrolled(200);

	const waUrl = buildWhatsAppUrl();
	const configured = isWhatsAppConfigured();
	const showButton =
		configured &&
		Boolean(waUrl) &&
		location.pathname !== "/contact" &&
		scrolled;

	return (
		<AnimatePresence>
			{showButton && (
				<motion.a
					href={waUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Message VELLORA on WhatsApp"
					className="fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center bg-ink text-background shadow-[0_4px_20px_rgba(23,19,15,0.15)] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-luxury)] hover:bg-champagne-deep lg:bottom-8 lg:right-8 lg:h-14 lg:w-14"
					initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{
						duration: prefersReducedMotion ? 0 : 0.3,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					<MessageCircle className="h-5 w-5" strokeWidth={1.5} />
				</motion.a>
			)}
		</AnimatePresence>
	);
}