import Eyebrow from "../ui/Eyebrow.jsx";
import { getCategoryLabel } from "../../lib/products.js";

export default function ProductInfo({ product }) {
	const categoryLabel = getCategoryLabel(product.category);

	return (
		<div>
			<Eyebrow>{categoryLabel}</Eyebrow>

			<h1 className="mt-4 font-display text-h1 text-ink">{product.name}</h1>

			<p className="mt-6 text-body text-ink-soft">{product.shortDescription}</p>

			<div className="my-8 h-px w-full bg-border" aria-hidden="true" />

			<p className="text-body text-ink-soft">{product.description}</p>

			<p className="mt-8 text-label uppercase tracking-[0.18em] text-ink-soft">
				Prices on request
			</p>
		</div>
	);
}