/**
 * ⭐ VELLORA — Centralised business configuration.
 *
 * Every value that is not yet supplied by the owner is set to `null`
 * (or, where a string is required, the `PLACEHOLDER` marker).
 *
 * ⚠️  DO NOT publish a fabricated value here.
 *     Fill in real values before launch.
 */

export const PLACEHOLDER = "PLACEHOLDER";

export const site = {
	brand: {
		name: "VELLORA",
		tagline: "The Art of Timeless Luxury",
		headline: "Elegance Is Noticed. Luxury Is Remembered.",
	},

	/**
	 * Production domain, e.g. "https://vellora.com".
	 * Leave `null` until the real domain is registered.
	 */
	domain: null,

	contact: {
		/**
		 * WhatsApp number — full international format, digits only.
		 * Leave `null` until confirmed. The integration code is preserved
		 * and activates the floating button, contact panel and product CTA
		 * as soon as a value is set here.
		 */
		whatsappNumber: null,

		instagram: {
			handle: "vellora.luxury1",
			profileUrl: "https://www.instagram.com/vellora.luxury1",
		},
	},

	catalogue: {
		/**
		 * External Linktree URL for the full supplier catalogue.
		 * When set, every "Catalogue" CTA across the site opens this
		 * externally in a new tab with rel="noopener noreferrer".
		 */
		linktreeUrl: "https://linktr.ee/Warehouseinventory",
	},
};

/**
 * Returns true if the given config value has a real, usable value.
 */
export function isConfigured(value) {
	return (
		value !== null &&
		value !== undefined &&
		value !== "" &&
		value !== PLACEHOLDER
	);
}