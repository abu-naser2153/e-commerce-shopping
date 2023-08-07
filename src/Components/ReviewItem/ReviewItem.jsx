/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveCart }) => {
  // console.log(product);
  const { id, img, price, name, quantity } = product;

  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price:
          <span className="orange-text">$ {price}</span>
        </p>
        <p>
          Order Quanity:
          <span className="orange-text">$ {quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveCart(id)} className="btn-delete">
        Del
      </button>
    </div>
  );
};

export default ReviewItem;
