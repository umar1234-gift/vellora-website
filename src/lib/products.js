import { products } from "../data/products.js";
import { categories } from "../data/categories.js";

/**
 * Pure, side-effect-free query helpers over the product catalogue.
 * All components read products through these functions — never from the
 * raw data module — so the shape of the data can evolve here once.
 */

export function getAllProducts() {
	return products;
}

export function getProductBySlug(slug) {
	return products.find((p) => p.slug === slug) ?? null;
}

export function getProductsByCategory(categoryKey) {
	return products.filter((p) => p.category === categoryKey);
}

export function getFeaturedProducts(limit = 4) {
	return products.filter((p) => p.featured).slice(0, limit);
}

/**
 * Related products: same category first, then others, excluding the current
 * product. Used on the Phase 6 detail page.
 */
export function getRelatedProducts(product, limit = 4) {
	const same = products.filter(
		(p) => p.id !== product.id && p.category === product.category,
	);
	const other = products.filter(
		(p) => p.id !== product.id && p.category !== product.category,
	);
	return [...same, ...other].slice(0, limit);
}

export function getCategoryLabel(categoryKey) {
	return categories.find((c) => c.key === categoryKey)?.label ?? categoryKey;
}