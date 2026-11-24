import { useState } from "react";
import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import LinkButton from "../components/ui/LinkButton.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Seo from "../components/ui/Seo.jsx";
import ExperienceCard from "../components/shared/ExperienceCard.jsx";
import Lightbox from "../components/ui/Lightbox.jsx";
import { experiences } from "../data/experiences.js";

const PLACEHOLDER_COUNT = 6;

export default function Experiences() {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const hasExperiences = experiences.length > 0;

	const lightboxItems = experiences.map((experience) => ({
		image: experience.image,
		alt: experience.caption || "Customer experience screenshot",
		caption: experience.caption,
	}));

	const openLightbox = (index) => {
		setLightboxIndex(index);
		setLightboxOpen(true);
	};

	return (
		<>
			<Seo
				title="Customer Experiences"
				description="Real customer conversations, feedback and order confirmations from our business, shared with permission and with personal and financial details redacted."
				path="/experiences"
			/>

			<div className="py-16 lg:py-24">
				<Container>
					<Reveal>
						<div className="mx-auto max-w-3xl text-center">
							<Eyebrow className="justify-center">Customer Experiences</Eyebrow>
							<h1 className="mt-6 font-display text-h1">
								Customer Experiences
							</h1>
							<p className="mx-auto mt-6 max-w-xl text-body text-ink-soft">
								Real customer conversations, feedback and order confirmations
								from our business — shared with permission and with privacy in
								mind.
							</p>
						</div>
					</Reveal>

					<Reveal delay={0.1}>
						<div className="mx-auto mt-12 max-w-3xl border border-border bg-surface p-6 sm:p-8">
							<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
								About These Experiences
							</p>
							<p className="mt-4 text-body text-ink-soft">
								Real customer conversations, feedback and order confirmations
								from our business. Each experience is shared with permission,
								with personal and financial details redacted to respect customer
								privacy.
							</p>
						</div>
					</Reveal>

					<div className="mx-auto mt-16 max-w-6xl">
						<h2 className="sr-only">Screenshots</h2>

						{hasExperiences ? (
							<div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
								{experiences.map((experience, i) => (
									<Reveal key={experience.id} delay={Math.min(i * 0.05, 0.2)}>
										<ExperienceCard
											experience={experience}
											onClick={() => openLightbox(i)}
										/>
									</Reveal>
								))}
							</div>
						) : (
							<div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
								{Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
									<Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
										<div className="relative aspect-[3/4] overflow-hidden bg-surface">
											<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
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
						)}
					</div>

					<Reveal delay={0.15}>
						<div className="mt-16 text-center">
							<LinkButton to="/contact" variant="outline" size="md">
								Contact VELLORA
							</LinkButton>
						</div>
					</Reveal>
				</Container>
			</div>

			<Lightbox
				items={lightboxItems}
				initialIndex={lightboxIndex}
				open={lightboxOpen}
				onClose={() => setLightboxOpen(false)}
			/>
		</>
	);
}