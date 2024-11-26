import { Category, ProductType } from "@/sanity.types";
import React from "react";
import ProductGrid from "./ProductGrid";

interface ProductViewProps {
  products: ProductType[];
}

const ProductView = ({ products }: ProductViewProps) => {
  return (
    <div className="flex flex-col">
      {/* Catogories */}
      <div className="w-full sm:w-[200px]">
        {/* <CategorySelectorComponent categories={categories} /> */}
      </div>

      {/* Products */}
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
