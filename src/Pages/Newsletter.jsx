import "./CSS/Newsletter.css";
import instagram from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pinterest_icon.png";
import image_flex from "../Assets/IMG_19891.png";
import NewsletterSubscription from "../Components/NewsletterSubscription/NewsletterSubscription";


export default function Newsletter() {
  return (
    <>
    <NewsletterSubscription />


      {/* <div className="newsletter-box">
        <img src={image_flex} alt="Stephanie on the beach" />
        <div className="glassbox">
          <div className="glassbox-container">
            <h3>Subscribe</h3>
            <p className="glassbox-container-copy">Want to be the first to know about new releases, exclusive deals and special promos on training programs? Enter your email below to be added to my mailing list.
            </p>
            <button>Send me the goods</button>
            <p className="small-copy">I respect your time and space. No spam here. I’ll only send the good stuff!</p>
            <div className="glassbox-container-icons">
              <img src={instagram} alt="Instagram" />
              <img src={pinterest} alt="Pinterest" />
              </div>
          </div>
        </div>
      </div> */}
    </>
  );
}


