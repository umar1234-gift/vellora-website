import { Link, useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";
import Container from "../ui/Container.jsx";
import Wordmark from "../shared/Wordmark.jsx";
import { site } from "../../config/site.js";
import { getCatalogueHref, isCatalogueExternal } from "../../lib/links.js";

const NAV = [
	{ to: "/collections", label: "Collections" },
	{ to: "/about", label: "About" },
	{ to: "/experiences", label: "Experiences" },
	{ to: "/contact", label: "Contact" },
];

function isActivePath(pathname, path) {
	return pathname === path || pathname.startsWith(path + "/");
}

export default function Footer() {
	const catHref = getCatalogueHref();
	const catExternal = isCatalogueExternal();
	const location = useLocation();

	return (
		<footer className="border-t border-border">
			<Container className="py-14 lg:py-16">
				<div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
					<Wordmark size="md" />

					<nav
						aria-label="Footer"
						className="grid grid-cols-2 gap-10 sm:gap-16"
					>
						<div>
							<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
								Explore
							</p>
							<ul className="mt-4 flex flex-col gap-3 text-small">
								{NAV.map((item) => {
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
								Connect
							</p>
							<ul className="mt-4 flex flex-col gap-3 text-small">
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