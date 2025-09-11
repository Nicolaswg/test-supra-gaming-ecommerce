"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "../Header/icons";
import { translateColor } from "@/utils/colorTranslator";

type PropsType = {
  availableColors: string[];
};

export default function ColorsDropdown({ availableColors }: PropsType) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams() || new URLSearchParams();
  const pathname = usePathname();

  const handleColors = (color: string, isSelected: boolean) => {
    const KEY = "colors";

    const params = new URLSearchParams(searchParams);
    const colorsParam = params.get(KEY);

    if (isSelected) {
      params.set(KEY, colorsParam ? `${colorsParam},${color}` : color);
    } else {
      const newParam = colorsParam?.split(",").filter((id) => id !== color);

      if (newParam?.length) {
        params.set(KEY, newParam.join(","));
      } else {
        params.delete(KEY);
      }
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="bg-white rounded-lg shadow-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 w-full ${isOpen && "shadow-filter"
          }`}
      >
        <span className="text-dark">Colores</span>

        <ChevronDown
          className={`text-dark ease-out duration-200 ${isOpen && "rotate-180"
            }`}
        />
      </button>

      <div className="flex flex-wrap gap-2.5 p-6" hidden={!isOpen}>
        {availableColors.map((color) => {
          const isSelected = searchParams
            .get("colors")
            ?.split(",")
            .includes(color);

          return (
            <label
              key={color}
              htmlFor={color}
              title={color}
              className="cursor-pointer group"
            >
              <input
                type="checkbox"
                id={color}
                className="sr-only peer"
                defaultChecked={isSelected}
                onChange={(e) => handleColors(color, e.target.checked)}
              />

              <span className="flex justify-center items-center size-5.5 rounded-full transition-all duration-200 ">
                <span
                  className={`size-4 rounded-full flex items-center justify-center relative transition-all duration-200 ${translateColor(color) === "white" ? "border border-x-meta-4" : ""
                    }`}
                  style={{ backgroundColor: translateColor(color) }}
                >
                  {isSelected && (
                    <svg
                      className="w-2.5 h-2.5 transition-all duration-200 drop-shadow-sm"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M8.33317 2.5L3.74984 7.08333L1.66650 5"
                        stroke={translateColor(color) === "white" ? "black" : "white"}
                        strokeWidth="1.94437"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
