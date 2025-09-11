import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import CheckoutSuccess from "./CheckoutSuccess";

const Success = async () => {
  return (
    <main>
      <Breadcrumb title={"Confirmacion de compra"} pages={["order", "/", "success"]} />
      <CheckoutSuccess />
    </main>
  );
};

export default Success;
