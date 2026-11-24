import { Link } from "react-router-dom";
import { categories } from "../../data/categories.js";

export default function CategoryFilter({ activeCategory, className = "" }) {
	const base =
		"inline-flex items-center py-3 text-label uppercase tracking-[0.18em] no-underline transition-colors duration-[var(--duration-fast)]";
	const activeCls = "text-ink";
	const inactiveCls = "text-ink-soft hover:text-ink";

	return (
		<nav
			aria-label="Filter by category"
			className={`flex flex-wrap gap-x-6 ${className}`}
		>
			<Link
				to="/collections"
				aria-current={activeCategory == null ? "page" : undefined}
				className={`${base} ${activeCategory == null ? activeCls : inactiveCls}`}
			>
				All
			</Link>
			{categories.map((category) => (
				<Link
					key={category.key}
					to={`/collections/${category.key}`}
					aria-current={activeCategory === category.key ? "page" : undefined}
					className={`${base} ${
						activeCategory === category.key ? activeCls : inactiveCls
					}`}
				>
					{category.label}
				</Link>
			))}
		</nav>
	);
}