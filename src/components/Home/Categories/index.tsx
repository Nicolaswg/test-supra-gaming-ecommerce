"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/assets/icons";
import { useGetCategoriesQuery } from "@/redux/features/api/category";
import "swiper/css";
import "swiper/css/navigation";
import SingleItem from "./SingleItem";
import { motion, useInView } from "framer-motion";

const Categories = () => {
  const sliderRef = useRef(null);
  const categoySectionRef = useRef(null);
  const isInView = useInView(categoySectionRef, { once: true, margin: "-50px" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const { data = [] } = useGetCategoriesQuery();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      // @ts-ignore
      sliderRef.current.swiper.init();
    }
  }, []);

  const onSlideChange = useCallback(() => {
    // @ts-ignore
    if (sliderRef.current?.swiper) {
      // @ts-ignore
      setCurrentIndex(sliderRef.current.swiper.activeIndex);
      // @ts-ignore
      setIsEnd(sliderRef.current.swiper.isEnd);
    }
  }, []);

  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-10 sm:pt-10 lg:pt-15 xl:pt-20" ref={categoySectionRef}>
      <div className="w-full px-4 mt-4 mx-auto border-b max-w-7xl sm:px-6 xl:px-0 pb-15 border-gray-3">
        <div className="swiper categories-carousel common-carousel">
          {/* <!-- section title --> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: isInView ? 0.15 + 0.3 : 0, ease: "easeOut" }}
            className="flex items-center justify-between mb-10">

            <div>
              <h2 className="text-xl font-semibold xl:text-heading-5 text-dark">
                Categorias
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={handlePrev}
                className={`swiper-button-prev p-3  ${currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
                  }`}
                aria-label="previous button"
                disabled={currentIndex === 0}
                whileHover={{ scale: 1.05 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                whileTap={{ scale: 0.95 }}
              >

                <ChevronLeftIcon />
              </motion.button>

              <motion.button
                onClick={handleNext}
                aria-label="next button"
                className={`swiper-button-next ${isEnd ? "opacity-50 pointer-events-none" : ""
                  }`}
                disabled={isEnd}
                whileHover={{ scale: 1.05 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRightIcon />
              </motion.button>
            </div>
          </motion.div>

          <Swiper
            ref={sliderRef}
            onSlideChange={onSlideChange}
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={false}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="!overflow-visible"
          >
            {data.map((item, index) => (
              <SwiperSlide key={item._id} className="!h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 50,
                    scale: isInView ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.6, delay: isInView ? index * 0.15 + 0.3 : 0, ease: "easeOut" }}
                  className="w-full"
                >
                  <SingleItem item={item} />

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Categories;
