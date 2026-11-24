import { ArrowRight } from "lucide-react";
import Container from "../ui/Container.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import Eyebrow from "../ui/EyeBrow.jsx";
import Reveal from "../ui/Reveal.jsx";
import { site } from "../../config/site.js";
import { getCatalogueHref, isCatalogueExternal } from "../../lib/links.js";
import { heroImage } from "../../data/assets.js";

export default function Hero() {
	const catHref = getCatalogueHref();
	const catExternal = isCatalogueExternal();

	return (
		<section aria-labelledby="hero-headline">
			<Container>
				<div className="grid min-h-[calc(100svh-4rem)] items-center gap-12 py-12 sm:py-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-12 lg:gap-16 lg:py-20">
					{/* Text column */}
					<div className="lg:col-span-7">
						<Reveal>
							<Eyebrow rule>{site.brand.tagline}</Eyebrow>
						</Reveal>

						<Reveal delay={0.1}>
							<h1
								id="hero-headline"
								className="mt-8 max-w-[16ch] font-display text-display font-normal text-ink"
							>
								Elegance Is Noticed.{" "}
								<span className="italic text-ink-soft">
									Luxury Is Remembered.
								</span>
							</h1>
						</Reveal>

						<Reveal delay={0.2}>
							<p className="mt-8 max-w-md text-body text-ink-soft">
								A curated selection of handbags, shoes, timepieces, fine
								jewellery and eyewear — chosen with restraint and offered with
								care.
							</p>
						</Reveal>

						<Reveal delay={0.3}>
							<div className="mt-10 flex flex-wrap items-center gap-5">
								<LinkButton
									{...(catExternal ? { href: catHref } : { to: catHref })}
									variant="solid"
									size="lg"
								>
									View Full Catalogue
									<ArrowRight className="h-4 w-4" strokeWidth={1.25} />
								</LinkButton>

								<LinkButton to="/collections" variant="ghost" size="lg">
									Explore Collections
								</LinkButton>
							</div>
						</Reveal>
					</div>

					{/* Editorial image tile */}
					<div className="lg:col-span-5">
						<Reveal delay={0.15}>
							<div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
								{heroImage ? (
									<img
										src={heroImage}
										alt="Editorial photograph from the VELLORA collection"
										loading="eager"
										fetchPriority="high"
										decoding="async"
										className="absolute inset-0 h-full w-full object-cover"
									/>
								) : (
									<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
										<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
											Placeholder
										</p>
										<p className="max-w-[24ch] text-small text-ink-soft">
											Editorial hero image to be supplied by the owner.
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
				</div>
			</Container>
		</section>
	);
}