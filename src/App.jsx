import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";

import { ContextProvider } from "./components/context/context";
import React, { useContext } from "react";
import Navbar from "./components/navbar/navbar";
import "./app.css";
import Footer from "./components/footer/footer";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/single-product" element={<SingleProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
