
import Hero from "../Components/Home Page Components/Hero/Hero";
import Popular from "../Components/Home Page Components/Popular/Popular";
import VideoBar from "../Components/Home Page Components/Video Bar/VideoBar";
import AwardBar from "../Components/Home Page Components/Award Bar/AwardBar";
import Newsletter from "../Components/Home Page Components/Newsletter/Newsletter";
import Footer from "../Components/Home Page Components/Footer/Footer";
import ImageSelector from "../Components/Home Page Components/Image Selector/ImageSelector";
import Headline from "../Components/Home Page Components/Headline/Headline";
import TrainingBanner from "../Components/About Page Components/TrainingBanner/TrainingBanner";
import Testimonials from "../Components/Home Page Components/Testimonials/Testimonials";
import CatchPhrase from "../Components/About Page Components/Catch Phrase/CatchPhrase";

export default function Home() {
  return (
    <>
      <Hero />
      <Headline />
      <CatchPhrase />
      <ImageSelector />
      <Popular />
      <Newsletter />      
      <Testimonials />
      <VideoBar />
      <Footer /> 
    </>
  );
}
