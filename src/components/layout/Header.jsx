import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Menu as MenuIcon } from "lucide-react";
import Wordmark from "../shared/Wordmark.jsx";
import MobileMenu from "./MobileMenu.jsx";
import LinkButton from "../ui/LinkButton.jsx";
import { useScrolled } from "../../hooks/useScrolled.js";
import { getCatalogueHref, isCatalogueExternal } from "../../lib/links.js";
import { site } from "../../config/site.js";

const NAV = [
	{ to: "/collections", label: "Collections" },
	{ to: "/about", label: "About" },
	{ to: "/experiences", label: "Experiences" },
	{ to: "/contact", label: "Contact" },
];

function isActivePath(pathname, path) {
	return pathname === path || pathname.startsWith(path + "/");
}

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const scrolled = useScrolled(8);
	const location = useLocation();

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth >= 1024) setMenuOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	const catHref = getCatalogueHref();
	const catExternal = isCatalogueExternal();

	return (
		<>
			<header
				className={`fixed inset-x-0 top-0 z-40 bg-background transition-colors duration-[var(--duration-base)] ease-[var(--ease-luxury)] ${
					scrolled ? "border-b border-border" : "border-b border-transparent"
				}`}
			>
				<div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-20 lg:px-12">
					<Wordmark size="md" />

					<nav
						aria-label="Primary"
						className="hidden items-center gap-8 lg:flex"
					>
						{NAV.map((item) => {
							const isActive = isActivePath(location.pathname, item.to);
							return (
								<Link
									key={item.to}
									to={item.to}
									aria-current={isActive ? "page" : undefined}
									className={`text-label uppercase tracking-[0.18em] no-underline transition-colors duration-[var(--duration-fast)] ${
										isActive ? "text-ink" : "text-ink-soft hover:text-ink"
									}`}
								>
									{item.label}
								</Link>
							);
						})}
					</nav>

					<div className="hidden items-center gap-1 lg:flex">
						<a
							href={site.contact.instagram.profileUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${site.brand.name} on Instagram`}
							className="inline-flex h-11 w-11 items-center justify-center text-ink-soft transition-colors duration-[var(--duration-fast)] hover:text-ink"
						>
							<Instagram className="h-[18px] w-[18px]" strokeWidth={1.25} />
						</a>
						<LinkButton
							{...(catExternal ? { href: catHref } : { to: catHref })}
							variant="outline"
							size="sm"
						>
							Catalogue
						</LinkButton>
					</div>

					<button
						type="button"
						onClick={() => setMenuOpen(true)}
						aria-label="Open menu"
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
						aria-haspopup="dialog"
						className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
					>
						<MenuIcon className="h-5 w-5" strokeWidth={1.25} />
					</button>
				</div>
			</header>

			<MobileMenu
				open={menuOpen}
				onClose={() => setMenuOpen(false)}
				nav={NAV}
			/>
		</>
	);
}