
import { getProducts } from "@/lib/bazardor-api";
import PriceTickerMarquee from "./PriceTickerMarquee";


export default async function PriceTicker() {
  const products = await getProducts();

  const changingProducts = products.filter(
    (product) => product.change.dir !== "flat",
  );

  return <PriceTickerMarquee products={changingProducts} />;
}
