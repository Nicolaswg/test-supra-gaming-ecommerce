import { Order } from "@/types/order";
import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    axios
      .get('/api/order')
      .then(({ data }) => setOrders(data.orders))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[770px]">
          {/* <!-- order item --> */}
          {orders.length > 0 && (
            <div className="items-center justify-between py-4.5 px-7.5 hidden md:flex ">
              <div className="min-w-[111px]">
                <p className="text-custom-sm text-dark">Orden</p>
              </div>
              <div className="min-w-[175px]">
                <p className="text-custom-sm text-dark">Fecha</p>
              </div>

              <div className="min-w-[128px]">
                <p className="text-custom-sm text-dark">Estado</p>
              </div>

              <div className="min-w-[213px]">
                <p className="text-custom-sm text-dark">Título</p>
              </div>

              <div className="min-w-[113px]">
                <p className="text-custom-sm text-dark">Total</p>
              </div>

              <div className="min-w-[113px]">
                <p className="text-custom-sm text-dark">Acción</p>
              </div>
            </div>
          )}
          {orders.length > 0 ? (
            orders.map((orderItem, key) => (
              <SingleOrder key={key} orderItem={orderItem} smallView={false} />
            ))
          ) : (
            <p className="py-9.5 px-4 sm:px-7.5 xl:px-10">
              No tienes ningún pedido
            </p>
          )}
        </div>

        {orders.length > 0 &&
          orders.map((orderItem, key) => (
            <SingleOrder key={key} orderItem={orderItem} smallView={true} />
          ))}
      </div>
    </>
  );
};

export default Orders;
