"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";
import HeroFeature from "./HeroFeature";
import HeroBannerItem from "./HeroBannerItem";

export const HeroContent = ({ data: { banners, sliders } }: { data: { banners: any, sliders: any } }) => {

  return (
    <div>
      <motion.div className="absolute  inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/hero/hero-1.jpg')` }} />

      <div className="absolute inset-0 bg-stone/80" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-10 lg:pt-22">
        <div className="grid grid-cols-1  gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-8"
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
                className="text-2xl sm:text-3xl lg:text-4xl font-bold  text-gray-2 text-balance leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Mejora tu
                <span className="max-w-4xl  text-4xl sm:text-5xl lg:text-6xl block font-akegin ">espacio de trabajo digital</span>
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
