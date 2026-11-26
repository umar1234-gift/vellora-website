import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import LinkButton from "../components/ui/LinkButton.jsx";
import Seo from "../components/ui/Seo.jsx";
import Breadcrumbs from "../components/ui/Breadcrumbs.jsx";
import ProductGallery from "../components/product/ProductGallery.jsx";
import ProductInfo from "../components/product/ProductInfo.jsx";
import ProductInquiryActions from "../components/product/ProductInquiryActions.jsx";
import RelatedProducts from "../components/product/RelatedProducts.jsx";
import { getProductBySlug, getCategoryLabel } from "../lib/products.js";
import { breadcrumbSchema, itemPageSchema } from "../lib/schema.js";

export default function ProductDetail() {
	const { slug } = useParams();
	const product = getProductBySlug(slug);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [slug]);

	if (!product) {
		return (
			<>
				<Seo
					title="Piece not found"
					description="This piece is not currently part of the VELLORA selection."
					noindex
				/>
				<div className="py-24 lg:py-32">
					<Container>
						<div className="mx-auto max-w-lg text-center">
							<h1 className="font-display text-h1">Piece not found</h1>
							<p className="mt-4 text-body text-ink-soft">
								This piece is not currently part of the VELLORA selection.
							</p>
							<div className="mt-10">
								<LinkButton to="/collections" variant="outline" size="md">
									Browse Collections
								</LinkButton>
							</div>
						</div>
					</Container>
				</div>
			</>
		);
	}

	const categoryLabel = getCategoryLabel(product.category);
	const path = `/product/${product.slug}`;

	const crumbs = [
		{ name: "Home", to: "/" },
		{ name: "Collections", to: "/collections" },
		{ name: categoryLabel, to: `/collections/${product.category}` },
		{ name: product.name, to: path },
	];

	return (
		<>
			<Seo
				title={product.name}
				description={`${product.shortDescription} Enquire on WhatsApp or Instagram.`}
				path={path}
				image={product.images?.[0]}
				jsonLd={[
					breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.to }))),
					itemPageSchema({ product, categoryLabel, path }),
				]}
			/>

			<div className="py-12 lg:py-16">
				<Container>
					<Breadcrumbs items={crumbs} className="mb-8" />

					<div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
						<div className="lg:col-span-7">
							<ProductGallery product={product} />
						</div>

						<div className="lg:col-span-5">
							<ProductInfo product={product} />
							<ProductInquiryActions product={product} />
						</div>
					</div>
				</Container>
			</div>

			<RelatedProducts product={product} />
		</>
	);
}