"use client";

import { imageBuilder } from "@/sanity/sanity-shop-utils";
import { Product } from "@/types/product";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";


export const BestSellerContent = ({ product }: { product: Product[] }) => {
  const bestSelletSectionRef = useRef(null);
  const isInView = useInView(bestSelletSectionRef, { once: true, margin: "-50px" });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const getProductsForScreen = (screenSize: "mobile" | "tablet" | "lg" | "xl") => {
    if (screenSize === "mobile") return product.slice(0, 4);
    if (screenSize === "tablet") return product.slice(0, 3);
    if (screenSize === "lg") return product.slice(0, 5);
    return product;
  }

  const renderStackedCards = (
    displayProducts: Product[],
    cardWidth: number,
    spreadDistance: number,
    isTouchDevice: boolean = false
  ) => {
    return displayProducts.map((product, index) => {

      const totalCards = displayProducts.length;
      const middleIndex = (totalCards - 1) / 2;
      const isInteracted = isTouchDevice ? tappedIndex !== null : hoveredIndex !== null;
      const isThisInteracted = isTouchDevice ? tappedIndex === index : hoveredIndex === index;

      let rotation = 0
      let translateX = 0
      let translateY = 0
      let zIndex = index

      if (isInteracted) {
        const offset = index - middleIndex
        translateX = offset * spreadDistance
        rotation = offset * 4
        translateY = Math.abs(offset) * 8
        zIndex = isThisInteracted ? totalCards + 10 : totalCards - Math.abs(offset)
      } else {
        const offset = index - middleIndex
        rotation = offset * 12
        translateX = offset * 40
        translateY = Math.abs(offset) * 5
        zIndex = totalCards - Math.abs(offset)
      }

      return (
        <motion.div
          key={product._id}
          className="absolute cursor-pointer group"
          style={{ width: cardWidth }}
          initial={false}
          animate={{
            x: translateX,
            y: translateY,
            rotate: rotation,
            scale: isThisInteracted ? 1.08 : 1,
            zIndex: zIndex
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
          onHoverStart={() => !isTouchDevice && setHoveredIndex(index)}
          onHoverEnd={() => !isTouchDevice && setHoveredIndex(null)}
          onTap={() => {
            if (isTouchDevice) {
              setTappedIndex(tappedIndex === index ? null : index)
            }
          }}
        >
          <div className="bg-[#fff] rounded-top-3xl border-[6px] border-white shadow-2xl overflow-hidden p-3">
            <div className="relative aspect-square bg-[#f0f2f5] overflow-hidden p-2">
              <Image
                src={imageBuilder(product?.previewImages[0]?.image).url()! || ""}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="p-6 bg-[#fff]">
            <h3 className="font-semibold text-xl mb-3 text-gray-7 tracking-tight group-hover:text-primary transition-colors truncate"> {product.name}</h3>
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="flex gap-2"
              >
                <span className="line-through text-dark-4">€{product.price}</span>
                <span className="text-primary text-2xl font-bold">€{product.discountedPrice}</span>
              </motion.div>
              <Link href={`/products/${product?.slug?.current!}`} >
                <motion.button
                  className="w-11 h-11 rounded-full bg-[#f0f2f5] text-[#040609] flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Ver Producto"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>

        </motion.div>
      )
    })
  }

  return (
    <motion.div
      ref={bestSelletSectionRef}
      className="relative w-full min-h-[500px] flex items-center justify-center py-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* XL screens - 6 cards */}
      <div className="hidden xl:flex relative w-full max-w-7xl h-[450px] items-center justify-center">
        {renderStackedCards(getProductsForScreen("xl"), 340, 280, false)}
      </div>

      {/* LG screens - 5 cards */}
      <div className="hidden lg:flex xl:hidden relative w-full max-w-6xl h-[450px] items-center justify-center">
        {renderStackedCards(getProductsForScreen("lg"), 320, 260, true)}
      </div>

      {/* Tablet - 4 cards with tap interaction */}
      <div className="hidden md:flex lg:hidden relative w-full max-w-4xl h-[450px] items-center justify-center">
        {renderStackedCards(getProductsForScreen("tablet"), 280, 300, true)}
      </div>

      {/* Mobile - 4 cards in 2x2 grid */}
      <div className="md:hidden w-full max-w-md">
        <div className="grid grid-cols-2 gap-4">
          {getProductsForScreen("mobile").map((product) => (
            <motion.div
              key={product._id}
              className="w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card rounded-2xl border-4 border-white shadow-lg overflow-hidden">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={imageBuilder(product?.previewImages[0]?.image).url() || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    fill
                  />

                  <button
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-muted/70 backdrop-blur-sm flex items-center justify-center active:scale-95 transition-transform"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-4 h-4 text-foreground" />
                  </button>
                </div>

                <div className="p-3 bg-card">
                  <h3 className="font-semibold text-sm mb-2 text-card-foreground tracking-tight line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-accent">€{product.price}</span>
                    <button
                      className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center active:scale-95 transition-transform"
                      aria-label="View product"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}