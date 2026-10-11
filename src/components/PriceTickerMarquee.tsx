"use client";

import Marquee from "react-fast-marquee";
import type { Product } from "@/types/product";
import ProductIcon from "./ProductIcon";

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
    piece: "পিস",
  };

  return units[unit.toLowerCase()] ?? unit;
};

export default function PriceTickerMarquee({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <section
      aria-label="পণ্যের চলমান মূল্য তালিকা"
      className="w-full overflow-hidden border-b border-green-200 bg-white"
    >
      <Marquee
        speed={150}
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
              className="mx-5 flex shrink-0 border-l border-gray-300/50 pl-2 items-center gap-1 py-1.5 text-sm sm:mx-7"
            >
              <div className="flex items-center gap-2">
                <ProductIcon
                  image={product.image}
                  name={product.nameBn}
                  className="size-8! rounded-lg! text-xl!"
                />

                <span className="font-semibold text-gray-800">
                  {product.nameBn}
                </span>
              </div>

              <span className="font-bold text-gray-800">
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

              <span className=" text-base-300" aria-hidden="true">
                |
              </span>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}
