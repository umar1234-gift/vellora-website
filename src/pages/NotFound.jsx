import Container from "../components/ui/Container.jsx";
import LinkButton from "../components/ui/LinkButton.jsx";
import Seo from "../components/ui/Seo.jsx";

export default function NotFound() {
	return (
		<>
			<Seo
				title="Page not found"
				description="The page you were looking for could not be found."
				noindex
			/>
			<div className="py-24 lg:py-32">
				<Container>
					<div className="mx-auto max-w-lg text-center">
						<p className="text-label uppercase tracking-[0.18em] text-ink-soft">
							404
						</p>
						<h1 className="mt-4 font-display text-h1">Page not found</h1>
						<p className="mt-6 text-body text-ink-soft">
							The page you were looking for could not be found.
						</p>
						<div className="mt-10">
							<LinkButton to="/" variant="outline" size="md">
								Return to the homepage
							</LinkButton>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}