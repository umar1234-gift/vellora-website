/**
 * ⭐ VELLORA — Centralised business configuration.
 */

export const PLACEHOLDER = "PLACEHOLDER";

export const site = {
	brand: {
		name: "VELLORA",
		tagline: "The Art of Timeless Luxury",
		headline: "Elegance Is Noticed. Luxury Is Remembered.",
	},

	domain: "https://shopvellora.me",

	contact: {
		whatsappNumber: "923411250228",
		email: "support@shopvellora.me",
		instagram: {
			handle: "vellora.luxury1",
			profileUrl: "https://www.instagram.com/vellora.luxury1",
		},
	},

	catalogue: {
		linktreeUrl: "https://linktr.ee/Warehouseinventory",
	},
};

export function isConfigured(value) {
	return (
		value !== null &&
		value !== undefined &&
		value !== "" &&
		value !== PLACEHOLDER
	);
}