import { MessageCircle, Instagram as InstagramIcon } from "lucide-react";
import LinkButton from "../ui/LinkButton.jsx";
import {
	buildWhatsAppUrl,
	buildInstagramDmUrl,
	isWhatsAppConfigured,
} from "../../lib/contact.js";

/**
 * Inquiry CTAs for the product detail page.
 *
 * While WhatsApp is unconfigured, Instagram DM is the sole primary
 * channel — no WhatsApp button, no "coming soon" caption.
 *
 * When a WhatsApp number is added to src/config/site.js, WhatsApp
 * returns as the primary button and Instagram becomes the secondary.
 * No code change needed at that point.
 */
export default function ProductInquiryActions({ product }) {
	const waConfigured = isWhatsAppConfigured();
	const waUrl = buildWhatsAppUrl({ productName: product.name });
	const igUrl = buildInstagramDmUrl();

	if (!waConfigured || !waUrl) {
		return (
			<div className="mt-10">
				<LinkButton href={igUrl} variant="solid" size="lg" className="w-full">
					<InstagramIcon className="h-4 w-4" strokeWidth={1.25} />
					Enquire on Instagram
				</LinkButton>
			</div>
		);
	}

	return (
		<div className="mt-10">
			<LinkButton href={waUrl} variant="solid" size="lg" className="w-full">
				<MessageCircle className="h-4 w-4" strokeWidth={1.25} />
				Enquire on WhatsApp
			</LinkButton>

			<LinkButton
				href={igUrl}
				variant="outline"
				size="lg"
				className="mt-3 w-full"
			>
				<InstagramIcon className="h-4 w-4" strokeWidth={1.25} />
				Message on Instagram
			</LinkButton>
		</div>
	);
}