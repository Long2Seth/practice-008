import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavbarComponent from "@/component/NavbarComponent";
import { Suspense } from "react";
import Loading from './loading';
import { localCustomFont, suwannaphum } from "./fonts";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISTAD Ecommerce Web",
  description: "ISTAD Ecommerce Web is a web application for selling products",
  openGraph: {
    title: "ISTAD Ecommerce Web",
    description: "ISTAD Ecommerce Web is a web application for selling products",
    images: 'https://www.investopedia.com/thmb/0qyIIbRIyurxi2hM…p_icc()/Next-34195cff976d449e81e137dfa8ba25b1.jpg'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={` ${suwannaphum.variable} ${localCustomFont.variable}`}>
        <header className=" sticky top-0  ">
          <NavbarComponent />
        </header>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );



}
