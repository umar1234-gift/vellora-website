import {
	Sparkles,
	RotateCcw,
	Headphones,
	Video,
	CreditCard,
	Truck,
} from "lucide-react";
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Reveal from "../ui/Reveal.jsx";

const FEATURES = [
	{
		icon: Sparkles,
		title: "Premium AAA Quality",
		description: "Every piece is selected for craftsmanship and finish.",
	},
	{
		icon: RotateCcw,
		title: "Easy Return & Refund",
		description: "A straightforward process if a piece is not quite right.",
	},
	{
		icon: Headphones,
		title: "Dedicated Support",
		description: "Personal assistance at every step of your enquiry.",
	},
	{
		icon: Video,
		title: "Live Video Proof",
		description: "See the actual piece on video before it is shipped.",
	},
	{
		icon: CreditCard,
		title: "PayPal & Zelle",
		description: "Secure, familiar payment options at checkout.",
	},
	{
		icon: Truck,
		title: "Express Shipping",
		description: "Fast dispatch with FedEx tracking on every order.",
	},
];

export default function WhyChooseVellora() {
	return (
		<Section className="bg-navy">
			<Container>
				<Reveal>
					<div className="mx-auto max-w-2xl text-center">
						<p className="text-label uppercase tracking-[0.18em] text-champagne">
							Why Choose VELLORA
						</p>
						<h2 className="mt-6 font-display text-h2 text-background">
							A service built on trust.
						</h2>
					</div>
				</Reveal>

				<div className="mt-16 grid gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
					{FEATURES.map((feature, i) => {
						const Icon = feature.icon;
						return (
							<Reveal key={feature.title} delay={i * 0.05}>
								<div>
									<Icon
										className="h-7 w-7 text-champagne"
										strokeWidth={1.25}
										aria-hidden="true"
									/>
									<h3 className="mt-6 font-display text-h3 text-background">
										{feature.title}
									</h3>
									<p className="mt-3 text-body text-background/70">
										{feature.description}
									</p>
								</div>
							</Reveal>
						);
					})}
				</div>
			</Container>
		</Section>
	);
}