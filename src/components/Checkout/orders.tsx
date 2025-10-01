import { useShoppingCart } from "use-shopping-cart";
import { useCheckoutForm } from "./form";
import { formatPrice } from "@/utils/formatePrice";

export default function Orders() {
  const { watch } = useCheckoutForm();
  const { cartCount, cartDetails, totalPrice = 0 } = useShoppingCart();

  const shippingFee = watch("shippingMethod");
  const couponDiscount = ((watch("couponDiscount") || 0) * totalPrice) / 100;

  return (
    <div className="bg-white shadow-1 rounded-[10px] max-lg:mt-7.5">
      <h3 className="font-medium text-xl text-dark border-b border-gray-3 py-5 px-4 sm:px-8.5">
        Tu Orden
      </h3>

      <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
        <table className="w-full text-dark">
          <thead>
            <tr className="border-b border-gray-3">
              <th className="py-5 text-base font-medium text-left">Producto</th>
              <th className="py-5 text-base font-medium text-right">
                SubTotal
              </th>
            </tr>
          </thead>

          <tbody>
            {cartCount && cartCount > 0 ? (
              Object.values(cartDetails ?? {}).map((product, key) => (
                <tr key={key} className="border-b border-gray-3">
                  <td className="py-5 overflow-hidden"><span className="truncate block max-w-[400px]">{product.name}</span></td>
                  <td className="py-5 text-right">
                    {formatPrice(product.price / 100)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-5 text-center" colSpan={2}>
                  No hay productos
                </td>
              </tr>
            )}

            <tr className="border-b border-gray-3">
              <td className="py-5">Coste de envío</td>
              <td className="py-5 text-right">
                {formatPrice(shippingFee?.price || 0)}
              </td>
            </tr>

            {!!couponDiscount && (
              <tr className="border-b border-gray-3">
                <td className="py-5">
                  Coupon de descuento ({watch("couponDiscount")}%)
                </td>
                <td className="py-5 text-right">
                  - {formatPrice(couponDiscount)}
                </td>
              </tr>
            )}
          </tbody>

          <tfoot>
            <tr>
              <td className="pt-5 text-base font-medium">Total</td>

              <td className="pt-5 text-base font-medium text-right">
                {formatPrice(((totalPrice - couponDiscount) / 100) + shippingFee.price)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
