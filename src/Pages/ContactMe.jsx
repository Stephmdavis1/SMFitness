import Contact from "../Components/ContactMe/Contact";
import Navbar from "../Components/Home Page Components/Navbar/Navbar";
import Footer from "../Components/Home Page Components/Footer/Footer";
import './CSS/ContactMe.css'
import Newsletter from "../Components/Home Page Components/Newsletter/Newsletter";

export default function ContactMe() {
  return (
    <>
     <div className="navbar-about">
        <Navbar />
      </div>
    <Contact />
    <Newsletter />
    <Footer />
    </>
  )
}

