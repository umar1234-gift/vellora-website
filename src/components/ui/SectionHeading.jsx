import Eyebrow from "./EyeBrow.jsx";

/**
 * Consistent section heading: optional eyebrow, a display serif title,
 * and an optional short description. `as` controls the heading tag for
 * correct document hierarchy.
 */
export default function SectionHeading({
	eyebrow,
	title,
	description,
	as: Tag = "h2",
	align = "left",
	className = "",
}) {
	const alignment =
		align === "center" ? "items-center text-center" : "items-start text-left";

	return (
		<div className={`flex flex-col gap-4 ${alignment} ${className}`}>
			{eyebrow && <Eyebrow rule={align !== "center"}>{eyebrow}</Eyebrow>}
			<Tag className="max-w-[22ch] font-display font-normal text-ink">
				{title}
			</Tag>
			{description && (
				<p className="max-w-[52ch] text-body text-ink-soft">{description}</p>
			)}
		</div>
	);
}