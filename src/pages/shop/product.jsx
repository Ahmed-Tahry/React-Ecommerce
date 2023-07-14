import React, { useContext, useState, useEffect } from "react";
import "./shop.css";
import { ShopContext } from "../../components/context/context";
import { Link } from "react-router-dom";
export function Product(props) {
  const { cartItem, addToCart, removeFromCart, updateFromInput } = useContext(ShopContext);
  const { id, name, image, price } = props.data;
  const addToStorage = () => {
    localStorage.clear();
    localStorage.setItem("product_id", JSON.stringify(id));
    console.log("works");
  };
  useEffect(() => {
    console.log(localStorage.getItem("product_id"));
  }, [localStorage]);
  return (
    <div className="grid-item">
      <Link to={"/single-product"}>
        <img src={image} onClick={addToStorage} />
      </Link>
      <b>
        <p>{name}</p>
      </b>
      <p>${price}</p>
      {cartItem[id] >= 1 && (
        <div className="counter">
          <button onClick={() => addToCart(id)}>+</button>
          <input type="number" value={cartItem[id]} onChange={(e) => updateFromInput(id, Number(e.target.value))} />
          <button onClick={() => removeFromCart(id)}>-</button>
        </div>
      )}
      {cartItem[id] < 1 && (
        <button
          onClick={() => {
            addToCart(id);
          }}
          className="add-to-cart">
          Add To Cart
        </button>
      )}
    </div>
  );
}
