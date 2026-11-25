import Container from "../components/ui/Container.jsx";
import Eyebrow from "../components/ui/EyeBrow.jsx";
import Seo from "../components/ui/Seo.jsx";
import { site } from "../config/site.js";



export default function Terms() {
	return (
		<>
			<Seo
				title="Terms & Conditions"
				description="Terms and conditions for ordering from VELLORA."
				path="/terms"
			/>

			<div className="py-16 lg:py-24">
				<Container>
					<div className="mx-auto max-w-3xl">
						<Eyebrow>Policies</Eyebrow>
						<h1 className="mt-4 font-display text-h1">Terms & Conditions</h1>
						<p className="mt-6 text-body text-ink-soft">
							These terms apply to all enquiries and orders with VELLORA.
						</p>

						<div className="mt-16 space-y-14">
							<section>
								<h2 className="font-display text-h2">Ordering Policy</h2>
								<p className="mt-4 text-body text-ink-soft">
									VELLORA operates as a curated catalogue. There is no automated
									checkout — all enquiries are made directly through WhatsApp,
									Instagram DM or email. After reviewing product details,
									availability and pricing, an order is confirmed personally
									between you and VELLORA.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Product Information</h2>
								<p className="mt-4 text-body text-ink-soft">
									Product photographs shown on the website are genuine
									photographs of the items offered. Slight variations in colour,
									lighting or packaging may occur. Where a specific detail is
									important to you, please confirm with VELLORA before placing
									an order.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Payment Policy</h2>
								<p className="mt-4 text-body text-ink-soft">
									Payment is accepted via PayPal and Zelle. Payment
									arrangements, including currency and any applicable
									transaction handling, are confirmed directly with VELLORA
									before dispatch.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Shipping & Delivery</h2>
								<p className="mt-4 text-body text-ink-soft">
									Orders are dispatched via express courier with FedEx tracking.
									Full details, including estimated delivery windows are provided on our{" "}
									<a
										href="/shipping"
										className="underline decoration-border hover:decoration-ink-soft"
									>
										Shipping Policy
									</a>{" "}
									page.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Returns & Refunds</h2>
								<p className="mt-4 text-body text-ink-soft">
									Returns and refunds are handled on a case-by-case basis. Full
									details are provided on our{" "}
									<a
										href="/refund"
										className="underline decoration-border hover:decoration-ink-soft"
									>
										Refund Policy
									</a>{" "}
									page.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">
									Custom Product Requests
								</h2>
								<p className="mt-4 text-body text-ink-soft">
									If you cannot find the item you are looking for in our
									catalogue, you may send a reference image and VELLORA will try
									to arrange the requested product. Availability, pricing and
									lead time are confirmed individually before any payment is
									made.
								</p>
							</section>

							<section>
								<h2 className="font-display text-h2">Customer Support</h2>
								<p className="mt-4 text-body text-ink-soft">
									For any questions about these terms, please reach us at{" "}
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