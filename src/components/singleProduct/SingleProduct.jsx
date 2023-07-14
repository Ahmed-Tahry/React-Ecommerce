import React, { useEffect } from "react";
import { PRODUCTS } from "../../Products";
import "./SingleProduct.scss";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { GiUnbalanced } from "react-icons/gi";
function SingleProduct() {
  useEffect(() => {
    console.log(PRODUCTS[localStorage.getItem("product_id") - 1]);
  });

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          className="product-image"
          src={PRODUCTS[localStorage.getItem("product_id") - 1].image}
          alt={PRODUCTS[localStorage.getItem("product_id") - 1].name}
        />
      </div>
      <div className="product-details">
        <h3 className="product-name">{PRODUCTS[localStorage.getItem("product_id") - 1].name}</h3>
        <p className="product-type">{PRODUCTS[localStorage.getItem("product_id") - 1].type}</p>
        <p className="product-price">${PRODUCTS[localStorage.getItem("product_id") - 1].price}</p>
        <div className="product-add-to-cart">
          <button className="add-to-cart-btn">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
        <div className="links">
          <div className="item">
            <FaHeart /> ADD TO WISH LIST
          </div>
          <div className="item">
            <GiUnbalanced size={"20px"} />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: ???</span>
          <span>Product Type: ????</span>
          <span>Tag: ?????, ????, ??</span>
        </div>
        <hr />
        <div className="info">
          <h3>DESCRIPTION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere labore impedit omnis! Quo iure laudantium adipisci non
            obcaecati. Asperiores corrupti quibusdam maiores consequatur sapiente vel itaque temporibus voluptates in.
          </p>
          <h3>ADDITIONAL INFORMATION</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, dicta et atque nihil voluptate officia quod deserun</p>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
