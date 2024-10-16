import "./Hero2.css";
import hero_image from "../../../Assets/hero_image3.png";
import { Parallax } from "react-parallax";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  return (
    <div className="Hero">
      <Parallax strength={300} bgImage={hero_image}>
        <div className="content"></div>
      </Parallax>
      <div className="navbar-about">
        <Navbar />
      </div>
      <div className="content-box"></div>
    </div>
  );
}
