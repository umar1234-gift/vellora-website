import { Link } from "react-router-dom";
import { buttonClasses } from "./buttonStyles.js";

/**
 * Renders an internal <Link> when `to` is provided,
 * an external <a> when `href` is provided.
 */
export default function LinkButton({
	to,
	href,
	variant = "solid",
	size = "md",
	className = "",
	children,
	...props
}) {
	const classes = buttonClasses({ variant, size, className });

	if (href) {
		return (
			<a
				href={href}
				className={classes}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			>
				{children}
			</a>
		);
	}

	return (
		<Link to={to} className={classes} {...props}>
			{children}
		</Link>
	);
}