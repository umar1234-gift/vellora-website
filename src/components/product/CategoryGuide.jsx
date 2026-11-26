import { Link } from "react-router-dom";
import { categories } from "../../data/categories.js";

/**
 * Short editorial block under the product grid, plus crawlable links to
 * the other categories. Keeps the grid above the fold, unchanged.
 */
export default function CategoryGuide({ heading, body, activeCategory }) {
	const others = categories.filter((c) => c.key !== activeCategory);

	return (
		<section
			aria-labelledby="category-guide-heading"
			className="mt-20 border-t border-border pt-12 lg:mt-24"
		>
			<div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
				<div className="lg:col-span-7">
					<h2
						id="category-guide-heading"
						className="font-display text-h3 text-ink"
					>
						{heading}
					</h2>
					<div className="mt-5 flex flex-col gap-4">
						{body.map((paragraph) => (
							<p key={paragraph} className="text-body text-ink-soft">
								{paragraph}
							</p>
						))}
					</div>
				</div>

				<nav aria-label="More categories" className="lg:col-span-5">
					<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
						{activeCategory ? "Explore more" : "Categories"}
					</p>
					<ul className="mt-4 flex flex-col gap-3 text-small">
						{others.map((c) => (
							<li key={c.key}>
								<Link
									to={`/collections/${c.key}`}
									className="text-ink no-underline hover:text-ink-soft"
								>
									{c.label}
									<span className="text-ink-soft"> — {c.blurb}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</section>
	);
}