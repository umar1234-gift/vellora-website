import { useState } from "react";
import { getCategoryLabel } from "../../lib/products.js";

export default function ProductGallery({ product }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const images = Array.isArray(product.images) ? product.images : [];
	const categoryLabel = getCategoryLabel(product.category);
	const hasImages = images.length > 0;
	const hasMultiple = images.length > 1;

	if (!hasImages) {
		return (
			<div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
					<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
						Placeholder
					</p>
					<p className="max-w-[26ch] text-small text-ink-soft">
						Product photography to be supplied by the owner.
					</p>
				</div>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 border border-border"
				/>
			</div>
		);
	}

	const activeSrc = images[activeIndex] ?? images[0];

	return (
		<div>
			<div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
				<img
					src={activeSrc}
					alt={`${product.name} — VELLORA ${categoryLabel}, photo ${activeIndex + 1} of ${images.length}`}
					loading="eager"
					decoding="async"
					fetchpriority="high"
					className="absolute inset-0 h-full w-full object-cover"
				/>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 border border-border"
				/>
			</div>

			{hasMultiple && (
				<div
					role="group"
					aria-label="Product images"
					className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-5"
				>
					{images.map((src, i) => {
						const isActive = i === activeIndex;
						return (
							<button
								key={src}
								type="button"
								onClick={() => setActiveIndex(i)}
								aria-label={`Show image ${i + 1} of ${images.length}`}
								aria-current={isActive ? "true" : undefined}
								className={`relative aspect-square overflow-hidden bg-surface transition-opacity duration-[var(--duration-fast)] ${
									isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
								}`}
							>
								<img
									src={src}
									alt=""
									loading="lazy"
									decoding="async"
									className="absolute inset-0 h-full w-full object-cover"
								/>
								<span
									aria-hidden="true"
									className={`pointer-events-none absolute inset-0 border ${
										isActive ? "border-ink" : "border-border"
									}`}
								/>
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}