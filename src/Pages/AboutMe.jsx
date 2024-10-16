import CatchPhrase from "../Components/About Page Components/Catch Phrase/CatchPhrase";
import ImageScroll from "../Components/About Page Components/Image Scroll/ImageScroll";
import MainAbout from "../Components/Home Page Components/MainAbout/MainAbout";
import Newsletter from "../Components/Home Page Components/Newsletter/Newsletter";
import Footer from "../Components/Home Page Components/Footer/Footer";
import TrainingBanner from "../Components/About Page Components/TrainingBanner/TrainingBanner";
import ImageSelector from "../Components/Home Page Components/Image Selector/ImageSelector";
import PassionProjects from "../Components/About Page Components/Passion Projects/PassionProjects";
import Credentials from "../Components/About Page Components/Credentials/Credentials";
import Hero from "../Components/About Page Components/Hero-About/Hero";
import AwardBar from "../Components/Home Page Components/Award Bar/AwardBar";

export default function AboutMe() {
  return (
    <>
      <Hero />
      <MainAbout />
      <AwardBar />
      <ImageSelector />
      <PassionProjects />
      <Newsletter />
      <Footer />
    </>
  );
}
