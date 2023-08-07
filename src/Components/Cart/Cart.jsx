/* eslint-disable react/prop-types */
// import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleClearCart, children }) => {
  // option-1
  // console.log(cart);
  // const cart = props.cart;  option-2
  // const { cart } = props;  option-3
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const p of cart) {
    // optional-----
    // if(p.quantity === 0){
    //     p.quantity = 1;
    // }-------
    totalPrice = totalPrice + p.price * p.quantity;
    totalShipping = totalShipping + p.shipping;
    quantity = quantity + p.quantity;
  }
  // console.log(totalPrice);
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total price: {totalPrice}</p>
      <p>Total Shipping: {totalShipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
      <button onClick={handleClearCart} className="btn-clear-cart">
        Clear Cart
      </button>
      {children}
    </div>
  );
};

export default Cart;
