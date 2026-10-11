
"use client";

import Marquee from "react-fast-marquee";
import type { Product } from "@/types/product";

type Props = {
  products: Product[];
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
  }).format(price);

const formatUnit = (unit: string) => {
  const units: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    liter: "লিটার",
    dozen: "ডজন",
    piece: "টি",
  };

  return units[unit.toLowerCase()] ?? unit;
};

export default function PriceTickerMarquee({
  products,
}: Props) {
  if (products.length === 0) return null;

  return (
    <section
      aria-label="পণ্যের চলমান মূল্য তালিকা"
      className="w-full overflow-hidden border-b border-green-200 bg-green-50"
    >
      <Marquee
        speed={100}
        pauseOnHover
        gradient
        gradientColor="#f0fdf4"
        gradientWidth={30}
        autoFill
      >
        {products.map((product) => {
          const isUp = product.change.dir === "up";

          return (
            <div
              key={product.id}
              className="mx-5 flex shrink-0 items-center gap-2 py-3 text-sm sm:mx-7"
            >
              <span className="font-semibold text-gray-800">
                {product.categoryIcon} {product.nameBn}
              </span>

              <span className="font-bold text-green-800">
                ৳{formatPrice(product.today)}
                <span className="ml-1 text-xs font-normal text-gray-500">
                  /{formatUnit(product.unit)}
                </span>
              </span>

              <span
                className={`font-bold ${
                  isUp ? "text-red-600" : "text-green-700"
                }`}
              >
                {isUp ? "▲" : "▼"}
                {formatPrice(Math.abs(product.change.pct))}%
              </span>

              <span className="text-green-300" aria-hidden="true">
                ◆
              </span>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}
