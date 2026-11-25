import { Link, useLocation } from "react-router-dom";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import Container from "../ui/Container.jsx";
import Wordmark from "../shared/Wordmark.jsx";
import { site } from "../../config/site.js";
import { getCatalogueHref, isCatalogueExternal } from "../../lib/links.js";
import { buildWhatsAppUrl, isWhatsAppConfigured } from "../../lib/contact.js";

const EXPLORE = [
	{ to: "/collections", label: "Collections" },
	{ to: "/about", label: "About" },
	{ to: "/experiences", label: "Experiences" },
	{ to: "/contact", label: "Contact" },
];

const POLICIES = [
	{ to: "/terms", label: "Terms & Conditions" },
	{ to: "/shipping", label: "Shipping Policy" },
	{ to: "/refund", label: "Refund Policy" },
];

function isActivePath(pathname, path) {
	return pathname === path || pathname.startsWith(path + "/");
}

export default function Footer() {
	const catHref = getCatalogueHref();
	const catExternal = isCatalogueExternal();
	const waConfigured = isWhatsAppConfigured();
	const waUrl = buildWhatsAppUrl();
	const location = useLocation();
	const email = site.contact.email;

	return (
		<footer className="border-t border-border">
			<Container className="py-14 lg:py-16">
				<div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
					<Wordmark size="md" />

					<nav
						aria-label="Footer"
						className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16"
					>
						<div>
							<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
								Explore
							</p>
							<ul className="mt-4 flex flex-col gap-3 text-small">
								{EXPLORE.map((item) => {
									const isActive = isActivePath(location.pathname, item.to);
									return (
										<li key={item.to}>
											<Link
												to={item.to}
												aria-current={isActive ? "page" : undefined}
												className="text-ink-soft no-underline hover:text-ink"
											>
												{item.label}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>

						<div>
							<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
								Policies
							</p>
							<ul className="mt-4 flex flex-col gap-3 text-small">
								{POLICIES.map((item) => (
									<li key={item.to}>
										<Link
											to={item.to}
											className="text-ink-soft no-underline hover:text-ink"
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
								Connect
							</p>
							<ul className="mt-4 flex flex-col gap-3 text-small">
								{waConfigured && waUrl && (
									<li>
										<a
											href={waUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 text-ink-soft no-underline hover:text-ink"
										>
											<MessageCircle
												className="h-[14px] w-[14px]"
												strokeWidth={1.25}
											/>
											<span>WhatsApp</span>
										</a>
									</li>
								)}
								<li>
									<a
										href={site.contact.instagram.profileUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-ink-soft no-underline hover:text-ink"
									>
										<Instagram
											className="h-[14px] w-[14px]"
											strokeWidth={1.25}
										/>
										<span>@{site.contact.instagram.handle}</span>
									</a>
								</li>
								{email && (
									<li>
										<a
											href={`mailto:${email}`}
											className="inline-flex items-center gap-2 text-ink-soft no-underline hover:text-ink"
										>
											<Mail className="h-[14px] w-[14px]" strokeWidth={1.25} />
											<span className="break-all">{email}</span>
										</a>
									</li>
								)}
								<li>
									{catExternal ? (
										<a
											href={catHref}
											target="_blank"
											rel="noopener noreferrer"
											className="text-ink-soft no-underline hover:text-ink"
										>
											Full Catalogue
										</a>
									) : (
										<Link
											to={catHref}
											className="text-ink-soft no-underline hover:text-ink"
										>
											Full Catalogue
										</Link>
									)}
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</Container>
		</footer>
	);
}