"use client"

import Link from "next/link";
import { Category } from "@/types/category";
import React from "react";
import { imageBuilder } from "@/sanity/sanity-shop-utils";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleItem = ({ item }: { item: Category }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={`/categories/${item.slug.current}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full aspect-square bg-gray-900 rounded-2xl overflow-hidden border border-gray-6 flex items-center justify-center"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <Image
            src={imageBuilder(item.image).url()!}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-stone/40" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full w-full">

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="text-center px-4"
          >
            <h3 className="text-white text-lg font-bold tranking-wide">{item.title}</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute inset-0 bg-stone/80 flex items-center justify-center text-center px-6"
          >
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              {item.description && <p className="text-sm opacity-90 leading-relaxed">{item.description}</p>}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default SingleItem;
