/**
 * Small uppercase label used above headlines.
 * Optional `rule` renders a short champagne hairline before the text.
 */
export default function Eyebrow({ children, rule = false, className = "" }) {
	return (
		<p
			className={`flex items-center gap-3 text-label uppercase tracking-[0.18em] text-ink-soft ${className}`}
		>
			{rule && <span aria-hidden="true" className="h-px w-8 bg-champagne" />}
			<span>{children}</span>
		</p>
	);
}