"use client";
import { imageBuilder } from "@/sanity/sanity-shop-utils";
import Image from "next/image";
import Link from "next/link";
import { Star, TrendingUp, ArrowUpRight, Zap, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
export default function HeroBannerItem({
  bannerItem,
  className,
  index
}: {
  bannerItem: any;
  className?: string;
  index: number;
}) {

  return (
    <div
      className={`space-y-6 mb-2 ${className}`}
    >
      <motion.div
        className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-2xl max-w-sm ${index === 0 ? "ml-auto" : ""}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
      >
        <Link className="inline" href={`/products/${bannerItem?.product?.slug?.current}`}>
          <div className="mb-4 relative h-32 w-full">
            <Image src={
              imageBuilder(bannerItem?.image).url()! || ""
            }
              alt={bannerItem?.name}
              className="object-contain rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-3 h-3 ${index === 0 ? "bg-green-light" : "bg-blue-light"} rounded-full animate-pulse`} />
            <span className="text-sm font-medium text-white">{bannerItem?.name}</span>
          </div>
          <h3 className="text-lg font-medium text-white mb-2 line-clamp-2">{bannerItem?.product?.name}</h3>
          <p className="text-sm text-white/80 mb-4">{bannerItem?.product?.shortDescription}</p>
          <div className="flex items-center justify-between">
            <div className="flex text-yellow">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white/60 text-sm line-through">${bannerItem?.product?.price}</span>
              <span className="text-white font-semibold">${bannerItem?.product.discountedPrice}</span>
            </div>
          </div>
        </Link>
      </motion.div>

    </div>
  );
}