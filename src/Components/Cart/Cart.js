import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Product Cart</h2>
      <p>Seletecd Items {cart.length}</p>
    </div>
  );
};

export default Cart;
