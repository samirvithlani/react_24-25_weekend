import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { SubProductList } from "./SubProductList";

export const ProductList = () => {
  const { products, productDispatcher } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((prod) => {
            return (
              <tr>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>
                  <button
                    onClick={() => {
                      productDispatcher("DELETE_PRODUCT", prod);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <SubProductList />
    </div>
  );
};
