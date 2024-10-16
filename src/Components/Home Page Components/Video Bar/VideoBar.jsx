import "./VideoBar.css";
import { Parallax, Background } from "react-parallax";
import video1 from "../../../Assets/boxes_video.mp4";
import video2 from "../../../Assets/Getoutmyway.mp4";

export default function VideoBar() {
  return (
    <>
    <div className="video-text">
    <h3>Featured In</h3>
    
    
    </div>
    <video className="video-bar" src={video1} loop autoPlay muted controls='controls' />
    {/* <div className="container">
    <video className="video-bar2" src={video2} loop autoPlay muted controls='controls' />
    </div> */}
    </>
  );
}
