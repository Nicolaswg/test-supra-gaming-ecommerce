import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Envio Gratis",
    description: "Pedidos superiores a €200",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Devoluciones 1 & 1 ",
    description: "Cancelaciones después de 1 dia",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Pagos 100% Seguros",
    description: "Garantizado de pago seguro",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "Soporte 24/7",
    description: "En cualquier momento y lugar",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt="icons" width={40} height={41} />

            <div>
              <h3 className="font-medium text-lg text-dark">{item.title}</h3>
              <p className="text-sm text-gray-6">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
