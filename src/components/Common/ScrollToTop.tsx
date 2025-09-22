"use client";
import { ChevronUpIcon } from "@/assets/icons";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`items-center justify-center w-10 h-10 rounded-full shadow-lg bg-primary ease-out duration-200 hover:bg-primary-dark fixed bottom-15 left-1/2 -translate-x-1/2 z-999 ${isVisible ? "flex" : "hidden"
            }`}
        >
          <ChevronUpIcon className="fill-white size-4" />
        </button>
      )}
    </>
  );
}
