import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import ProductGrid from "./ProductGrid.jsx";
import { getRelatedProducts } from "../../lib/products.js";

export default function RelatedProducts({ product }) {
	const related = getRelatedProducts(product, 4);
	if (related.length === 0) return null;

	return (
		<Section className="border-t border-border">
			<Container>
				<SectionHeading eyebrow="You May Also Like" title="Related Pieces" />
				<div className="mt-12">
					<ProductGrid products={related} />
				</div>
			</Container>
		</Section>
	);
}