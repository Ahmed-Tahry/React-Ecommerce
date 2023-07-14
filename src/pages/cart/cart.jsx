import React from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../components/context/context";
import { ProductsCart } from "./products-cart";
import { useContext, useRef, useEffect, useState } from "react";
export function Cart() {
  const { cartItem, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const cart = useRef(null);
  const [empty, setIsEmpty] = useState(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    cart.current.textContent.trim().length === 0 ? setIsEmpty(true) : setIsEmpty(false);
  }, [cartItem]);
  return (
    <div className="sides">
      <div ref={cart} className="container-cart">
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] > 0) {
            return <ProductsCart data={product} />;
          }
        })}
      </div>
      {empty ? <h1 className="empty-msg"> Your cart is empty</h1> : null}
      <div className="total-p">total: {totalAmount}$</div>
    </div>
  );
}
