import React, { useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.scss";
import { ShopContext } from "../context/context";
export default function Navbar() {
  const { getTotal } = useContext(ShopContext);
  const total = getTotal();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to={"/shop"}>
              Electronics
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/shop"}>
              Clothes
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to={"/"}>
            ReyCelo
          </Link>
        </div>
        <div className="right">
          <Link className="link" to={"/"}>
            HomePage
          </Link>
          <Link className="link" to={"/"}>
            About
          </Link>
          <Link className="link" to={"/"}>
            Contact
          </Link>
          <Link className="link" to={"/shop"}>
            Stores
          </Link>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <Link to={"/cart"}>
                <ShoppingCartOutlinedIcon />
              </Link>
              <span>{total}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-small">
        <Link className="link" to={"/shop"}>
          Stores
        </Link>
        <Link className="link" to={"/"}>
          ReyCelo
        </Link>
        <div className="cartIcon">
          <Link to={"/cart"}>
            <ShoppingCartOutlinedIcon />
          </Link>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
}
