"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import HeroFeature from "./HeroFeature";

export const HeroTitle = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div ref={ref}>
      <motion.div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/hero/hero-1.jpg')`, y: backgroundY }} />

      <div className="absolute inset-0 bg-stone/60" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-10 lg:pt-22">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-8"
            style={{ y: textY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4 ">
              <motion.span
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Star className="w-4 h-4 mr-2 fill-current" />
                Productos de Tecnologia y Accesorios
              </motion.span>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Mejora tu
                <span className="text-primary-light block font-akegin ">espacio de trabajo digital</span>
              </motion.h1>

              <motion.p
                className="text-lg text-white/80 text-pretty max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Descubre nuestros productos premium de tecnología y accesorios para mejorar tu espacio de trabajo digital
                para creadores, gamers y aficionados de la tecnología.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="/shop-with-sidebar" className="group px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center">
                Explorar Productos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="#" className="group px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Ver Video
              </Link>
            </motion.div>
            <HeroFeature />
          </motion.div>
        </div>
      </div>
    </div>
  )
}