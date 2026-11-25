import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/EyeBrow.jsx";
import Seo from "../components/ui/Seo.jsx";
import { site } from "../config/site.js";



export default function Shipping() {
	return (
		<>
			<Seo
				title="Shipping Policy"
				description="Shipping and delivery details for VELLORA orders."
				path="/shipping"
			/>

			<div className="py-16 lg:py-24">
				<Container>
					<div className="mx-auto max-w-3xl">
						<Eyebrow>Policies</Eyebrow>
						<h1 className="mt-4 font-display text-h1">Shipping Policy</h1>
						<p className="mt-6 text-body text-ink-soft">
							How VELLORA dispatches and delivers your order.
						</p>

						<div className="mt-16 space-y-14">
							<section>
								<h2 className="font-display text-h2">Courier & Tracking</h2>
								<p className="mt-4 text-body text-ink-soft">
									All orders are dispatched via express courier with FedEx
									tracking. A tracking number is shared with you directly once
									the order is dispatched.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Dispatch Time</h2>
								<p className="mt-4 text-body text-ink-soft">
									Orders are prepared for dispatch after payment is confirmed
									and, where requested, live video proof of the item is shared
									with you.
								</p>
						
							</section>

							<section>
								<h2 className="font-display text-h2">Delivery Time</h2>
								<p className="mt-4 text-body text-ink-soft">
									An estimate is about 6 to 8 business days.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Shipping Fees</h2>
								<p className="mt-4 text-body text-ink-soft">
									Shipping is completely free for all orders.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Packaging</h2>
								<p className="mt-4 text-body text-ink-soft">
									Every order is packed with care and discretion, with complete box + PaperBag and DustBag
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Support</h2>
								<p className="mt-4 text-body text-ink-soft">
									For shipping questions, contact us at{" "}
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