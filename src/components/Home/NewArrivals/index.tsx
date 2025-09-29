import ProductItem from "@/components/Common/ProductItem";
import { getProductsByFilter } from "@/sanity/sanity-shop-utils";
import NewArrivalTitle from "./NewArrivalTitle";
import { NewArrivalContent } from "./NewArrivalContent";

const NewArrival = async () => {
  const products = await getProductsByFilter(
    `*[_type == "product"] | order(_createdAt desc)[0...3]`,
    ["product"]
  );

  return (
    <section className="overflow-hidden py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 xl:px-0 ">
        <NewArrivalContent products={products} />
      </div>
    </section>
  );
};

export default NewArrival;
