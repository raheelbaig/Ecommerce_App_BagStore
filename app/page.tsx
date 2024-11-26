import ProductView from "@/components/ProductView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import BlackFridayBanner from "@/components/BlackFridayBanner";

export default async function Home() {

  const products = await getAllProducts();


  return (
    <div>
      <BlackFridayBanner />
      <div>
        <ProductView products={products}  />
      </div>
    </div>
  );
}
