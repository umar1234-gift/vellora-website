import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import ProductGrid from "../product/ProductGrid.jsx";
import { getFeaturedProducts } from "../../lib/products.js";

export default function SelectedProducts() {
	const products = getFeaturedProducts(4);

	return (
		<Section>
			<Container>
				<Reveal>
					<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
						<SectionHeading
							eyebrow="Selected Pieces"
							title="A Curated Selection"
							description="A small, considered edit from across the VELLORA catalogue."
						/>
						<LinkButton to="/collections" variant="ghost" size="md">
							Browse the Catalogue
						</LinkButton>
					</div>
				</Reveal>

				<div className="mt-12">
					<ProductGrid products={products} />
				</div>
			</Container>
		</Section>
	);
}