import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/EyeBrow.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import { aboutImage } from "../../data/assets.js";

export default function AboutPreview() {
	return (
		<Section className="bg-surface">
			<Container>
				<div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-5">
						<Reveal>
							<div className="relative aspect-[4/5] overflow-hidden bg-background">
								{aboutImage ? (
									<img
										src={aboutImage}
										alt="VELLORA brand imagery"
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
							<Eyebrow rule>The House</Eyebrow>
						</Reveal>

						<Reveal delay={0.15}>
							<h2 className="mt-6 max-w-[20ch] font-display text-h2">
								A quiet approach to modern luxury.
							</h2>
						</Reveal>

						<Reveal delay={0.2}>
							<p className="mt-6 max-w-xl text-body text-ink-soft">
								VELLORA is an international fashion house bringing together a
								considered selection of accessories and timepieces. We work with
								partners we trust, and we share our selection with customers who
								value craft over noise.
							</p>
						</Reveal>

						<Reveal delay={0.25}>
							<p className="mt-4 max-w-xl text-body text-ink-soft">
								Every enquiry is personal. Every piece is chosen with care.
							</p>
						</Reveal>

						<Reveal delay={0.3}>
							<div className="mt-8">
								<LinkButton to="/about" variant="ghost" size="md">
									Discover VELLORA
								</LinkButton>
							</div>
						</Reveal>
					</div>
				</div>
			</Container>
		</Section>
	);
}