import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

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
        <h2>Product Cart</h2>
        <p>Seletecd Items {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
