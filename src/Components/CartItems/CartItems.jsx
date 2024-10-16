import { useContext, useState } from "react";
import { TrainingProgramsContext } from "../../Context/TrainingProgramsContext";
import "./CartItems.css";
import remove_icon from "../../Assets/cart_cross_icon.png";
import Navbar from "../Home Page Components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import cart_icon from "../../Assets/cart_icon.png";
import StripeContainer from "./PaymentForm/StripeContainer";
import { getProductData } from "../../Assets/getProductData";

export default function CartItems(props) {
  const cart = useContext(TrainingProgramsContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const [showItem, setShowItem] = useState(false);

  const {
    all_product,
    // cartItems,
    // removeFromCart,
    // getTotalCartAmount,
    // getTotalCartItems,
    cartProducts,
    new_products,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  } = useContext(TrainingProgramsContext);

  return (
    <>
      <div className="navbar-cart">
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "darkseagreen" : "#5a5a5a",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutme"
              style={({ isActive }) => {
                return {
                  color: isActive ? "darkseagreen" : "#5a5a5a",
                };
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trainingprograms"
              style={({ isActive }) => {
                return {
                  color: isActive ? "darkseagreen" : "#5a5a5a",
                };
              }}
            >
              Training Programs
            </NavLink>
          </li>
          <div className="nav-login-cart1">
            <NavLink to="/cart">
              <img src={cart_icon} alt="" className="cart-icon1" />
            </NavLink>
            <div className="nav-cart-count1">{productsCount}</div>
          </div>
        </ul>
      </div>

      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="border" />

        <div className="cartitems-format cartitems-format-main">
        <img src={new_products.image} alt="" className="carticon-product-icon" />
        <p className="cart-name">{new_products.name}</p>
        <p className="cart-price">${new_products.new_price}</p>
        <p>{quantity} total</p>
        <p>${(quantity * new_products.new_price).toFixed(2)}</p>
        <button className="cartitems-quantity" onClick={() => cart.deleteFromCart(id)}>
        Remove
        </button>
        <hr></hr>
        </div>
        {/* {new_products.map((item, e) => {
          if (cartProducts[item.id] > 0) {
            return (
              <div>
                <div className="cartitems-format cartitems-format-main">
                  <img src={item.image} alt="" className="carticon-product-icon" />
                  <p className="cart-name">{e.name}</p>
                  <p className="cart-price">${e.new_price}</p>
                  <button className="cartitems-quantity">
                    {cartProducts[e.id]}
                  </button>
                  <p>${e.new_price * cartProducts[e.id]}</p>
                  <img
                    className="carticons-remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      cart.removeOneFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr className="border" />
              </div>
            );
          }
          return null;
        })} */}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1 className="cartitems-title"> Cart Totals</h1>
            <div>
              <div className="cartitems-totalitem">
                <p>Subtotal</p>
                <p>${cart.getTotalCost}</p>
              </div>
              <hr className="border" />
              <div className="cartitems-totalitem">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr className="border" />
              <div className="cartitems-totalitem">
                <p className="cart-total">Total</p>
                <p className="cart-total">${cart.getTotalCost()}</p>
              </div>
            </div>
            {/* <form action="/create-checkout-session" method="POST">
              <button type="submit">Checkout</button>
            </form> */}
            <div className="app">
              {showItem ? (
                <StripeContainer />
              ) : (
                <button onClick={() => setShowItem(true)}>Purchase</button>
              )}
            </div>

            {/* <button>PROCEED TO CHECKOUT</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
