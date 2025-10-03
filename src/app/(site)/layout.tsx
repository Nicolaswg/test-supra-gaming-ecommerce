import PreLoader from "@/components/Common/PreLoader";
import ScrollToTop from "@/components/Common/ScrollToTop";
import CacheRefreshButton from "@/components/Common/CacheRefreshButton";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Providers from "./Providers";
import { fontAkegin } from "@/assets/fonts";
import { Poppins } from "next/font/google"
import cn from "@/utils/cn";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(poppins.className, fontAkegin.variable)} suppressHydrationWarning>
      <body className="bg-[#fff]">
        <PreLoader />

        <Providers>
          <NextTopLoader
            color="#3C50E0"
            crawlSpeed={300}
            showSpinner={false}
            shadow="none"
          />

          <Header />

          <Toaster position="top-center" reverseOrder={false} />

          {children}
        </Providers>

        <ScrollToTop />
        <CacheRefreshButton />
        <Footer />
      </body>
    </html>
  );
}
