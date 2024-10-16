import "./Rating.css";

export default function Rating({ image, name, review }) {
  return (
    <>
      <div className="rating">
        <div className="rating-left">
          <img className="rating-image" src={image} alt="" />
        </div>
        <div className="rating-right">
          <h6>{name}</h6>
          <p className="review-block">{review}</p>
        </div>
      </div>
    </>
  );
}
