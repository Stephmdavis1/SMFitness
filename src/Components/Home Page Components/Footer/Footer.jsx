import "./Footer.css";
import footer_logo from "../../../Assets/SMFitnessLogo.png";
import instagram from "../../../Assets/instagram_icon.png";
import pinterest from "../../../Assets/pinterest_icon.png";
import youtube from "../../../Assets/youtube.png";
import { Link, NavLink } from "react-router-dom";

export default function Footor() {
  return (
    <>
      <div className="footer">
        <ul className="footer-links">
          <li>
            <NavLink onClick={window.scrollTo(0, 0)} to="/trainingprograms">
              Training Programs
            </NavLink>
          </li>
          <li>Blog</li>
          <li>
            <NavLink onClick={window.scrollTo(0, 0)} to="/contactme">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => window.scrollTo(0, 0)} to="/terms">
              Terms of Service
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => window.scrollTo(0, 0)} to="/privacy">
              Privacy Policy
            </NavLink>
          </li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
          <Link to="https://www.instagram.com/stephmarie.fit/?next=%2F" target="_blank">
            <img src={instagram} alt="Instagram" />
            </Link>
            <Link to="https://www.pinterest.com/stephaniemariefitness/" target="_blank">
            <img src={pinterest} alt="Pinterest" />
            </Link>
            <Link to="https://www.youtube.com/@stephaniemariefitness8793" target="_blank">
              <img src={youtube} alt="Youtube" className="youtube-icon" />
            </Link>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Made with ❤️ by Stephanie Marie using React JS </p>
          <p>Coyright @ 2024 - All Right Reserved</p>
        </div>
      </div>
    </>
  );
}
