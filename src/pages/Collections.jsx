import { useParams, Navigate } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import Seo from "../components/ui/Seo.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Breadcrumbs from "../components/ui/Breadcrumbs.jsx";
import CategoryFilter from "../components/product/CategoryFilter.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";
import CategoryGuide from "../components/product/CategoryGuide.jsx";
import { categories, categoryKeys } from "../data/categories.js";
import { categorySeo, collectionsSeo } from "../data/categorySeo.js";
import { getAllProducts, getProductsByCategory } from "../lib/products.js";
import { breadcrumbSchema, collectionPageSchema } from "../lib/schema.js";

export default function Collections() {
	const { category } = useParams();

	if (category && !categoryKeys.includes(category)) {
		return <Navigate to="/collections" replace />;
	}

	const categoryData = category
		? categories.find((c) => c.key === category)
		: null;
	const seo = category ? categorySeo[category] : collectionsSeo;
	const items = category ? getProductsByCategory(category) : getAllProducts();

	const seoPath = category ? `/collections/${category}` : "/collections";

	const crumbs = [
		{ name: "Home", to: "/" },
		{ name: "Collections", to: "/collections" },
		...(categoryData ? [{ name: categoryData.label, to: seoPath }] : []),
	];

	const jsonLd = [
		breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.to }))),
		collectionPageSchema({
			name: seo.h1,
			description: seo.meta,
			path: seoPath,
			products: items,
		}),
	];

	return (
		<>
			<Seo
				title={seo.title}
				description={seo.meta}
				path={seoPath}
				jsonLd={jsonLd}
			/>
			<div className="py-12 lg:py-16">
				<Container>
					<Breadcrumbs items={crumbs} className="mb-8" />

					<SectionHeading
						as="h1"
						eyebrow="Collections"
						title={seo.h1}
						description={categoryData?.blurb || seo.meta}
					/>

					<CategoryFilter activeCategory={category ?? null} className="mt-10" />

					<div className="mt-12">
						<ProductGrid products={items} />
					</div>

					<CategoryGuide
						heading={seo.heading}
						body={seo.body}
						activeCategory={category ?? null}
					/>
				</Container>
			</div>
		</>
	);
}