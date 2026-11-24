import { useParams, Navigate } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import Seo from "../components/ui/Seo.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import CategoryFilter from "../components/product/CategoryFilter.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";
import { categories, categoryKeys } from "../data/categories.js";
import { getAllProducts, getProductsByCategory } from "../lib/products.js";

export default function Collections() {
	const { category } = useParams();

	if (category && !categoryKeys.includes(category)) {
		return <Navigate to="/collections" replace />;
	}

	const categoryData = category
		? categories.find((c) => c.key === category)
		: null;
	const items = category ? getProductsByCategory(category) : getAllProducts();

	const title = categoryData ? categoryData.label : "The Collection";
	const description =
		categoryData?.blurb ||
		"A curated selection across five categories — handbags, shoes, watches, jewellery and sunglasses.";

	const seoTitle = categoryData ? categoryData.label : "Collections";
	const seoDescription = categoryData
		? `VELLORA ${categoryData.label} — ${categoryData.blurb}`
		: "A curated selection of handbags, shoes, watches, jewellery and sunglasses from VELLORA.";
	const seoPath = category ? `/collections/${category}` : "/collections";

	return (
		<>
			<Seo title={seoTitle} description={seoDescription} path={seoPath} />
			<div className="py-12 lg:py-16">
				<Container>
					<SectionHeading
						as="h1"
						eyebrow="Collections"
						title={title}
						description={description}
					/>

					<CategoryFilter activeCategory={category ?? null} className="mt-10" />

					<div className="mt-12">
						<ProductGrid products={items} />
					</div>
				</Container>
			</div>
		</>
	);
}