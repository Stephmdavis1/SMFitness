import "./ImageScroll.css";
import { Parallax } from "react-parallax";
import scroll_image from "../../../Assets/DSC_1636.png";

export default function ImageScroll() {
  return (
    <>
    <div className="image-box">
      <Parallax
        bgImage={scroll_image}
        className="scroll-image"
        bgImageAlt="Stephanie Marie"
        strength={200}
      >
        <div className="image-text">
          {/* <h3>Ready?</h3> */}
        {/* <button>Let's Train</button> */}
        </div>
      </Parallax>
  
      </div>
    </>
  );
}
