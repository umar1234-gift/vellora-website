import { Link } from "react-router-dom";
import { site } from "../../config/site.js";

/**
 * The VELLORA wordmark — typeset, not an image.
 * Sizes are tuned so the mark reads as a brand signature, not a nav item.
 */
export default function Wordmark({ size = "md", onClick }) {
	const sizes = {
		sm: "text-[1.05rem] tracking-[0.26em] font-medium",
		md: "text-[1.25rem] tracking-[0.28em] font-normal",
		lg: "text-[1.75rem] tracking-[0.3em] font-normal",
	};

	return (
		<Link
			to="/"
			onClick={onClick}
			aria-label={`${site.brand.name} — home`}
			className={`font-display text-ink no-underline hover:no-underline ${sizes[size]}`}
		>
			{site.brand.name}
		</Link>
	);
}