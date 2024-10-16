import { motion, useMotionValue, animate } from "framer-motion";
import ratings from "../../../Assets/ratings";
import IndividualTestimonial from "./IndividualTestimonial/IndividualTestimonial";
import "./Testimonials.css";

export default function Testimonials() {
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
      <div className="rating-whole1">
        <div className="ratings-top1">
          <h4>What people have to say about SMF Programs</h4>
          <p>Click each picture to read their review</p>
          <hr />
        </div>
        <div className="ratings1">
          <div className="ratings-bottom1" onWheel={handleScroll}>
            {ratings.map((item, i) => {
              return (
                <IndividualTestimonial
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
