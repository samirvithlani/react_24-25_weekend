import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const SubProductList = () => {
  const { products } = useContext(ProductContext);
  console.log("products in sub list",products)
  return (
    <div>
      <h1>SUB PRODUCT LIST....</h1>
    </div>
  );
};
