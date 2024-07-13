"use client";

import { InitialProducts } from "@/app/(tabs)/products/page";
import ListProduct from "./list-product";
import { useState } from "react";
import { set } from "zod";
import { getMoreProducts } from "@/app/(tabs)/products/actions";
import { isLatLong } from "validator";

interface ProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const newProduct = await getMoreProducts(1);
    setIsLoading(false);
    setProducts((prev) => [...prev, ...newProduct]);
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      <button onClick={onLoadMoreClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
