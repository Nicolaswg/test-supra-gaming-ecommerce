import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
export const metadata: Metadata = {
  title: "Checkout Page | Supra Gaming | Online Shop",
  description: "This is Checkout Page for Supra Gaming Template",
  // other metadata
};

const CheckoutPage = () => {
  return (
    <main>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
