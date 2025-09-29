"use client";
import { motion } from "framer-motion"
import Link from "next/link";
import { useRef } from "react";
export default function NewArrivalTitle({ isInView }: { isInView: boolean }) {

  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-7 tracking-wider mb-6 font-akegin"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        PRODUCTOS DESTACADOS
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link
          href="/shop-with-sidebar"
          className="inline-flex font-medium text-sm py-3 px-8 rounded-full border border-gray-3 bg-white text-gray-7 transition-all duration-400 hover:bg-gradient-to-r hover:from-primary hover:to-[#360232] hover:text-white  hover:shadow-lg hover:scale-105"
        >
          Ver Todo
        </Link>
      </motion.div>
    </motion.div>
  );
}
