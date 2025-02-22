import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export const ProductComponent = () => {

    const dispatch = useDispatch()

  return (
    <div>
      <div className="card">
        <h1>Iphone 16</h1>
        <p>price = 100</p>
        <button onClick={() => {dispatch(addToCart({id:101,name:"iphone16",price:200}))}} className="btn btn-info">
          ADD TO CART
        </button>
      </div>
      <div className="card">
        <h1>Iphone 15</h1>
        <p>price = 200</p>
        <button onClick={() => {}} className="btn btn-info">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
