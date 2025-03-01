import "./ProductDisplay.css";
import { useContext } from "react";
import { TrainingProgramsContext } from "../../../Context/TrainingProgramsContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import PaypalCheckoutButton from "./Paypal/PaypalCheckoutButton";


export default function ProductDisplay(props) {
  const { product } = props;
  const cart = useContext(TrainingProgramsContext);

  const notify = () => {
    toast.success("Item added to cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    cart.addOneToCart(product.id);
  };

  const program = {
    description: product.name,
    price: product.new_price,
  }

  return (
    <>
      <div className="product-display">
        <div className="productdisplay-left">
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={product.image}
              alt=""
            />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star"></div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-new-price">
              ${product.new_price}
            </div>
            <div className="productdisplay-right-description">
              {product.description}
            </div>
          </div>
          

          {/* <button onClick={notify}>
            Add to Cart
          </button> */}
          <ToastContainer />
          <p className="productdisplay-right-category">
            <span>Category: </span>
            {product.category}
          </p>
          <p className="productdisplay-right-category">
            <span>Fitness Level: </span>
            {product.level}
          </p>
          <br />
          <div className="paypal-buttons">
          <PaypalCheckoutButton program={program} />
          </div>
        </div>
      </div>
    </>
  );
}
