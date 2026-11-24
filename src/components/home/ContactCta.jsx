import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import { site } from "../../config/site.js";

export default function ContactCta() {
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
							on Instagram.
						</p>
					</Reveal>

					<Reveal delay={0.3}>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
							<LinkButton to="/contact" variant="solid" size="lg">
								Contact VELLORA
							</LinkButton>
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