import "./Popular.css";
import data_product from "../../../Assets/data";
import Items from "../Items/Items";
import { motion, useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

export default function Popular() {

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(1);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 3 - 8;

    controls = animate(xTranslation, [1, finalPosition], {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <>
      <div className="popular">
        <h1>POPULAR PROGRAMS</h1>
        <hr />
        <motion.div className="popular-item" ref={ref} style={{x: xTranslation}}>
          {[...data_product, ...data_product].map((item, i) => {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
              />
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
