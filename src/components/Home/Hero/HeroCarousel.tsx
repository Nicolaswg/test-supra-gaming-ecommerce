"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { imageBuilder } from "@/sanity/sanity-shop-utils";

// Import Swiper styles  
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";

const HeroCarousel = ({ sliders }: any) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="hero-carousel"
        loop={true}
      >
        {sliders?.map((slider: any, key: number) => (
          <SwiperSlide key={key}>
            <div className="relative overflow-hidden rounded-[10px]">
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>

              <div className="max-w-[500px] absolute left-8 lg:left-20 top-1/2 -translate-y-1/2 z-20">


                <h1 className="font-bold text-white text-2xl sm:text-[42px] mb-4 leading-tight drop-shadow-lg">
                  <Link
                    href={`/products/${slider?.product?.slug.current}`}
                    className="transition-colors duration-300"
                  >
                    {slider?.product?.name}
                  </Link>
                </h1>

                <p className="text-base text-white/90 mb-6 leading-relaxed max-w-[350px]">
                  {slider?.product?.shortDescription.slice(0, 120)}...
                </p>

                <Link
                  href={`/products/${slider?.product?.slug.current}`}
                  className="inline-flex items-center gap-2 font-semibold text-white text-base rounded-full bg-[#54044F] hover:bg-gradient-to-r hover:from-[#54044F] hover:to-[#360232] py-4 px-10 ease-out duration-300 hover:bg-primary-dark hover:scale-105 transform shadow-lg hover:shadow-xl"
                >
                  comprar ahora
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <Image
                src={
                  slider?.image ? imageBuilder(slider?.image).url()! : "/no-image"
                }
                width={981}
                height={533}
                loading="eager"
                className="rounded-[10px] w-full max-h-[533px] object-cover transition-transform duration-700 hover:scale-105"
                alt={slider?.product?.name || "Product image"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;