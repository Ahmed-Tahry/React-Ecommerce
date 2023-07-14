import React from "react";
import { PRODUCTS } from "../../Products";
import "./FeaturedProducts.scss";
function FeaturedProducts() {
  return (
    <div className="products-featured">
      <div className="product-card">
        <img src={PRODUCTS[1].image} alt="" />
        <div>
          <span className="old">{PRODUCTS[1].price}$</span>

          <span>{PRODUCTS[1].price - PRODUCTS[1].price * 0.05}$</span>
        </div>
      </div>
      <div className="product-card">
        <img src={PRODUCTS[2].image} alt="" />
        <div>
          <span className="old">{PRODUCTS[2].price}$</span>

          <span>{PRODUCTS[2].price - PRODUCTS[2].price * 0.05}$</span>
        </div>
      </div>
      <div className="product-card">
        <img src={PRODUCTS[6].image} alt="" />
        <div>
          <span className="old">{PRODUCTS[6].price}$</span>

          <span>{PRODUCTS[6].price - PRODUCTS[6].price * 0.05}$</span>
        </div>
      </div>
      <div className="product-card">
        <img src={PRODUCTS[5].image} alt="" />
        <div>
          <span className="old">{PRODUCTS[5].price}$</span>

          <span>{PRODUCTS[5].price - PRODUCTS[5].price * 0.05}$</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
