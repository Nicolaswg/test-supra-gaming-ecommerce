"use client";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { EyeIcon, HeartIcon, HeartSolid } from "@/assets/icons";
import { updateproductDetails } from "@/redux/features/product-details";
import { updateQuickView } from "@/redux/features/quickView-slice";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "@/redux/features/wishlist-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { imageBuilder } from "@/sanity/sanity-shop-utils";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useShoppingCart } from "use-shopping-cart";
import { useAutoOpenCart } from "../Providers/AutoOpenCartProvider";
import CheckoutBtn from "../Shop/CheckoutBtn";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion"

// add updated the type here
const ProductItem = ({ item, isInView, index }: { item: Product, isInView: boolean, index: number }) => {

  const productItemRef = useRef(null);
  const productItemInView = useInView(productItemRef, { once: true, margin: "-50px" });

  const { openModal } = useModalContext();

  // const [product, setProduct] = useState({});
  const dispatch = useDispatch<AppDispatch>();

  const { cartDetails } = useShoppingCart();
  const { addItemWithAutoOpen } = useAutoOpenCart();
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  const pathUrl = usePathname() || "";

  const isAlradyAdded = Object.values(cartDetails ?? {}).some(
    (cartItem) => cartItem.id?.toString() === item._id?.toString()
  );

  const isAlradyWishListed = Object.values(wishlistItems ?? {}).some(
    (wishlistItem) => wishlistItem._id?.toString() === item._id?.toString()
  );

  const cartItem = {
    id: item._id,
    name: item.name,
    price: item.discountedPrice * 100,
    currency: "eur",
    image: item?.thumbnails
      ? imageBuilder(item?.thumbnails[0]?.image).url()
      : "",
    price_id: null,
    slug: item?.slug?.current,
  };

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  // add to cart
  const handleAddToCart = () => {
    // @ts-ignore
    addItemWithAutoOpen(cartItem);

    toast.success("Product added to cart!");
  };

  const handleToggleWishList = () => {
    if (isAlradyWishListed) {
      dispatch(removeItemFromWishlist(item._id));
      toast.success("Product removed from wishlist!");
    } else {
      dispatch(
        addItemToWishlist({
          ...item,
          quantity: 1,
        })
      );
      toast.success("Product added to wishlist!");
    }
  };

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={productItemRef}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView && productItemInView ? 1 : 0,
        y: isInView && productItemInView ? 0 : 50
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-1">
        <motion.div
          whileHover={{
            scale: 1.05
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="w-full h-full"
        >
          <Link
            href={`${pathUrl.includes("products")
              ? `${item?.slug?.current}`
              : `products/${item?.slug?.current}`
              }`}
          >
            <Image
              src={
                item?.previewImages
                  ? imageBuilder(item?.previewImages[0]?.image).url()!
                  : ""
              }
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </motion.div>

        <div
          className="absolute inset-0 left-0 bottom-0 bg-gradient-to-t from-stone/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-300 group-hover:translate-y-0">
          <button
            onClick={() => {
              openModal();
              handleQuickViewUpdate();
            }}
            aria-label="button for quick view"
            className="flex items-center justify-center w-9 h-9 rounded-full shadow-1 ease-out duration-200 text-dark bg-white hover:text-primary"
          >
            <EyeIcon className="w-5 h-5" />
          </button>

          {isAlradyAdded ? (
            <CheckoutBtn />
          ) : (
            <button
              onClick={() => handleAddToCart()}
              className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-full bg-primary text-white ease-out duration-200 hover:bg-primary-dark"
            >
              añadir al carrito
            </button>
          )}

          <button
            onClick={handleToggleWishList}
            aria-label="button for favorite select"
            className={`flex items-center justify-center w-9 h-9 rounded-full shadow-1 ease-out duration-200 text-dark bg-white hover:text-primary`}
          >
            {mounted ? (
              isAlradyWishListed ? (
                <HeartSolid className="w-5 h-5" />
              ) : (
                <HeartIcon className="w-5 h-5" />
              )
            ) : null}
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">

        <motion.h3
          className="font-bold text-gray-7 group-hover:text-primary transition-colors duration-300 mb-1.5 line-clamp-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView && productItemInView ? 1 : 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          onClick={() => handleProductDetails()}
        >
          <Link
            href={`${pathUrl.includes("products")
              ? `${item?.slug?.current}`
              : `products/${item?.slug?.current}`
              }`}
          >
            {" "}
            {item.name}{" "}
          </Link>
        </motion.h3>

        <motion.p
          className="text-sm text-gray-5 line-clamp-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView && productItemInView ? 1 : 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {item.shortDescription}
        </motion.p>

        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView && productItemInView ? 1 : 0, x: isInView && productItemInView ? 0 : -20 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="flex gap-2"
          >
            <span className="line-through text-dark-4">€{item.price}</span>
            <span className="text-primary text-2xl font-bold">€{item.discountedPrice}</span>
          </motion.div>
        </div>
        <span className="flex items-center gap-2 text-lg font-medium">
        </span>
      </div>
    </motion.div>
  );
};

export default ProductItem;
