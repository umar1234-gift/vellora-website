import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";
import { HeadContext } from "./lib/headContext.js";

/** Render one route to an HTML string plus the head data its <Seo> set. */
export function render(url) {
	const collector = { head: null };
	const html = renderToString(
		<React.StrictMode>
			<HeadContext.Provider value={collector}>
				<StaticRouter location={url}>
					<App />
				</StaticRouter>
			</HeadContext.Provider>
		</React.StrictMode>,
	);
	return { html, head: collector.head };
}