import React, { useState } from "react";
import { ProductAdd } from "./ProductAdd";
import { ProductList } from "./ProductList";
import { ProductContext } from "./ProductContext";

//products -->
//----->add product ,list product
//--->filter product

export const Products = () => {
  const [products, setproducts] = useState([
    {
      id: 101,
      name: "iphone",
      price: 1200,
    },
    {
      id: 102,
      name: "bag",
      price: 100,
    },
    {
      id: 103,
      name: "charger",
      price: 200,
    },
  ]);

  const productDispatcher = (choice, payload) => {
    switch (choice) {
      case "ADD_PRODUCT":
        break;
      case "DELETE_PRODUCT":
        //console.log(payload," is about to delete,,,")
        setproducts(products.filter((prod)=>{
          return prod.id != payload.id
        }))
        break;
    }
  };

  return (
    <div>
      <ProductContext.Provider value={{products,productDispatcher,setproducts}}>
        <ProductAdd />
        <ProductList />
      </ProductContext.Provider>
    </div>
  );
};
