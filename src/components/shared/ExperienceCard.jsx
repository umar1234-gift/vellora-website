import { Maximize2 } from "lucide-react";

/**
 * A single customer-experience screenshot card.
 * The whole card is a button — clicking opens the lightbox.
 * The screenshot image is decorative inside the button; the accessible
 * name is provided via the button's aria-label.
 */
export default function ExperienceCard({ experience, onClick }) {
	const label = experience.caption
		? `View experience: ${experience.caption}`
		: "View customer experience";

	return (
		<button
			type="button"
			onClick={onClick}
			aria-label={label}
			className="group relative block w-full overflow-hidden bg-surface text-left"
		>
			<div className="relative aspect-[3/4] w-full">
				<img
					src={experience.image}
					alt=""
					loading="lazy"
					decoding="async"
					className="absolute inset-0 h-full w-full object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-luxury)] group-hover:scale-[1.02]"
				/>
				<span
					aria-hidden="true"
					className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center bg-background/90 text-ink opacity-0 transition-opacity duration-[var(--duration-fast)] group-hover:opacity-100 group-focus-visible:opacity-100"
				>
					<Maximize2 className="h-4 w-4" strokeWidth={1.25} />
				</span>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 border border-border"
				/>
			</div>
			{experience.caption && (
				<p className="mt-3 text-small text-ink-soft">{experience.caption}</p>
			)}
		</button>
	);
}