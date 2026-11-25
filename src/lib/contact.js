import { isConfigured, site } from "../config/site.js";

export function isWhatsAppConfigured() {
	return isConfigured(site.contact.whatsappNumber);
}

export function buildWhatsAppUrl({ productName } = {}) {
	const number = site.contact.whatsappNumber;
	if (!isConfigured(number)) return null;

	const base = `https://wa.me/${number}`;
	const message = productName
		? `Hello VELLORA, I am interested in ${productName}. Could you please share more details?`
		: `Hello VELLORA, I would like to know more about your collection. Could you please share more details?`;
	return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildInstagramDmUrl() {
	return `https://ig.me/m/${site.contact.instagram.handle}`;
}

export function buildInstagramProfileUrl() {
	return site.contact.instagram.profileUrl;
}