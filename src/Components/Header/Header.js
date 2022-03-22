import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />

        <div className="menu">
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          <li>
            <a href="/inventory">Inventory</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Header;
