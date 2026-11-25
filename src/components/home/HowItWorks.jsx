import { Compass, Camera, MessageSquare, CheckCircle } from "lucide-react";
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import {
	buildWhatsAppUrl,
	buildInstagramDmUrl,
	isWhatsAppConfigured,
} from "../../lib/contact.js";
import { getCatalogueHref, isCatalogueExternal } from "../../lib/links.js";

const STEPS = [
	{
		n: "01",
		icon: Compass,
		title: "Explore Collections",
		description:
			"Browse our curated collections on the website, or explore the full external catalogue for the complete selection.",
	},
	{
		n: "02",
		icon: Camera,
		title: "Choose Your Favourite",
		description:
			"Screenshot your favourite piece and contact VELLORA on Instagram DM or WhatsApp for price, availability and full details.",
	},
	{
		n: "03",
		icon: MessageSquare,
		title: "Custom Product Requests",
		description:
			"Cannot find what you are looking for? Send us a reference image and VELLORA will try to arrange the requested product.",
	},
	{
		n: "04",
		icon: CheckCircle,
		title: "Confirm Your Order",
		description:
			"Once product details, pricing and payment arrangements are reviewed and confirmed, your order is placed.",
	},
];

export default function HowItWorks() {
	const waConfigured = isWhatsAppConfigured();
	const waUrl = buildWhatsAppUrl();
	const igUrl = buildInstagramDmUrl();
	const catHref = getCatalogueHref();
	const catExternal = isCatalogueExternal();

	return (
		<Section className="border-t border-border">
			<Container>
				<Reveal>
					<div className="mx-auto max-w-2xl text-center">
						<SectionHeading
							as="h2"
							eyebrow="How It Works"
							title="Four Simple Steps"
							description="Ordering from VELLORA is personal and unhurried. Here is how it works."
							align="center"
						/>
					</div>
				</Reveal>

				<div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
					{STEPS.map((step, i) => {
						const Icon = step.icon;
						return (
							<Reveal key={step.n} delay={i * 0.05}>
								<div>
									<div className="flex items-center gap-3">
										<span className="text-label uppercase tracking-[0.18em] text-champagne-deep">
											{step.n}
										</span>
										<span
											className="h-px flex-1 bg-border"
											aria-hidden="true"
										/>
										<Icon
											className="h-5 w-5 text-ink"
											strokeWidth={1.25}
											aria-hidden="true"
										/>
									</div>
									<h3 className="mt-6 font-display text-h3">{step.title}</h3>
									<p className="mt-3 text-body text-ink-soft">
										{step.description}
									</p>
								</div>
							</Reveal>
						);
					})}
				</div>

				<Reveal delay={0.2}>
					<div className="mt-16 flex flex-wrap items-center justify-center gap-4">
						{waConfigured && waUrl && (
							<LinkButton href={waUrl} variant="solid" size="lg">
								Message on WhatsApp
							</LinkButton>
						)}
						<LinkButton href={igUrl} variant="outline" size="lg">
							Instagram DM
						</LinkButton>
						{catExternal ? (
							<LinkButton href={catHref} variant="ghost" size="lg">
								Full Catalogue
							</LinkButton>
						) : (
							<LinkButton to={catHref} variant="ghost" size="lg">
								Browse Collections
							</LinkButton>
						)}
					</div>
				</Reveal>
			</Container>
		</Section>
	);
}