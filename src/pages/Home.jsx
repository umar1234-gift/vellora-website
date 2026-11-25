import Seo from "../components/ui/Seo.jsx";
import Hero from "../components/home/Hero.jsx";
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
				description="Elegance is noticed. Luxury is remembered. A curated house of handbags, shoes, watches, jewellery and sunglasses."
				path="/"
				image={heroImage}
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