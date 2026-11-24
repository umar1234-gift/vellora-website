import Reveal from "../ui/Reveal.jsx";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products }) {
	if (!products || products.length === 0) {
		return <p className="text-body text-ink-soft">No products available.</p>;
	}

	return (
		<div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product, i) => (
				<Reveal key={product.id} delay={Math.min(i * 0.05, 0.2)}>
					<ProductCard product={product} />
				</Reveal>
			))}
		</div>
	);
}