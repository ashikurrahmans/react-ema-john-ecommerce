import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "./../Cart/Cart";

const Shop = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });
  // AddToCart
  const [cart, setCart] = useState([]);

  const addToCardHandle = (pd) => {
    const newCart = [...cart, pd];
    setCart(newCart);
  };

  return (
    <div className="shop">
      <div className="products">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCardHandles={addToCardHandle}
          ></Product>
        ))}
      </div>
      <div className="carts">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
