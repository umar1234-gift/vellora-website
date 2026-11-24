import {
	MessageCircle,
	Instagram as InstagramIcon,
	ArrowUpRight,
} from "lucide-react";
import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import LinkButton from "../components/ui/LinkButton.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Seo from "../components/ui/Seo.jsx";
import { site } from "../config/site.js";
import {
	buildWhatsAppUrl,
	buildInstagramDmUrl,
	buildInstagramProfileUrl,
	isWhatsAppConfigured,
} from "../lib/contact.js";
import { getCatalogueHref, isCatalogueExternal } from "../lib/links.js";

export default function Contact() {
	const waConfigured = isWhatsAppConfigured();
	const waUrl = buildWhatsAppUrl();
	const igDm = buildInstagramDmUrl();
	const igProfile = buildInstagramProfileUrl();
	const catHref = getCatalogueHref();
	const catExternal = isCatalogueExternal();

	/* Shared catalogue card body — used in both layouts */
	const catalogueCard = (
		<div className="h-full border border-border p-8">
			<Eyebrow>Catalogue</Eyebrow>
			<h3 className="mt-4 font-display text-h3">Full Catalogue</h3>
			<p className="mt-4 text-body text-ink-soft">
				The complete selection is hosted externally. Browse every piece in one
				place.
			</p>
			<div className="mt-6">
				{catExternal ? (
					<LinkButton href={catHref} variant="outline" size="md">
						View Full Catalogue
						<ArrowUpRight className="h-4 w-4" strokeWidth={1.25} />
					</LinkButton>
				) : (
					<LinkButton to={catHref} variant="outline" size="md">
						Browse Collections
						<ArrowUpRight className="h-4 w-4" strokeWidth={1.25} />
					</LinkButton>
				)}
			</div>
		</div>
	);

	return (
		<>
			<Seo
				title="Contact"
				description="Message VELLORA on Instagram for personal assistance with any piece in the collection."
				path="/contact"
			/>

			<div className="py-16 lg:py-24">
				<Container>
					<Reveal>
						<div className="mx-auto max-w-3xl text-center">
							<Eyebrow className="justify-center">Contact</Eyebrow>
							<h1 className="mt-6 font-display text-h1">
								A personal concierge.
							</h1>
							<p className="mx-auto mt-6 max-w-xl text-body text-ink-soft">
								For details, availability or personal assistance, speak with
								VELLORA directly. Every enquiry is answered personally.
							</p>
						</div>
					</Reveal>

					{waConfigured && waUrl ? (
						/* ---------- WhatsApp configured: WhatsApp primary ---------- */
						<>
							<Reveal delay={0.1}>
								<div className="mx-auto mt-16 max-w-3xl border border-border bg-surface p-8 sm:p-12">
									<Eyebrow rule>WhatsApp — Primary</Eyebrow>
									<h2 className="mt-4 font-display text-h3">
										Speak with VELLORA
									</h2>
									<p className="mt-4 max-w-lg text-body text-ink-soft">
										Personal assistance for any piece in the collection —
										sizing, availability, or a private enquiry.
									</p>
									<div className="mt-8">
										<LinkButton href={waUrl} variant="solid" size="lg">
											<MessageCircle className="h-4 w-4" strokeWidth={1.25} />
											Message on WhatsApp
										</LinkButton>
									</div>
								</div>
							</Reveal>

							<div className="mx-auto mt-6 grid max-w-3xl gap-6 sm:grid-cols-2">
								<Reveal delay={0.15}>
									<div className="h-full border border-border p-8">
										<Eyebrow>Instagram</Eyebrow>
										<h3 className="mt-4 font-display text-h3">
											@{site.contact.instagram.handle}
										</h3>
										<p className="mt-4 text-body text-ink-soft">
											Follow for new arrivals, or send a direct message for a
											quick reply.
										</p>
										<div className="mt-6 flex flex-wrap items-center gap-3">
											<LinkButton href={igDm} variant="solid" size="md">
												<InstagramIcon className="h-4 w-4" strokeWidth={1.25} />
												Send a DM
											</LinkButton>
											<LinkButton href={igProfile} variant="ghost" size="md">
												Follow
											</LinkButton>
										</div>
									</div>
								</Reveal>

								<Reveal delay={0.2}>{catalogueCard}</Reveal>
							</div>
						</>
					) : (
						/* ---------- WhatsApp not configured: Instagram primary ---------- */
						<>
							<Reveal delay={0.1}>
								<div className="mx-auto mt-16 max-w-3xl border border-border bg-surface p-8 sm:p-12">
									<Eyebrow rule>Instagram — Primary</Eyebrow>
									<h2 className="mt-4 font-display text-h3">Message VELLORA</h2>
									<p className="mt-4 max-w-lg text-body text-ink-soft">
										Personal assistance for any piece in the collection —
										sizing, availability, or a private enquiry. Send us a direct
										message on Instagram.
									</p>
									<div className="mt-8 flex flex-wrap items-center gap-3">
										<LinkButton href={igDm} variant="solid" size="lg">
											<InstagramIcon className="h-4 w-4" strokeWidth={1.25} />
											Message on Instagram
										</LinkButton>
										<LinkButton href={igProfile} variant="ghost" size="md">
											@{site.contact.instagram.handle}
										</LinkButton>
									</div>
								</div>
							</Reveal>

							<div className="mx-auto mt-6 max-w-3xl">
								<Reveal delay={0.15}>{catalogueCard}</Reveal>
							</div>
						</>
					)}

					<Reveal delay={0.25}>
						<p className="mx-auto mt-16 max-w-lg text-center text-small text-ink-soft">
							Enquiries are answered personally. For a piece-specific question,
							please mention the product reference in your message.
						</p>
					</Reveal>
				</Container>
			</div>
		</>
	);
}