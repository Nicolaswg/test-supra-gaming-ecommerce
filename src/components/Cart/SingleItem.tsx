import { MinusIcon, PlusIcon, TrashIcon } from "@/assets/icons";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

const SingleItem = ({ item }: any) => {
  const { incrementItem, decrementItem, removeItem } = useShoppingCart();

  const handleRemoveFromCart = () => {
    removeItem(item.id);
  };

  const handleIncreaseQuantity = () => {
    incrementItem(item.id);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      decrementItem(item.id);
    }
  };

  return (
    <tr className="border-t border-gray-3 hover:bg-gray-1/50 transition-colors duration-200">
      <td className="py-5 px-7.5">
        <div className="flex items-center gap-5.5">
          <div className="flex items-center justify-center rounded-lg bg-gray-2 max-w-[80px] w-full h-17.5 flex-shrink-0">
            <Image
              width={200}
              height={200}
              src={item.image}
              alt={item.name}
              className="object-contain max-w-full max-h-full"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="duration-200 ease-out text-dark hover:text-blue font-medium">
              <Link href={`/products/${item.slug}`} className="hover:underline">
                {item.name}
              </Link>
            </h3>
          </div>
        </div>
      </td>

      <td className="py-5 px-4">
        <p className="text-dark font-medium">{item.formattedPrice}</p>
      </td>

      <td className="py-5 px-4">
        <div className="flex items-center border rounded-full w-max border-gray-3">
          <button
            onClick={() => handleDecreaseQuantity()}
            aria-label="Decrease quantity"
            className={cn(
              "flex items-center justify-center w-11.5 h-11.5 ease-out duration-200 hover:text-blue",
              {
                "opacity-50 pointer-events-none": item.quantity === 1,
              }
            )}
            disabled={item.quantity === 1}
          >
            <MinusIcon />
          </button>

          <span className="flex items-center justify-center w-16 h-11.5 border-x border-gray-4 font-medium">
            {item.quantity}
          </span>

          <button
            onClick={() => handleIncreaseQuantity()}
            aria-label="Increase quantity"
            className="flex items-center justify-center w-11.5 h-11.5 ease-out duration-200 hover:text-blue"
          >
            <PlusIcon />
          </button>
        </div>
      </td>

      <td className="py-5 px-4">
        <p className="text-dark font-semibold">
          ${(item.price / 100) * item.quantity}
        </p>
      </td>

      <td className="py-5 px-7.5">
        <div className="flex justify-end">
          <button
            onClick={() => handleRemoveFromCart()}
            aria-label="Remove product from cart"
            className="flex items-center justify-center rounded-full w-9.5 h-9.5 bg-gray-2 border border-gray-3 text-dark ease-out duration-200 hover:bg-red-light-6 hover:border-red-light-4 hover:text-red"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SingleItem;
