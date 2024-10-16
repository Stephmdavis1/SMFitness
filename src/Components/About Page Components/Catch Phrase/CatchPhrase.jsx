import "./CatchPhrase.css";
import img1 from "../../../Assets/6.png";
import img2 from "../../../Assets/7.png";
import img3 from "../../../Assets/8.png";


export default function CatchPhrase() {
  return (
    <>
      <div className="catch-phrase">
        {/* <div className="award-bar-left">
          <img src={img4} alt="Stephanie training a client" />
        </div> */}
        <div className="award-bar-right">
          {/* <div className="title">
            <h3>Best Training Program Award</h3>
            <p>3 years in a row</p>
          </div> */}
          <div className="catch-phrase-notes">
            <img src={img1} alt="Crush your goals" />
            <img src={img2} alt="Build unstoppable confidence" />
            <img src={img3} alt="Live your best life" />
          </div>
        </div>
      </div>
    </>
  );
}
