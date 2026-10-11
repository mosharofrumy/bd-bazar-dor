
import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceTicker from "@/components/PriceTicker";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  variable: "--font-noto-sans-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "আজকের বাজার-দর",
  description: "নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর এক নজরে দেখুন।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn"
      data-theme="light"
      data-scroll-behavior="smooth"
      >
      <body
        className={`${notoSansBengali.className} flex min-h-screen flex-col bg-slate-100 antialiased`}
      >
        <Navbar/>
        <PriceTicker/>

        <main className="w-full flex-1">{children}</main>

        <Footer/>
      </body>
    </html>
  );
}
