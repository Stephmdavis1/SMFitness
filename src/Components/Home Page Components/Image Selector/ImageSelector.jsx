import "./ImageSelector.css";
import { Parallax } from "react-parallax";
import image_2 from "../../../Assets/IMG111.png";
import { Link } from "react-router-dom";

export default function ImageSelector() {
  return (
    <>
    <div className="box">
      <Parallax
        bgImage={image_2}
        bgImageAlt="Stephanie Marie"
        strength={200}
        blur={{min: 0, max: .5}}
      >
        <div className="box-section">
          <div className="box-section-container">
          <p>Check out my</p>
          <h3>Training Programs</h3>
         <Link to="/trainingprograms"><button>Train with me</button></Link> 
          </div>
        </div>
        
      </Parallax>
  
      </div>
      
    </>
  );
}
