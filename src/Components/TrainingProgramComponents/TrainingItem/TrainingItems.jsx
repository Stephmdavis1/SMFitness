import { PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";
import "./TrainingItems.css";

export default function Items({ image, name, new_price, id, category, }) {
  return (
    <>
      <div className="item">
        <Link to={`/product/${id}`}>
          <img onClick={window.scrollTo(0,0)} className="individual-image" src={image} alt="" />
        </Link>
        <h5>{name}</h5>
        <p className="category-item">{category}</p>
        <div className="items-prices">
          <div className="item-price-new">${new_price}</div>
        </div>
      </div>
    </>
  );
}
