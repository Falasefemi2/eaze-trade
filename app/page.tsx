import BoostedAdvert from "./components/BoostedAdvert";
import FeaturedProduct from "./components/FeaturedProduct";
import HeroBanner from "./components/Herobanner";
import { Testimonials } from "./components/TestimonialPage";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <BoostedAdvert />
      <FeaturedProduct />
      <Testimonials />
    </main>
  );
}
