import './Headline.css'
import img4 from "../../../Assets/IMG_6030.png";



export default function Headline() {
  return (
    <>
      <div className="headline">
        <div className="headline-left">
        <h3>Oh Hey!</h3>
        <p>Hi, I'm Stephanie Marie! A kombucha loving, ice cream obsessed, fitness junkie!</p>
        <p>I'm an international health, fitness and wellness coach who specializes in a higher fat approach to nutrition. Through both mind and body, my ultimate goal is to help men and women reach their goals and enhance their life.</p>
        <p>​Exercise has always been a big part of my life. The older I got the more I loved it and the more physically active I was the better I felt. With a degree in Exercise Science and accreditations in personal training, nutrition, different fitness modalities, and yoga I guide individuals through my training programs to embrace a healthier lifestyle.</p>
        <p>As a Professional Fitness Trainer, my passion is to help people reach their fitness and lifestyle goals. Everybody is unique, with their own strengths and limitations. I aim to transform your body and influence you to make more mindful decision when it comes to your health.</p>
        <button className='read-more'>READ MORE</button>
        
        </div>
        <div className="headline-right">
        <img src={img4} alt="Stephanie training a client" />
        </div>
      </div>
    </>
  );
}
