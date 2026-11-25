import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/EyeBrow.jsx";
import Seo from "../components/ui/Seo.jsx";
import { site } from "../config/site.js";



export default function Refund() {
	return (
		<>
			<Seo
				title="Refund Policy"
				description="Return and refund policy for VELLORA orders."
				path="/refund"
			/>

			<div className="py-16 lg:py-24">
				<Container>
					<div className="mx-auto max-w-3xl">
						<Eyebrow>Policies</Eyebrow>
						<h1 className="mt-4 font-display text-h1">Refund Policy</h1>
						<p className="mt-6 text-body text-ink-soft">
							How returns and refunds work with VELLORA.
						</p>

						<div className="mt-16 space-y-14">
							<section>
								<h2 className="font-display text-h2">Return Window</h2>
								<p className="mt-4 text-body text-ink-soft">
									If a piece is not as described or not as expected, please
									contact us as soon as possible so we will refund or exchange the item.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Eligibility</h2>
								<p className="mt-4 text-body text-ink-soft">
									Items must be in their original condition to be
									eligible for return.
								</p>
				
							</section>

							<section>
								<h2 className="font-display text-h2">
									How to Request a Return
								</h2>
								<p className="mt-4 text-body text-ink-soft">
									Contact us directly on WhatsApp or email with your order
									reference and photographs of the item. We will confirm the
									next steps individually.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Refund Method</h2>
								<p className="mt-4 text-body text-ink-soft">
									Once a return is approved and the item is received, refunds
									are processed to the original payment method (PayPal or
									Zelle).
								</p>
								
							</section>

							

							<section>
								<h2 className="font-display text-h2">Support</h2>
								<p className="mt-4 text-body text-ink-soft">
									For refund enquiries, contact us at{" "}
									<a
										href={`mailto:${site.contact.email}`}
										className="underline decoration-border hover:decoration-ink-soft"
									>
										{site.contact.email}
									</a>
									.
								</p>
							</section>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}