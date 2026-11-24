import { isConfigured, site } from "../config/site.js";

/**
 * The catalogue CTA must never open a broken URL.
 * When the Linktree URL is configured, use it (external, new tab).
 * Otherwise fall back to the internal collections page.
 *
 * Phase 7 will extend this file with WhatsApp and Instagram helpers.
 */

export function isCatalogueExternal() {
	return isConfigured(site.catalogue.linktreeUrl);
}

export function getCatalogueHref() {
	return isCatalogueExternal() ? site.catalogue.linktreeUrl : "/collections";
}