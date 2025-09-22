import Link from "next/link";

export default function WishListEmpty() {
  return (
    <div className="py-20">
      <div className="flex items-center justify-center mb-5">
        <svg
          className="w-20 h-20 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(0 0 0)"
        >
          <path
            d="M2 6C2 4.75736 3.00736 3.75 4.25 3.75H8.5C9.2082 3.75 9.87508 4.08344 10.3 4.65L11.65 6.45C11.7916 6.63885 12.0139 6.75 12.25 6.75H19.75C20.9926 6.75 22 7.75736 22 9V12.338C21.5725 11.8027 21.0667 11.3327 20.5 10.9453V9C20.5 8.58579 20.1642 8.25 19.75 8.25H12.25C11.5418 8.25 10.8749 7.91656 10.45 7.35L9.1 5.55C8.95836 5.36115 8.73607 5.25 8.5 5.25H4.25C3.83579 5.25 3.5 5.58579 3.5 6V18C3.5 18.4142 3.83579 18.75 4.25 18.75H10.0847C10.2572 19.2813 10.4926 19.7842 10.7822 20.25H4.25C3.00736 20.25 2 19.2426 2 18V6Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.4849 13.7069C15.3314 12.5534 13.4612 12.5534 12.3077 13.7069C11.1543 14.8604 11.1543 16.7305 12.3077 17.884L15.3854 20.9617C16.0685 21.6448 17.1758 21.6452 17.8594 20.9626L20.9419 17.8844C22.0954 16.7309 22.0957 14.8604 20.9423 13.7069C19.7888 12.5535 17.9186 12.5535 16.7652 13.7069L16.625 13.8471L16.4849 13.7069ZM13.3684 14.7676C13.9361 14.1999 14.8565 14.1999 15.4242 14.7676L16.0947 15.4381C16.2353 15.5787 16.4261 15.6577 16.625 15.6577C16.8239 15.6577 17.0147 15.5787 17.1553 15.4381L17.8258 14.7676C18.3935 14.1999 19.3139 14.1999 19.8816 14.7676C20.4492 15.3352 20.4493 16.2555 19.8818 16.8232L16.7995 19.9012C16.7018 19.9987 16.5436 19.9986 16.4461 19.901L13.3684 16.8234C12.8007 16.2557 12.8007 15.3353 13.3684 14.7676Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <h2 className="pb-5 text-2xl font-medium text-center text-dark">
        Your wishlist is empty!
      </h2>
      <Link
        href="/shop-with-sidebar"
        className="w-96 mx-auto flex justify-center font-medium text-white bg-primary py-[13px] px-6 rounded-full ease-out duration-200 hover:bg-primary-dark"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
