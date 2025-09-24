import { CallIcon, EmailIcon, MapIcon } from "@/assets/icons";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/assets/icons/social";
import Link from "next/link";
import AccountLinks from "./AccountLinks";
import FooterBottom from "./FooterBottom";
import QuickLinks from "./QuickLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="overflow-hidden relative ">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/footer/footer-image.webp"
          alt="Gaming setup background"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Dark overlay for better content readability */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(33,1,31,0.9)_19.5%,rgba(54,2,50,0.85)_60.5%,rgba(84,4,79,0.8)_100%)]"></div>
      </div>
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 xl:px-0 ">
        {/* <!-- footer menu start --> */}
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          <div className="max-w-[330px] w-full">
            <h2 className="mb-7.5 text-custom-1 font-medium text-white">
              Soporte y Ayuda
            </h2>

            <ul className="flex flex-col gap-3">
              <li className="flex gap-4.5 text-white">
                <span className="shrink-0 ">
                  <MapIcon className="w-6 h-6 text-white" />
                </span>
                685 Market Street,Las Vegas, LA 95820,United States.
              </li>

              <li>
                <Link
                  href="tel:+099 532-786-9843"
                  className="flex items-center gap-4.5 text-white"
                >
                  <CallIcon className="w-6 h-6 text-white" />
                  (+099) 532-786-9843
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:support@example.com"
                  className="flex items-center gap-4.5 text-white"
                >
                  <EmailIcon className="w-6 h-6 text-white" />
                  support@example.com
                </Link>
              </li>
            </ul>

            {/* <!-- Social Links start --> */}
            <div className="flex items-center gap-4 mt-7.5">
              <Link
                href="#"
                className="flex duration-200 ease-out text-white hover:text-purple-light-2"
              >
                <span className="sr-only">Facebook link</span>
                <FacebookIcon />
              </Link>

              <Link
                href="#"
                className="flex duration-200 ease-out text-white hover:text-purple-light-2"
              >
                <span className="sr-only">Twitter link</span>
                <TwitterIcon />
              </Link>

              <Link
                href="#"
                className="flex duration-200 ease-out text-white hover:text-purple-light-2"
              >
                <span className="sr-only">Instagram link</span>
                <InstagramIcon />
              </Link>

            </div>
            {/* <!-- Social Links end --> */}
          </div>

          <AccountLinks />

          <QuickLinks />
        </div>
        {/* <!-- footer menu end --> */}
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
