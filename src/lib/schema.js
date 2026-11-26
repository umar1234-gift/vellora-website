import { site } from "../config/site.js";
import { absoluteUrl } from "./seo.js";

/**
 * JSON-LD builders. Only facts that exist in the project are emitted:
 * no prices, ratings, reviews or availability.
 */

const orgId = () => `${site.domain}/#organization`;
const websiteId = () => `${site.domain}/#website`;

export function organizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": orgId(),
		name: site.brand.name,
		url: `${site.domain}/`,
		slogan: site.brand.tagline,
		logo: absoluteUrl("/favicon.jpg"),
		email: site.contact.email,
		sameAs: [site.contact.instagram.profileUrl],
	};
}

export function websiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": websiteId(),
		url: `${site.domain}/`,
		name: site.brand.name,
		description: site.brand.tagline,
		publisher: { "@id": orgId() },
		inLanguage: "en",
	};
}

/** items: [{ name, path }] — the last item is the current page. */
export function breadcrumbSchema(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})),
	};
}

export function collectionPageSchema({ name, description, path, products }) {
	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name,
		description,
		url: absoluteUrl(path),
		isPartOf: { "@id": websiteId() },
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: products.length,
			itemListElement: products.map((p, i) => ({
				"@type": "ListItem",
				position: i + 1,
				url: absoluteUrl(`/product/${p.slug}`),
				name: p.name,
			})),
		},
	};
}

/**
 * Product pages use ItemPage, not Product: Google's Product rich results
 * need an offer, review or rating, and VELLORA publishes none of these.
 */
export function itemPageSchema({ product, categoryLabel, path }) {
	return {
		"@context": "https://schema.org",
		"@type": "ItemPage",
		name: product.name,
		description: product.shortDescription,
		url: absoluteUrl(path),
		image: (product.images || []).map((src) => absoluteUrl(src)),
		isPartOf: { "@id": websiteId() },
		about: categoryLabel,
	};
}