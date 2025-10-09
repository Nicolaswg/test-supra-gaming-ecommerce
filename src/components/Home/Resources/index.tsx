"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Resources = () => {
  const resourcesSectionRef = useRef(null);
  const isInView = useInView(resourcesSectionRef, { once: true, margin: "-50px" });

  const cards = [
    {
      title: "Noticias",
      subtitle: "y Lanzamientos",
      image: "/images/resources/noticias.png",
      gradient: "from-[#872aff]/20 via-[#6a0064]/20 to-[#872aff]/20",
      borderGlow: "shadow-[0_0_30px_rgba(135,42,255,0.5)]",
      href: "/blog",
      animation: {
        initial: { opacity: 0, x: -100 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 },
        transition: { duration: 0.6, delay: 0.2 },
      },
    },
    {
      title: "Videos",
      subtitle: "",
      image: "/images/resources/videos.png",
      gradient: "from-[#6a0064]/20 via-[#872aff]/20 to-[#6a0064]/20",
      borderGlow: "shadow-[0_0_30px_rgba(106,0,100,0.5)]",
      animation: {
        initial: { opacity: 0, y: 100 },
        animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
        transition: { duration: 0.6, delay: 0.4 },
      },
      href: "#",
    },
    {
      title: "Descargas",
      subtitle: "",
      image: "/images/resources/descargas.png",
      gradient: "from-[#872aff]/20 via-[#6a0064]/20 to-[#872aff]/20",
      borderGlow: "shadow-[0_0_30px_rgba(135,42,255,0.5)]",
      animation: {
        initial: { opacity: 0, x: 100 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 },
        transition: { duration: 0.6, delay: 0.6 },
      },
      href: "#",
    },
  ]
  return (
    <section ref={resourcesSectionRef} className=" relative min-h-[600px] w-full bg-gradient-to-b from-stone via-gray-7 to-stone">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(135,42,255,0.15)_0%,transparent_50%,transparent_100%)" />

      <div className="relative h-full">
        <div className="grid h-full grid-cols-1 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div key={index}
              initial={card.animation.initial}
              animate={card.animation.animate}
              transition={card.animation.transition}
              className="group relative h-full">
              <Link href={card.href} className="block h-full">
                <div
                  className={`relative h-full min-h-[600px] overflow-hidden  bg-gradient-to-br ${card.gradient} backdrop-blur-sm transition-all duration-500 ${card.borderGlow}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />

                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-stone/40 via-stone/30 to-stone/50" />

                  <div className="absolute inset-0 bg-stone/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Corner borders */}
                  <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-white opacity-0 transition-all duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-white opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  {/* Text content */}
                  <div className="relative flex h-full flex-col items-center justify-center text-center transition-transform duration-500 group-hover:-translate-y-3">
                    <h3 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p className="mt-2 text-2xl font-semibold text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





export default Resources;