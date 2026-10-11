import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";


const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "আজকের বাজার-দর | Bazar Dor",
  description:
    "নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর, গতকালের দাম ও মূল্য পরিবর্তন এক নজরে দেখুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" data-theme="light">
      <body
        className={`${notoSansBengali.className} min-h-screen flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}