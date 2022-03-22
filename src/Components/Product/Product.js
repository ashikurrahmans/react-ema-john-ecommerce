import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  const { addToCardHandles } = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-content">
        <h3 className="name">{name}</h3>
        <p>Price: ${price}</p>
        <p>Manufacturar: {seller}</p>
        <p>Ratings: {ratings} </p>
      </div>
      <button
        className="buttonCart"
        onClick={() => addToCardHandles(props.product)}
      >
        <p className="btnText">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
