import { bestSellerQuery } from "@/sanity/queries/shop-queries";
import { sanityFetch } from "@/sanity/sanity-utils";
import { Product } from "@/types/product";
import { unstable_cache as cache } from "next/cache";
import Link from "next/link";
import BestSellerSectionTitle from "./BestSellerSectionTitle";
import { BestSellerContent } from "./BestSellerContent";

const getBestSeller = cache(
  async () => {
    return sanityFetch<Product[]>({
      query: bestSellerQuery + "[0...6]",
      qParams: {},
      tags: ["product"],
    });
  },
  ["best-seller"],
  {
    tags: ["product"],
  }
);

const BestSeller = async () => {
  const products = await getBestSeller();
  return (
    <section className="min-h-screen overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-0 ">
        <BestSellerSectionTitle />

        <BestSellerContent product={products} />

        <div className="text-center mt-12.5">
          <Link
            href="/shop-without-sidebar"
            className="inline-flex font-medium text-sm py-3 px-8 rounded-full border border-gray-3 bg-white text-gray-7 transition-all duration-400 hover:bg-gradient-to-r hover:from-primary hover:to-[#360232] hover:text-white  hover:shadow-lg hover:scale-105"
          >
            Ver Todo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
