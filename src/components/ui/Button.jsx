import { buttonClasses } from "./buttonStyles.js";

export default function Button({
	variant = "solid",
	size = "md",
	className = "",
	type = "button",
	children,
	...props
}) {
	return (
		<button
			type={type}
			className={buttonClasses({ variant, size, className })}
			{...props}
		>
			{children}
		</button>
	);
}