import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/EyeBrow.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function BrandPhilosophy() {
	return (
		<Section className="bg-surface">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<Reveal>
						<Eyebrow className="justify-center">Our Philosophy</Eyebrow>
					</Reveal>

					<Reveal delay={0.1}>
						<h2 className="mt-8 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-ink">
							&ldquo;The Art of Timeless Luxury&rdquo;
						</h2>
					</Reveal>

					<Reveal delay={0.2}>
						<p className="mx-auto mt-8 max-w-xl text-body text-ink-soft">
							VELLORA is a curated house of fashion and accessories. Each piece
							is selected with restraint — chosen for craftsmanship, considered
							proportions and a quality that outlasts the season. We believe
							luxury should be quiet, personal and unhurried.
						</p>
					</Reveal>
				</div>
			</Container>
		</Section>
	);
}