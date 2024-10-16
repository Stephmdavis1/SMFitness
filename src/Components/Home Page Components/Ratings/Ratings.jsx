import { motion, useMotionValue, animate } from "framer-motion";
import ratings from "../../../Assets/ratings";
import Rating from "./Rating";
import "./Ratings.css";

export default function Ratings() {
  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="rating-whole">
        <div className="ratings-top">
          <h4>What people have to say about SMF Programs</h4>
          <hr />
        </div>
        <div className="ratings">
          <div className="ratings-bottom" onWheel={handleScroll}>
            {ratings.map((item, i) => {
              return (
                <Rating
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  review={item.review}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
