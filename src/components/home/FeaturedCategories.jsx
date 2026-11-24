import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import CategoryCard from "../shared/CategoryCard.jsx";
import { categories } from "../../data/categories.js";

export default function FeaturedCategories() {
	return (
		<Section>
			<Container>
				<Reveal>
					<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
						<SectionHeading eyebrow="Collections" title="Shop by Category" />
						<LinkButton to="/collections" variant="ghost" size="md">
							View All Collections
						</LinkButton>
					</div>
				</Reveal>

				<div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
					{categories.map((category, i) => (
						<Reveal key={category.key} delay={i * 0.05}>
							<CategoryCard category={category} />
						</Reveal>
					))}
				</div>
			</Container>
		</Section>
	);
}