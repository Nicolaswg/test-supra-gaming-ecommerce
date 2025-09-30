import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

const OrderSummary = () => {
  const {
    cartCount,
    cartDetails,
    totalPrice = 0
  } = useShoppingCart();

  return (
    <div className="lg:max-w-2/5 w-full">
      {/* <!-- order list box --> */}
      <div className="bg-white shadow-1 rounded-[10px]">
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl text-dark">Resume de compra</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* <!-- title --> */}
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <div>
              <h4 className="font-medium text-dark">Productos</h4>
            </div>
            <div>
              <h4 className="font-medium text-dark text-right">Subtotal</h4>
            </div>
          </div>

          {/* <!-- product item --> */}
          {cartCount && (
            <>
              {Object.values(cartDetails ?? {}).map((product, key) => (
                <div
                  key={key}
                  className="flex items-center justify-between py-5 border-b border-gray-3"
                >
                  <div>
                    <p className="text-dark">{product.name}</p>
                  </div>
                  <div>
                    <p className="text-dark text-right">
                      ${((product.price / 100) * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* <!-- total --> */}
          <div className="flex items-center justify-between pt-5">
            <div>
              <p className="font-medium text-lg text-dark">Total</p>
            </div>
            <div>
              <p className="font-medium text-lg text-dark text-right">
                ${totalPrice && (totalPrice / 100).toFixed(2)}
              </p>
            </div>
          </div>

          {/* <!-- checkout button --> */}
          <Link
            href="/checkout"
            className="w-full flex justify-center font-medium text-white bg-primary py-3 px-6 rounded-full ease-out duration-200 hover:bg-primary-dark mt-7.5"
          >
            Procesar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
