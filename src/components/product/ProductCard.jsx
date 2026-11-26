import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getCategoryLabel } from "../../lib/products.js";

/**
 * Reusable product card.
 * Renders a placeholder tile when `product.images` is empty, and the
 * primary image with hover zoom once real photography is supplied.
 */
export default function ProductCard({ product }) {
	const hasImage = Array.isArray(product.images) && product.images.length > 0;
	const primaryImage = hasImage ? product.images[0] : null;
	const categoryLabel = getCategoryLabel(product.category);

	return (
		<Link to={`/product/${product.slug}`} className="group block no-underline">
			<div className="relative aspect-[4/5] overflow-hidden bg-surface">
				{primaryImage ? (
					<img
						src={primaryImage}
						alt={`${product.name} — VELLORA ${categoryLabel}`}
						loading="lazy"
						decoding="async"
						className="absolute inset-0 h-full w-full object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-luxury)] group-hover:scale-[1.03]"
					/>
				) : (
					<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
						<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
							Placeholder
						</p>
						<p className="text-small text-ink-soft">Image to follow</p>
					</div>
				)}

				{product.isNew && (
					<span className="absolute left-3 top-3 bg-background px-2 py-1 text-label uppercase tracking-[0.18em] text-ink">
						New
					</span>
				)}

				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 border border-border"
				/>
			</div>

			<div className="mt-4 flex items-start justify-between gap-3">
				<div>
					<p className="text-small text-ink">{product.name}</p>
					<p className="mt-1 text-label uppercase tracking-[0.18em] text-ink-soft">
						{categoryLabel}
					</p>
				</div>
				<ArrowUpRight
					aria-hidden="true"
					className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform duration-[var(--duration-base)] ease-[var(--ease-luxury)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					strokeWidth={1.25}
				/>
			</div>
		</Link>
	);
}