import React from "react";
import Image from "next/image";
import { Rocket, RefreshCcw, ShieldCheck, MessageCircleCode } from "lucide-react";

const featureData = [
  {
    img: <Rocket className="text-white w-[40px] h-[40px]" />,
    title: "Envio Gratis",
    description: "Pedidos superiores a €200",
  },
  {
    img: <RefreshCcw className="text-white w-[40px] h-[40px]" />,
    title: "Devoluciones 1 & 1 ",
    description: "Cancelaciones después de 1 dia",
  },
  {
    img: <ShieldCheck className="text-white w-[40px] h-[40px]" />,
    title: "Pagos 100% Seguros",
    description: "Garantizado de pago seguro",
  },
  {
    img: <MessageCircleCode className="text-white w-[40px] h-[40px]" />,
    title: "Soporte 24/7",
    description: "En cualquier momento y lugar",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <div className="text-white">
              {item.img}
            </div>

            <div>
              <h3 className="font-medium text-lg text-white">{item.title}</h3>
              <p className="text-sm text-gray-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
