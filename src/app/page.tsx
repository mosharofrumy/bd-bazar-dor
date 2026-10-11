
import { getProducts } from "@/lib/bazardor-api";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("bn-BD").format(price);

const formatUnit = (unit: string) => {
  const units: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "টি",
  };

  return units[unit] ?? unit;
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="mx-auto w-full max-w-6xl p-4 sm:p-6">
      <h1 className="mb-2 text-2xl font-bold text-green-800">
        আজকের বাজার-দর
      </h1>

      <p className="mb-6 text-sm text-gray-600">
        নিত্যপ্রয়োজনীয় পণ্যের দাম এক নজরে দেখুন।
      </p>

      <h2 className="mb-4 text-xl font-semibold">
        সকল পণ্য ({formatPrice(products.length)})
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <article
            key={product.id}
            className="card border border-green-100 bg-base-100 shadow-sm"
          >
            <div className="card-body gap-2 p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">
                  {product.image || product.categoryIcon}
                </span>

                <div>
                  <h3 className="font-bold">
                    {product.nameBn}
                  </h3>

                  <p className="text-sm text-gray-500">
                    প্রতি {formatUnit(product.unit)}
                  </p>
                </div>
              </div>

              <p className="text-2xl font-bold text-green-700">
                ৳{formatPrice(product.today)}
              </p>

              <p className="text-sm text-gray-500">
                গতকাল: ৳{formatPrice(product.yesterday)}
              </p>

              <div className="flex items-center justify-between border-t border-base-200 pt-3">
                <span className="text-sm text-gray-600">
                  মূল্য পরিবর্তন
                </span>

                <span
                  className={`badge ${
                    product.change.dir === "up"
                      ? "badge-error"
                      : product.change.dir === "down"
                        ? "badge-success"
                        : "badge-ghost"
                  }`}
                >
                  {product.change.dir === "up"
                    ? "▲"
                    : product.change.dir === "down"
                      ? "▼"
                      : "—"}{" "}
                  {formatPrice(Math.abs(product.change.pct))}%
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
