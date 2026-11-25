import { MessageCircle } from "lucide-react";
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/EyeBrow.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import { site } from "../../config/site.js";
import { buildWhatsAppUrl, isWhatsAppConfigured } from "../../lib/contact.js";

export default function ContactCta() {
	const waConfigured = isWhatsAppConfigured();
	const waUrl = buildWhatsAppUrl();

	return (
		<Section className="border-t border-border">
			<Container>
				<div className="mx-auto max-w-2xl text-center">
					<Reveal>
						<Eyebrow className="justify-center">Enquiries</Eyebrow>
					</Reveal>

					<Reveal delay={0.1}>
						<h2 className="mt-6 font-display text-h2">A personal concierge.</h2>
					</Reveal>

					<Reveal delay={0.2}>
						<p className="mx-auto mt-6 max-w-lg text-body text-ink-soft">
							For details, availability or personal assistance, message VELLORA
							on WhatsApp or Instagram.
						</p>
					</Reveal>

					<Reveal delay={0.3}>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
							<LinkButton to="/contact" variant="solid" size="lg">
								Contact VELLORA
							</LinkButton>
							{waConfigured && waUrl && (
								<LinkButton href={waUrl} variant="outline" size="lg">
									<MessageCircle className="h-4 w-4" strokeWidth={1.25} />
									Message on WhatsApp
								</LinkButton>
							)}
							<LinkButton
								href={site.contact.instagram.profileUrl}
								variant="ghost"
								size="lg"
							>
								@{site.contact.instagram.handle}
							</LinkButton>
						</div>
					</Reveal>
				</div>
			</Container>
		</Section>
	);
}