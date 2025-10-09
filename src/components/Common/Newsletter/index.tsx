"use client";

import { useInView, motion } from "framer-motion";
import Graphics from "./Graphics";
import NewsletterForm from "./NewsletterForm";
import { useRef } from "react";

const Newsletter = () => {
  const newsLetterSectionRef = useRef(null);
  const isInView = useInView(newsLetterSectionRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section className="overflow-hidden mb-5" ref={newsLetterSectionRef}>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-0 ">
        <motion.div
          className="relative z-1 overflow-hidden rounded-xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Graphics />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-4 sm:px-7.5 xl:pl-12.5 xl:pr-14 py-11">
            <motion.div className="max-w-[491px] w-full" variants={itemVariants}>
              <h2 className="max-w-[399px] text-white font-bold text-lg sm:text-xl xl:text-heading-4 mb-3">
                No te pierdas nuestras novedades!
              </h2>
              <p className="text-white">
                Registrate y recibe las mejores ofertas, cupones y promociones directamente en tu correo.
              </p>
            </motion.div>

            <motion.div className="max-w-[477px] w-full" variants={itemVariants}>
              <NewsletterForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
