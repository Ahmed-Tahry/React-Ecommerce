import React from "react";
import { createContext, useState } from "react";
import { PRODUCTS } from "../../Products";
export const ShopContext = createContext(null);
export function ContextProvider(props) {
  const [chosenItems, setChosenItems] = useState([]);
  const [cartItem, setCartItem] = useState(() => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  });
  function updateFromInput(id, number) {
    setCartItem({ ...cartItem, [id]: number });
    console.log(cartItem);
  }
  function addToCart(id) {
    setCartItem({ ...cartItem, [id]: cartItem[id] + 1 });
    console.log(cartItem);
  }
  function removeFromCart(id) {
    if (cartItem[id] < 1) return;
    setCartItem({ ...cartItem, [id]: cartItem[id] - 1 });
    console.log(cartItem);
  }
  function getTotalAmount(item) {
    let total = 0;
    for (const item in cartItem) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      total += cartItem[item] * itemInfo.price;
    }
    return total;
  }
  function getTotal(item) {
    let total = 0;
    for (const item in cartItem) {
      total += cartItem[item];
    }
    return total;
  }
  const contextItems = { cartItem, addToCart, removeFromCart, updateFromInput, getTotalAmount, getTotal };
  return <ShopContext.Provider value={contextItems}>{props.children}</ShopContext.Provider>;
}
