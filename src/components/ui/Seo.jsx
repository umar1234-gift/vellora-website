import { useEffect } from "react";
import { site } from "../../config/site.js";

/**
 * Per-route SEO metadata.
 *
 * Sets (unconditionally):
 *  - document.title
 *  - meta[name="description"]
 *  - meta[property="og:title"], [og:description], [og:type], [og:site_name]
 *  - meta[name="twitter:card"], [twitter:title], [twitter:description]
 *
 * Sets OR removes (dependent on configuration):
 *  - meta[property="og:url"]              — requires site.domain + path
 *  - meta[name="twitter:url"]             — requires site.domain + path
 *  - link[rel="canonical"]                — requires site.domain + path
 *  - meta[property="og:image"]            — requires site.domain + image
 *  - meta[name="twitter:image"]           — requires site.domain + image
 *
 * The add-or-remove branches guarantee that navigating between routes
 * cannot leave stale metadata from the previous page (e.g. a product
 * page's og:image leaking into /about). Because every route renders
 * <Seo>, every navigation runs the effect and reconciles the head.
 *
 * Renders null.
 */

function setMeta(attr, key, content) {
	let el = document.head.querySelector(`meta[${attr}="${key}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

function removeMeta(attr, key) {
	const el = document.head.querySelector(`meta[${attr}="${key}"]`);
	if (el) el.remove();
}

function setCanonical(href) {
	let el = document.head.querySelector('link[rel="canonical"]');
	if (!el) {
		el = document.createElement("link");
		el.setAttribute("rel", "canonical");
		document.head.appendChild(el);
	}
	el.setAttribute("href", href);
}

function removeCanonical() {
	const el = document.head.querySelector('link[rel="canonical"]');
	if (el) el.remove();
}

/**
 * Safely join a configured domain with a path or image path.
 *
 * - Returns null if either side is missing.
 * - Strips trailing slashes from the domain so `https://vellora.com/` +
 *   `/about` yields `https://vellora.com/about` (not `//about`).
 * - Adds a leading slash to the suffix if absent.
 * - When `allowAbsolute` is true and the suffix is already an absolute
 *   URL (http/https), returns it unchanged (preserves existing image
 *   behaviour for external CDN URLs, while still requiring a domain to
 *   be configured — matching prior behaviour).
 */
function joinUrl(domain, suffix, { allowAbsolute = false } = {}) {
	if (!domain || !suffix) return null;
	if (allowAbsolute && /^https?:\/\//i.test(suffix)) return suffix;
	const base = domain.replace(/\/+$/, "");
	if (!base) return null;
	const tail = suffix.startsWith("/") ? suffix : `/${suffix}`;
	return `${base}${tail}`;
}

export default function Seo({
	title,
	description,
	type = "website",
	path,
	image,
}) {
	useEffect(() => {
		const fullTitle = title
			? `${title} — ${site.brand.name}`
			: `${site.brand.name} — ${site.brand.tagline}`;

		const desc = description || `${site.brand.name} — ${site.brand.tagline}`;

		document.title = fullTitle;

		setMeta("name", "description", desc);
		setMeta("property", "og:title", fullTitle);
		setMeta("property", "og:description", desc);
		setMeta("property", "og:type", type);
		setMeta("property", "og:site_name", site.brand.name);

		setMeta("name", "twitter:card", "summary_large_image");
		setMeta("name", "twitter:title", fullTitle);
		setMeta("name", "twitter:description", desc);

		/* ---- URL-dependent metadata (og:url, twitter:url, canonical) ---- */
		const url = joinUrl(site.domain, path);
		if (url) {
			setMeta("property", "og:url", url);
			setMeta("name", "twitter:url", url);
			setCanonical(url);
		} else {
			removeMeta("property", "og:url");
			removeMeta("name", "twitter:url");
			removeCanonical();
		}

		/* ---- Image-dependent metadata (og:image, twitter:image) ---- */
		const absoluteImage = joinUrl(site.domain, image, { allowAbsolute: true });
		if (absoluteImage) {
			setMeta("property", "og:image", absoluteImage);
			setMeta("name", "twitter:image", absoluteImage);
		} else {
			removeMeta("property", "og:image");
			removeMeta("name", "twitter:image");
		}
	}, [title, description, type, path, image]);

	return null;
}