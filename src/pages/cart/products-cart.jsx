import React from "react";
import { ShopContext } from "../../components/context/context";
import { useContext, useEffect } from "react";
import "./cart.css";
export const ProductsCart = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItem, addToCart, removeFromCart, updateFromInput } = useContext(ShopContext);

  return (
    <div className="flex-item">
      <img src={image} />
      <div className="other-things">
        <b>
          <p>{name}</p>
        </b>
        <p>${price}</p>

        <div className="counter">
          <button onClick={() => addToCart(id)}>+</button>
          <input type="number" value={cartItem[id]} onChange={(e) => updateFromInput(id, Number(e.target.value))} />
          <button onClick={() => removeFromCart(id)}>-</button>
        </div>
      </div>
    </div>
  );
};
