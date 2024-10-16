import { useState } from "react";
import { motion } from "framer-motion";
import "./Credentials.css";
import about_hero from "../../../Assets/IMG_2632.png";

export default function Credentials() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="card">
      <div className="flip-card" onClick={handleFlip}>
        <motion.div className="flip-card-inner"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front" style={{backgroundImage: `url(${about_hero})`}}>
            
          </div>
          <div className="flip-card-back">
            <h1>Credentials</h1>
            <h5>BS Exercise Sports Science - University of West Florida</h5>
            <h5>Exercise Physiologist</h5>
            <h5>Certified Personal Trainer</h5>
            <h5>TRX Certified Instructor and Functional Trainer</h5>
            <h5>200 Hour Yoga Instructor</h5>
            <h5>Certified Group Ex Instructor</h5>
            <h5>Les Mills BodyPump Instructor</h5>
            <h5>Kickboxing Instructor</h5>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
