import { Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FloatingWhatsApp from "../shared/FloatingWhatsApp.jsx";
import { useScrollToTop } from "../../hooks/useScrollToTop.js";

export default function Layout() {
	const location = useLocation();
	const prefersReducedMotion = useReducedMotion();
	useScrollToTop();

	return (
		<div className="min-h-screen bg-background text-ink">
			<a href="#main-content" className="skip-link">
				Skip to content
			</a>

			<Header />

			<main id="main-content" className="pt-16 lg:pt-20">
				<motion.div
					key={location.pathname}
					initial={prefersReducedMotion ? false : { opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
				>
					<Outlet />
				</motion.div>
			</main>

			<Footer />
			<FloatingWhatsApp />
		</div>
	);
}