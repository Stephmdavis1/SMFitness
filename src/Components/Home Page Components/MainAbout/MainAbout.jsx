import "./MainAbout.css";
import hello_img from "../../../Assets/IMG_6933.png";
import about_hero from "../../../Assets/DSC_1559.png";
import about_hero2 from "../../../Assets/DSC_1371.png";
import Navbar from "../Navbar/Navbar";
import { Parallax } from "react-parallax";
import Credentials from "../../About Page Components/Credentials/Credentials";

export default function MainAbout() {
  return (
    <>
      <div className="main">
      <div className="text-about-right">
      <Credentials />
      <h6>Click Me</h6>
          </div>
          <div className="text-about-left">
          <h3 className="header">Hey! I'm Stephanie</h3>
          <p className="text-box">I'm an international health, fitness and wellness coach who specializes in a higher fat approach to nutrition. Through both mind and body, my ultimate goal is to help men and women reach their goals and enhance their life.</p>
          <p className="text-box">
            Exercise has always been a big part of my life. The older I got the
            more I loved it and the more physically active I was the better I
            felt. I knew that whatever my career was, fitness would have to be
            some part of it. So it was no surprise when I graduated from the University of West
            Florida with a degree in Exercise Science. I have been personal
            training ever since and have loved it.
          </p>

          <p className="text-box">
            As a Professional Fitness Trainer, my passion is to guide people
            towards a healthier lifestyle. Everybody is unique, with their own
            strengths and limitations. My method is to build plans based
            on your heath, schedule and more importantly, your fitness goals. I
            aim to transform your body and influence you to make more mindful
            decision when it comes to your health.
          </p>
        </div>
      </div>
    </>
  );
}
