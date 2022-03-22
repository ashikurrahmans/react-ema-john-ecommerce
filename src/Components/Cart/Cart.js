import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }

  const tax = (total * 0.1).toFixed(2);

  const totalPrice = total + shipping + Number(tax);

  return (
    <div className="cartSticky">
      <h2>Order Summary</h2>
      <div className="cart-content">
        <p>Seletecd Items {cart.length}</p>
        <p>Total Price : ${total}</p>
        <p>Total Shipping :${shipping} </p>
        <p>Tax :${tax} </p>
        <h3>Grand Total : ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
