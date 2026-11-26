import { useContext, useEffect } from "react";
import { HeadContext } from "../../lib/headContext.js";
import { applyHead, buildHead } from "../../lib/seo.js";

/**
 * Per-route SEO metadata.
 * Props: title, absoluteTitle, description, type, path, image,
 *        noindex, jsonLd, preloadImage.
 *
 * At build time it hands its data to the HeadContext collector so it is
 * written into the static HTML. In the browser it reconciles <head> in an
 * effect, so client-side navigation never leaves stale tags. Renders null.
 */
export default function Seo(props) {
	const collector = useContext(HeadContext);
	const head = buildHead(props);

	if (collector) collector.head = head;

	const key = JSON.stringify(head);
	useEffect(() => {
		applyHead(head);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key]);

	return null;
}