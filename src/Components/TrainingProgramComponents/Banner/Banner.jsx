import "./Banner.css";
import { Parallax } from "react-parallax";
import photo from "../../../Assets/IMG_19891.png";
import Navbar from "../../Home Page Components/Navbar/Navbar";

export default function Banner() {
  return (
    <>
      {/* <div className="banner-box">
    <Parallax
        bgImage={photo}
        bgImageAlt="Stephanie Marie"
        strength={200} className="photo-banner"
      >
        </Parallax>
       
     <img src={photo} alt="" />
     <div className="banner-box-section">
          <div className="banner-box-section-container">
          <h3>Select a Training Program</h3>
          <p className="banner-text">Find the program that suits your goals below</p>
          </div>
        </div>
    </div>
     <div className="description">
        <p className="description-text">Full Program PDFs with demonstration videos and supplemental guides. Purchase once. Enjoy lifetime access.</p>
     </div> */}

      <div className="hero">
        <img src={photo} alt="Stephanie doing yoga" className="photo" />
      </div>
      <div className="content1">
        <h3 className="content1-title">Select a Training Program</h3>
        <h6 className="content1-paragraph">
          Find the program that suits your goals below
        </h6>
      </div>

      <div className="navbar-about">
        <Navbar />
      </div>
      <div className="content-box"></div>

      <div className="description">
        <p className="description-text">
          Full Program PDFs with demonstration videos and supplemental guides.
          Purchase once. Enjoy lifetime access.
        </p>
      </div>

      {/* </div> */}
    </>
  );
}
