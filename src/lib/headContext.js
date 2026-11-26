import { createContext } from "react";

/**
 * Provided only during build-time prerendering. <Seo> writes the page's
 * head data into this collector so the prerender script can serialise it.
 * On the client the context is null and <Seo> updates <head> in an effect.
 */
export const HeadContext = createContext(null);