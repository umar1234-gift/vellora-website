import { Link } from "react-router-dom";

/**
 * Visible breadcrumb trail. `items` is [{ name, to }]; the last item is
 * the current page and renders as plain text.
 */
export default function Breadcrumbs({ items, className = "" }) {
	return (
		<nav aria-label="Breadcrumb" className={className}>
			<ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-label uppercase tracking-[0.18em] text-ink-soft">
				{items.map((item, i) => {
					const last = i === items.length - 1;
					return (
						<li key={item.name} className="flex items-center gap-x-2">
							{last ? (
								<span aria-current="page" className="text-ink">
									{item.name}
								</span>
							) : (
								<Link to={item.to} className="no-underline hover:text-ink">
									{item.name}
								</Link>
							)}
							{!last && <span aria-hidden="true">/</span>}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}