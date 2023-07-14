import React, { useState } from "react";
import "./shop.css";
import { PRODUCTS } from "../../Products";
import { Product } from "./product";

export function Shop() {
  const [maxPrice, setMaxPrice] = useState(1000);
  return (
    <div className="all-container">
      <div className="filters">
        <div className="filters-1">
          <h2>Filters</h2>
          <div className="filter-group">
            <h3>Price Range</h3>
            <span>0</span>
            <input
              type="range"
              min="0"
              value={maxPrice}
              max="100"
              className="price-range"
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
            <span>{maxPrice}</span>
          </div>
          <div className="filter-group">
            <h3>Category</h3>
            <label>
              <input type="checkbox" value="electronics" /> Electronics
            </label>
            <label>
              <input type="checkbox" value="clothing" /> Clothing
            </label>
          </div>
          <div className="filter-group">
            <h3>Brand</h3>
            <select>
              <option value="">All Brands</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="nike">Nike</option>
            </select>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="header-img">
          <img src="/elec3.jpg" alt="" />
        </div>
        <div className="container">
          {PRODUCTS.map((product) => {
            return <Product data={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
