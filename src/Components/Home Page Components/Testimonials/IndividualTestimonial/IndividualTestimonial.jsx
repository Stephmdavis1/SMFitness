import { useState } from "react";
import { motion } from "framer-motion";
import "./IndividualTestimonial.css";


export default function IndividualTestimonial({image, name, review}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="card-test">
      <div className="flip-card1" onClick={handleFlip}>
        <motion.div className="flip-card-inner1"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front1" style={{backgroundImage: `url(${image})`}}>
            
          </div>
          <div className="flip-card-back1">
            <h1>{name}</h1>
          <p className="review-block">{review}</p>
           
          </div>
        </motion.div>
      </div>
    </div>
  );
}
