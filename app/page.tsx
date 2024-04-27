import BoostedAdvert from "./components/BoostedAdvert";
import FeaturedProduct from "./components/FeaturedProduct";
import HeroBanner from "./components/Herobanner";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <BoostedAdvert />
      <FeaturedProduct />
    </main>
  );
}
