import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CategoryCard({ category }) {
	const hasImage = Boolean(category.image);

	return (
		<Link
			to={`/collections/${category.key}`}
			aria-label={`Browse ${category.label}`}
			className="group relative block aspect-[4/5] overflow-hidden bg-surface no-underline"
		>
			{hasImage && (
				<img
					src={category.image}
					alt={`${category.label} — VELLORA collection`}
					loading="lazy"
					decoding="async"
					className="absolute inset-0 h-full w-full object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-luxury)] group-hover:scale-[1.03]"
				/>
			)}

			<div className="absolute inset-0 flex flex-col justify-between p-5">
				<span className="text-label uppercase tracking-[0.18em] text-ink-soft">
					{category.label}
				</span>

				<span
					className={`font-display text-[clamp(1.5rem,2vw,2rem)] leading-[1.05] text-ink ${
						hasImage ? "opacity-0" : "opacity-100"
					}`}
				>
					{category.label}
				</span>

				<span className="flex items-center justify-end text-ink-soft">
					<ArrowUpRight
						className="h-4 w-4 transition-transform duration-[var(--duration-base)] ease-[var(--ease-luxury)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						strokeWidth={1.25}
					/>
				</span>
			</div>

			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 border border-border"
			/>
		</Link>
	);
}