/**
 * Shared class builder for Button and LinkButton.
 * Variants are deliberately minimal: no coloured buttons.
 */
export function buttonClasses({
	variant = "solid",
	size = "md",
	className = "",
} = {}) {
	const base =
		"inline-flex items-center justify-center gap-2 font-body font-normal uppercase " +
		"tracking-[0.14em] transition-colors duration-[var(--duration-fast)] " +
		"ease-[var(--ease-luxury)] focus-visible:outline-none focus-visible:ring-0 " +
		"disabled:opacity-40 disabled:pointer-events-none";

	const sizes = {
		sm: "text-label px-4 py-2.5",
		md: "text-label px-6 py-3",
		lg: "text-label px-8 py-4",
	};

	const variants = {
		solid:
			"bg-ink text-background border border-ink hover:bg-transparent hover:text-ink",
		outline:
			"bg-transparent text-ink border border-ink hover:bg-ink hover:text-background",
		ghost:
			"bg-transparent text-ink border-0 px-0 py-0 underline underline-offset-4 decoration-border hover:decoration-ink-soft",
	};

	return [base, sizes[size], variants[variant], className]
		.filter(Boolean)
		.join(" ");
}