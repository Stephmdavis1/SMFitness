import "./AwardBar.css";
import img1 from "../../../Assets/2022.png";
import img2 from "../../../Assets/2023.png";
import img3 from "../../../Assets/2024.png";


export default function AwardBar() {
  return (
    <>
      <div className="award-bar">
        {/* <div className="award-bar-left">
          <img src={img4} alt="Stephanie training a client" />
        </div> */}
        <div className="award-bar-right">
          {/* <div className="title">
            <h3>Best Training Program Award</h3>
            <p>3 years in a row</p>
          </div> */}
          <div className="award-pins">
            <img src={img1} alt="Best Training Program Award 2022" />
            <img src={img2} alt="Best Training Program Award 2023" />
            <img src={img3} alt="Best Training Program Award 2024" />
          </div>
        </div>
      </div>
    </>
  );
}
