"use client";

import ProductItem from "@/components/Common/ProductItem";
import { Product } from "@/types/product";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NewArrivalTitle from "./NewArrivalTitle";

export const NewArrivalContent = ({ products }: { products: Product[] }) => {
  const arrivalContentRef = useRef(null);
  const isInView = useInView(arrivalContentRef, { once: true, margin: "-50px" });

  return (
    <>
      <NewArrivalTitle isInView={isInView} />
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        ref={arrivalContentRef}
      >
        {products.map((item, key) => (
          <ProductItem item={item} key={key} isInView={isInView} index={key} />
        ))}
      </motion.div>
    </>);
};
