import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import Reveal from "../ui/Reveal.jsx";
import { experiences } from "../../data/experiences.js";

const PREVIEW_COUNT = 3;

export default function ExperiencesPreview() {
	const previewItems = experiences.slice(0, PREVIEW_COUNT);
	const hasExperiences = previewItems.length > 0;

	return (
		<Section>
			<Container>
				<div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
					<div className="lg:col-span-5">
						<Reveal>
							<SectionHeading
								eyebrow="Customer Experiences"
								title="Trusted Experiences"
								description="A glimpse into genuine customer experiences, feedback and order confirmations from our business."
							/>
						</Reveal>
						<Reveal delay={0.1}>
							<div className="mt-8">
								<LinkButton to="/experiences" variant="outline" size="md">
									Read the Experiences
								</LinkButton>
							</div>
						</Reveal>
					</div>

					<div className="lg:col-span-7">
						<div className="grid grid-cols-3 gap-4">
							{hasExperiences
								? previewItems.map((experience, i) => (
										<Reveal key={experience.id} delay={0.1 + i * 0.05}>
											<div className="relative aspect-[3/4] overflow-hidden bg-surface">
												<img
													src={experience.image}
													alt={
														experience.caption ||
														"Customer experience screenshot"
													}
													loading="lazy"
													decoding="async"
													className="absolute inset-0 h-full w-full object-cover"
												/>
												<div
													aria-hidden="true"
													className="pointer-events-none absolute inset-0 border border-border"
												/>
											</div>
										</Reveal>
									))
								: Array.from({ length: PREVIEW_COUNT }).map((_, i) => (
										<Reveal key={i} delay={0.1 + i * 0.05}>
											<div className="relative aspect-[3/4] overflow-hidden bg-surface">
												<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center">
													<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
														Screenshot
													</p>
													<p className="text-small text-ink-soft">
														To be supplied &amp; redacted
													</p>
												</div>
												<div
													aria-hidden="true"
													className="pointer-events-none absolute inset-0 border border-border"
												/>
											</div>
										</Reveal>
									))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}