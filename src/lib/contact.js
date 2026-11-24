import { isConfigured, site } from "../config/site.js";

/**
 * Builds inquiry URLs for VELLORA.
 *
 * All contact entry points (product detail, floating button, contact page)
 * must go through these helpers so wording and the WhatsApp number are
 * changed in a single place.
 */

/**
 * True when a usable WhatsApp number is configured.
 * Used by the floating button and the contact page to decide whether to
 * render a direct `wa.me` link or a graceful fallback.
 */
export function isWhatsAppConfigured() {
	return isConfigured(site.contact.whatsappNumber);
}

/**
 * Returns a `wa.me` URL with a prefilled message, or `null` if the
 * WhatsApp number is not yet configured.
 *
 * When `productName` is supplied, the message follows the exact wording
 * from the brief: "Hello VELLORA, I am interested in [Product Name].
 * Could you please share more details?"
 */
export function buildWhatsAppUrl({ productName } = {}) {
	const number = site.contact.whatsappNumber;
	if (!isConfigured(number)) return null;

	const base = `https://wa.me/${number}`;
	if (!productName) return base;

	const message = `Hello VELLORA, I am interested in ${productName}. Could you please share more details?`;
	return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Instagram's official direct-message short-link for the VELLORA handle.
 * Opens the Instagram app on mobile, or the web DM view on desktop.
 * Falls back to the profile page automatically if the user is not logged in.
 */
export function buildInstagramDmUrl() {
	return `https://ig.me/m/${site.contact.instagram.handle}`;
}

/**
 * The public profile URL — used for social navigation in header/footer.
 * Kept here so all Instagram link construction lives in one file.
 */
export function buildInstagramProfileUrl() {
	return site.contact.instagram.profileUrl;
}