import "./TrainingBanner.css";
import { Link } from "react-router-dom";

export default function TrainingBanner() {
  return (
    <>
      <div className="banner">
            <Link to="/trainingprograms">
            <img src={banner} alt="Training Banner"/>
            </Link>
      </div>
    </>
  );
}
