export default function Section({
	as: Tag = "section",
	className = "",
	children,
	...props
}) {
	return (
		<Tag className={`py-section lg:py-section-lg ${className}`} {...props}>
			{children}
		</Tag>
	);
}