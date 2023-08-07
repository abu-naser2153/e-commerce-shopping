/* eslint-disable react/prop-types */
// import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { img, name, price, seller, ratings } = props.product;
  //   const handleAddToCart = (product) => {
  //     console.log(product);
  //   };
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
