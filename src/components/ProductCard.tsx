
import Link from "next/link";
import type { Product } from "@/types/product";
import ProductIcon from "./ProductIcon";

type ProductCardProps = {
  product: Product;
};

const formatNumber = (value: number, decimals = 0) =>
  new Intl.NumberFormat("bn-BD", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals === 0 ? 2 : decimals,
  }).format(value);

const formatUnit = (unit: string) => {
  const units: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    liter: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
  };

  return units[unit.toLowerCase()] ?? unit;
};

export default function ProductCard({ product }: ProductCardProps) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Link
      href="/signin"
      aria-label={`${product.nameBn}, আজকের দাম ${formatNumber(product.today)} টাকা। সাইন ইন করুন`}
      className="group block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
    >
      <article className="flex h-full flex-col rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:border-green-300 group-hover:shadow-md">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <ProductIcon image={product.image} name={product.nameBn} />

            <div className="min-w-0">
              <h3 className="font-bold leading-6 text-gray-800">
                {product.nameBn}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {formatUnit(product.unit)}
              </p>
            </div>
          </div>

          <span
            className={`badge shrink-0 border-0 bg-gray-100 ${
              isUp
                ? "text-red-600"
                : isDown
                  ? "text-green-600"
                  : "text-gray-600"
            }`}
          >
            {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
            {formatNumber(
              Math.abs(product.change.pct),
              product.change.dir === "flat" ? 1 : 0
            )}%
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">আজকের দাম</p>

            <p className="mt-1 text-2xl font-bold text-gray-900">
              ৳{formatNumber(product.today)}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">গতকালের দাম</p>

            <p className="mt-1 text-sm font-medium text-gray-500">
              ৳{formatNumber(product.yesterday)}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
