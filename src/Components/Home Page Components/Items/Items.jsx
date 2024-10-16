import "./Items.css";

export default function Items(props) {
  return (
    <>
      <div className="item">
        <img className="individual-image" src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="items-prices">
          <div className="item-price-new">${props.new_price}</div>
        </div>
      </div>
    </>
  );
}
