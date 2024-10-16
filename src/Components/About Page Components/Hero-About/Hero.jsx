import "./Hero.css";
import { Parallax } from "react-parallax";
import about_hero2 from "../../../Assets/DSC_1371.png";
import hello_img from "../../../Assets/IMG_6933.png";
import about_hero from "../../../Assets/DSC_1559.png";
import Navbar from "../../Home Page Components/Navbar/Navbar";

export default function Hero() {
  return (
    <div className="Hero">
      <Parallax strength={300} bgImage={about_hero2}>
        <div className="content">
        </div>
      </Parallax>
      <div className="navbar-about">
        <Navbar />
      </div>
      <div className="content-box">
        </div>
    </div>
  );
}
