import { getHeroBanners, getHeroSliders } from "@/sanity/sanity-shop-utils";
import { HeroTitle } from "./HeroTitle";

const Hero = async () => {
  const data = await getHeroBanners();
  const sliders = await getHeroSliders();
  return (
    <section className="relative min-h-screen overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-60 sm:pt-30 lg:pt-30 xl:pt-41.5">
      <HeroTitle />
    </section>
  );
};

export default Hero;
