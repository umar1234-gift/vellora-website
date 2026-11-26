import Seo from "../components/ui/Seo.jsx";
import Hero from "../components/home/Hero.jsx";
import { organizationSchema, websiteSchema } from "../lib/schema.js";
import FeaturedCategories from "../components/home/FeaturedCategories.jsx";
import SelectedProducts from "../components/home/SelectedProducts.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import WhyChooseVellora from "../components/home/WhyChooseVellora.jsx";
import BrandPhilosophy from "../components/home/BrandPhilosophy.jsx";
import ExperiencesPreview from "../components/home/ExperiencesPreview.jsx";
import AboutPreview from "../components/home/AboutPreview.jsx";
import ContactCta from "../components/home/ContactCta.jsx";
import { heroImage } from "../data/assets.js";

export default function Home() {
	return (
		<>
			<Seo
				absoluteTitle="VELLORA — Luxury Handbags, Shoes, Watches & Jewellery"
				description="VELLORA is a curated house of luxury handbags, shoes, watches, jewellery and sunglasses. Browse the collection and enquire personally on WhatsApp or Instagram."
				path="/"
				preloadImage={heroImage}
				jsonLd={[organizationSchema(), websiteSchema()]}
			/>
			<Hero />
			<FeaturedCategories />
			<SelectedProducts />
			<HowItWorks />
			<WhyChooseVellora />
			<BrandPhilosophy />
			<ExperiencesPreview />
			<AboutPreview />
			<ContactCta />
		</>
	);
}