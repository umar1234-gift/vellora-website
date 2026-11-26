import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/EyeBrow.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import LinkButton from "../components/ui/LinkButton.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Section from "../components/ui/Section.jsx";
import Seo from "../components/ui/Seo.jsx";
import { site } from "../config/site.js";
import { aboutImage } from "../data/assets.js";

const PILLARS = [
	{
		title: "Considered",
		description:
			"Every piece is selected with restraint — nothing added for its own sake.",
	},
	{
		title: "Enduring",
		description:
			"Quality over trend. Pieces chosen to remain relevant across seasons.",
	},
	{
		title: "Personal",
		description: "Every enquiry is answered individually, by a person.",
	},
];

export default function About() {
	return (
		<>
			<Seo
				title="About"
				description="The House of VELLORA — an international fashion house offering a curated selection of luxury fashion and accessories."
				path="/about"
			/>

			<div className="py-16 lg:py-24">
				<Container>
					<Reveal>
						<div className="mx-auto max-w-3xl text-center">
							<Eyebrow className="justify-center">About</Eyebrow>
							<h1 className="mt-6 font-display text-display">
								The House of VELLORA
							</h1>
							<p className="mx-auto mt-8 max-w-xl text-body text-ink-soft">
								{site.brand.tagline}
							</p>
						</div>
					</Reveal>
				</Container>
			</div>

			<Container>
				<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-5">
						<Reveal>
							<div className="relative aspect-[4/5] overflow-hidden bg-surface">
								{aboutImage ? (
									<img
										src={aboutImage}
										alt="VELLORA — The House of VELLORA, brand photograph"
										loading="lazy"
										decoding="async"
										className="absolute inset-0 h-full w-full object-cover"
									/>
								) : (
									<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
										<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
											Placeholder
										</p>
										<p className="text-small text-ink-soft">
											Brand imagery to be supplied.
										</p>
									</div>
								)}
								<div
									aria-hidden="true"
									className="pointer-events-none absolute inset-0 border border-border"
								/>
							</div>
						</Reveal>
					</div>

					<div className="lg:col-span-7">
						<Reveal delay={0.1}>
							<SectionHeading
								as="h2"
								eyebrow="The Story"
								title="A curated approach to modern luxury."
							/>
						</Reveal>

						<Reveal delay={0.15}>
							<p className="mt-8 text-body text-ink-soft">
								VELLORA is an international fashion house offering a considered
								selection of handbags, shoes, watches, fine jewellery and
								eyewear. The collection is assembled with care, focusing on
								craftsmanship, proportion and material rather than transient
								trends.
							</p>
						</Reveal>

						<Reveal delay={0.2}>
							<p className="mt-4 text-body text-ink-soft">
								We work with partners we trust, and we present each piece
								plainly — with honest photography, clear descriptions and
								personal service. Our approach is unhurried, and our catalogue
								is deliberately small.
							</p>
						</Reveal>

						<Reveal delay={0.25}>
							<p className="mt-4 text-body text-ink-soft">
								Every piece is chosen because we believe in it, and every
								enquiry is answered personally.
							</p>
						</Reveal>
					</div>
				</div>
			</Container>

			<Section>
				<Container>
					<Reveal>
						<div className="mx-auto max-w-3xl text-center">
							<Eyebrow className="justify-center">Our Approach</Eyebrow>
							<h2 className="mt-6 font-display text-h2">Three Principles</h2>
						</div>
					</Reveal>

					<div className="mt-16 grid gap-8 sm:grid-cols-3">
						{PILLARS.map((pillar, i) => (
							<Reveal key={pillar.title} delay={0.1 + i * 0.05}>
								<div className="border-t border-border pt-6">
									<h3 className="font-display text-h3">{pillar.title}</h3>
									<p className="mt-3 text-body text-ink-soft">
										{pillar.description}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</Container>
			</Section>

			<Section className="bg-surface">
				<Container>
					<div className="mx-auto max-w-3xl text-center">
						<Reveal>
							<Eyebrow className="justify-center">Our Philosophy</Eyebrow>
						</Reveal>
						<Reveal delay={0.1}>
							<h2 className="mt-8 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-ink">
								&ldquo;{site.brand.tagline}&rdquo;
							</h2>
						</Reveal>
						<Reveal delay={0.2}>
							<p className="mx-auto mt-8 max-w-xl text-body text-ink-soft">
								We believe luxury should be quiet, personal and unhurried.
							</p>
						</Reveal>
					</div>
				</Container>
			</Section>

			<div className="py-16 lg:py-24">
				<Container>
					<Reveal>
						<div className="mx-auto max-w-2xl text-center">
							<Eyebrow className="justify-center">Discover</Eyebrow>
							<h2 className="mt-6 font-display text-h2">
								Explore the Collection
							</h2>
							<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
								<LinkButton to="/collections" variant="solid" size="lg">
									View the Collection
								</LinkButton>
								<LinkButton to="/contact" variant="ghost" size="lg">
									Contact VELLORA
								</LinkButton>
							</div>
						</div>
					</Reveal>
				</Container>
			</div>
		</>
	);
}