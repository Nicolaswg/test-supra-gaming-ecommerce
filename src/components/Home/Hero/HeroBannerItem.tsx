"use client";
import { imageBuilder } from "@/sanity/sanity-shop-utils";
import Image from "next/image";
import Link from "next/link";
import { Star, TrendingUp, ArrowUpRight, Zap, ShoppingBag } from "lucide-react";

export default function HeroBannerItem({
  bannerItem,
  className,
}: {
  bannerItem: any;
  className?: string;
}) {
  const hasDiscount = bannerItem?.product?.price > bannerItem?.product?.discountedPrice;
  const discountPercentage = hasDiscount
    ? Math.round(((bannerItem?.product?.price - bannerItem?.product?.discountedPrice) / bannerItem?.product?.price) * 100)
    : 0;

  return (
    <div
      className={`group relative overflow-hidden bg-gradient-to-br rounded-lg from-primary/8 via-card to-accent/8 border border-transparent hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 hover:scale-[1.01] cursor-pointer ${className}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, #54044F 0%, #360232E6 50%, #21011F 100%)",
        }}
      />

      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 pr-3">
            <h2 className="text-base font-bold text-card-foreground leading-tight text-balance group-hover:text-white transition-colors duration-400 mb-1 relative z-10">
              <Link
                href={`/products/${bannerItem?.product?.slug.current}`}
                className="hover:underline decoration-2 underline-offset-4 decoration-primary/40"
              >
                {bannerItem.name}
              </Link>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-[#54044F]/15 text-[#54044F] border border-[#54044F]/20 rounded-full text-xs font-medium backdrop-blur-sm cursor-default group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
              <TrendingUp className="w-3 h-3" />
              Tendencia
            </div>
            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-45 cursor-pointer">
              <ArrowUpRight className="w-4 h-4 text-primary group-hover:scale-110 group-hover:text-white transition-all duration-300" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center mb-4 relative min-h-[180px]">
          <div className="relative w-40 h-40 group-hover:scale-110 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-[#54044F]/20 to-[#21011F]/20 rounded-3xl blur-2xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#360232]/10 to-[#54044F]/10 rounded-2xl blur-xl scale-110 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/50 to-muted/30 backdrop-blur-sm border border-border/20 group-hover:border-white/20 transition-colors duration-300">
              <Image
                src={
                  imageBuilder(bannerItem?.image).url()! ||
                  "/placeholder.svg"
                }
                alt={bannerItem.name || "Product image"}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                sizes="160px"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {hasDiscount && (
                <span className="text-sm font-medium text-muted-foreground line-through opacity-75 group-hover:text-white/60 transition-colors duration-300">
                  €{bannerItem?.product?.price}
                </span>
              )}
              <span className="text-xl font-bold text-card-foreground group-hover:text-white group-hover:drop-shadow-sm transition-all duration-300">
                €{bannerItem?.product?.discountedPrice}
              </span>
            </div>
            {hasDiscount && (
              <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[#54044F]/20 to-[#360232]/10 text-[#54044F] border border-[#54044F]/30 rounded-full text-xs font-bold shadow-sm group-hover:bg-gradient-to-r group-hover:from-white/20 group-hover:to-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                <Zap className="w-3 h-3" />-{discountPercentage}% OFF
              </div>
            )}
          </div>

          <Link
            href={`/products/${bannerItem?.product?.slug.current}`}
            className="group/btn relative inline-flex items-center justify-center gap-2 w-full bg-[#54044F] hover:bg-gradient-to-r hover:from-[#54044F] hover:to-[#360232] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#54044F]/40 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            <ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 group-hover/btn:rotate-6 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Añadir al carrito</span>
          </Link>

        </div>
      </div>
    </div>
  );
}