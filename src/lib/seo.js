import { site } from "../config/site.js";

/**
 * VELLORA — head/SEO helpers (safe on server and client).
 * buildHead() turns page props into plain data. On the client applyHead()
 * reconciles it into <head>; at build time renderHeadHtml() serialises it.
 */

export const DEFAULT_OG_IMAGE = "/og-image.jpg";

const INDEXABLE_ROBOTS =
	"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const NOINDEX_ROBOTS = "noindex, nofollow";

/** Every <meta> this module owns, so stale tags are removed on navigation. */
const MANAGED_META = [
	["name", "description"],
	["name", "robots"],
	["property", "og:title"],
	["property", "og:description"],
	["property", "og:type"],
	["property", "og:site_name"],
	["property", "og:url"],
	["property", "og:image"],
	["name", "twitter:card"],
	["name", "twitter:title"],
	["name", "twitter:description"],
	["name", "twitter:url"],
	["name", "twitter:image"],
];

export function joinUrl(domain, suffix, { allowAbsolute = false } = {}) {
	if (!domain || !suffix) return null;
	if (allowAbsolute && /^https?:\/\//i.test(suffix)) return suffix;
	const base = domain.replace(/\/+$/, "");
	if (!base) return null;
	const tail = suffix.startsWith("/") ? suffix : `/${suffix}`;
	return `${base}${tail}`;
}

export function absoluteUrl(path) {
	return joinUrl(site.domain, path);
}

export function buildHead({
	title,
	absoluteTitle,
	description,
	type = "website",
	path,
	image,
	noindex = false,
	jsonLd = [],
	preloadImage,
}) {
	const fullTitle =
		absoluteTitle ||
		(title
			? `${title} — ${site.brand.name}`
			: `${site.brand.name} — ${site.brand.tagline}`);

	const desc = description || `${site.brand.name} — ${site.brand.tagline}`;
	const url = path ? joinUrl(site.domain, path) : null;
	const img = joinUrl(site.domain, image || DEFAULT_OG_IMAGE, {
		allowAbsolute: true,
	});

	const meta = [
		{ attr: "name", key: "description", content: desc },
		{
			attr: "name",
			key: "robots",
			content: noindex ? NOINDEX_ROBOTS : INDEXABLE_ROBOTS,
		},
		{ attr: "property", key: "og:title", content: fullTitle },
		{ attr: "property", key: "og:description", content: desc },
		{ attr: "property", key: "og:type", content: type },
		{ attr: "property", key: "og:site_name", content: site.brand.name },
		{ attr: "name", key: "twitter:card", content: "summary_large_image" },
		{ attr: "name", key: "twitter:title", content: fullTitle },
		{ attr: "name", key: "twitter:description", content: desc },
	];

	if (url && !noindex) {
		meta.push({ attr: "property", key: "og:url", content: url });
		meta.push({ attr: "name", key: "twitter:url", content: url });
	}
	if (img && !noindex) {
		meta.push({ attr: "property", key: "og:image", content: img });
		meta.push({ attr: "name", key: "twitter:image", content: img });
	}

	return {
		title: fullTitle,
		meta,
		canonical: noindex ? null : url,
		jsonLd: Array.isArray(jsonLd) ? jsonLd : [jsonLd],
		preloadImage: preloadImage || null,
	};
}

/* ---------------- Client: reconcile <head> ---------------- */

export function applyHead(head) {
	if (typeof document === "undefined") return;

	document.title = head.title;

	const wanted = new Map(head.meta.map((m) => [`${m.attr}:${m.key}`, m]));

	for (const [attr, key] of MANAGED_META) {
		const entry = wanted.get(`${attr}:${key}`);
		let el = document.head.querySelector(`meta[${attr}="${key}"]`);
		if (entry) {
			if (!el) {
				el = document.createElement("meta");
				el.setAttribute(attr, key);
				document.head.appendChild(el);
			}
			el.setAttribute("content", entry.content);
		} else if (el) {
			el.remove();
		}
	}

	let canonical = document.head.querySelector('link[rel="canonical"]');
	if (head.canonical) {
		if (!canonical) {
			canonical = document.createElement("link");
			canonical.setAttribute("rel", "canonical");
			document.head.appendChild(canonical);
		}
		canonical.setAttribute("href", head.canonical);
	} else if (canonical) {
		canonical.remove();
	}

	document.head
		.querySelectorAll("script[data-seo-jsonld]")
		.forEach((el) => el.remove());
	for (const data of head.jsonLd) {
		const script = document.createElement("script");
		script.type = "application/ld+json";
		script.setAttribute("data-seo-jsonld", "");
		script.textContent = JSON.stringify(data);
		document.head.appendChild(script);
	}
}

/* ---------------- Build time: serialise to HTML ---------------- */

function escapeAttr(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

function escapeText(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

/** JSON for use inside <script>: prevents "</script>" breaking out. */
function safeJson(data) {
	return JSON.stringify(data)
		.replace(/</g, "\\u003c")
		.replace(/\u2028/g, "\\u2028")
		.replace(/\u2029/g, "\\u2029");
}

export function renderHeadHtml(head) {
	const out = [`<title>${escapeText(head.title)}</title>`];

	for (const m of head.meta) {
		out.push(
			`<meta ${m.attr}="${escapeAttr(m.key)}" content="${escapeAttr(m.content)}" />`,
		);
	}

	if (head.canonical) {
		out.push(`<link rel="canonical" href="${escapeAttr(head.canonical)}" />`);
	}

	if (head.preloadImage) {
		out.push(
			`<link rel="preload" as="image" href="${escapeAttr(head.preloadImage)}" fetchpriority="high" />`,
		);
	}

	for (const data of head.jsonLd) {
		out.push(
			`<script type="application/ld+json" data-seo-jsonld>${safeJson(data)}</script>`,
		);
	}

	return out.join("\n    ");
}