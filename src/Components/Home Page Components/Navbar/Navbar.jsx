import "./Navbar.css";
import logo from "../../../Assets/SMFitnessLogo.png";
import cart_icon from "../../../Assets/cart_icon.png";
import menu_icon from "../../../Assets/menu_icon.png";
import { MdOutlineMenu } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TrainingProgramsContext } from "../../../Context/TrainingProgramsContext";

export default function Navbar({ isClicked, closeMenu }) {
const [ visible, setVisible ] = useState(false)

  const cart  = useContext(TrainingProgramsContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Stephanie Marie Fitness logo" />
          </Link>
        </div>

        <ul className="nav-menu" ref={menuRef}>
          <li
            
          >
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
          <li
            
          >
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
          <li
            
          >
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
          <img onClick={() => setVisible(true)} src={menu_icon} alt="" className="mobile_menu"/>
        </ul>
      </div>
    </>
  );
}
