import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce } from "../../styles/motion.js";

/**
 * Lightweight scroll reveal.
 * When the user prefers reduced motion, children render immediately
 * with no animation.
 *
 * The `delay` prop is applied via an explicit inline `transition` so it
 * is guaranteed to be respected (see Phase 3 summary note).
 */
export default function Reveal({ children, delay = 0, className = "" }) {
	const prefersReducedMotion = useReducedMotion();

	if (prefersReducedMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={viewportOnce}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
		>
			{children}
		</motion.div>
	);
}