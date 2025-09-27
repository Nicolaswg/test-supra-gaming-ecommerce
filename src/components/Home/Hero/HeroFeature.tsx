"use client"

import { motion } from "framer-motion"
import { Rocket, RefreshCcw, ShieldCheck, MessageCircleCode } from "lucide-react";

const featureData = [
  {
    img: <Rocket className="text-white w-[20px] h-[20px]" />,
    title: "Envio Gratis",
    description: "Pedidos superiores a €200",
  },
  {
    img: <RefreshCcw className='text-white w-[20px] h-[20px]' />,
    title: "Devoluciones 1 & 1 ",
    description: "Cancelaciones después de 1 dia",
  },
  {
    img: <ShieldCheck className="text-white w-[20px] h-[20px]" />,
    title: "Pagos 100% Seguros",
    description: "Garantizado de pago seguro",
  },
  {
    img: <MessageCircleCode className="text-white w-[20px] h-[20px]" />,
    title: "Soporte 24/7",
    description: "En cualquier momento y lugar",
  },
];

const HeroFeature = () => {
  return (
    <motion.div
      className="flex items-center space-x-8 pt-8 border-t border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <div className="grid grid-cols-2 gap-3.5 xl:gap-7.5 mt-5">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <div className="text-white">
              {item.img}
            </div>

            <div>
              <h3 className="font-medium text-2xl text-white">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroFeature;
