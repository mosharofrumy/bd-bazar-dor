
import HeroBanner from "@/components/HeroBanner";
import { getProducts } from "@/lib/bazardor-api";
import ProductCard from "@/components/ProductCard";

const formatNumber = (value: number) =>
  new Intl.NumberFormat("bn-BD").format(value);

export default async function Home() {
  const products = await getProducts();

  const increasingProducts = products
    .filter((product) => product.change.dir === "up")
    .slice(0, 6);

  const decreasingProducts = products
    .filter((product) => product.change.dir === "down")
    .slice(0, 6);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <HeroBanner />

      {/* Today's price increases */}
      {increasingProducts.length > 0 && (
        <section className="mb-10">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                <span className="mr-2 text-red-600">▲</span>
                আজ যেসব পণ্যের দাম বেড়েছে
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {increasingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Today's price decreases */}
      {decreasingProducts.length > 0 && (
        <section className="mb-10">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                <span className="mr-2 text-green-600">▼</span>
                আজ যেসব পণ্যের দাম কমেছে
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {decreasingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* All products */}
      <section id="all-products" className="scroll-mt-40">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              সকল পণ্য
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              নিত্যপ্রয়োজনীয় {formatNumber(products.length)} টি পণ্যের তালিকা দেখানো হচ্ছে
            </p>
          </div>

  
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
