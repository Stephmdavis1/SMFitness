import "./PassionProjects.css";
import image_1 from "../../../Assets/IMG_6933.png";
import image_2 from "../../../Assets/p5_img.png";
import image_3 from "../../../Assets/NewsletterCover.png";
import image_4 from "../../../Assets/IMG_1908.png";
import { Link } from "react-router-dom";

export default function PassionProjects() {
  return (
    <>
      <h3>More from Me</h3>
      <div className="projects-container">
          <div className="projects-one">
            <img src={image_2} alt="" />
            <div className="one-copy">
              <h5>Online Programs</h5>
              <p className="text-copy">
                Online resources have always worked best for me because they
                helped me fit my lifestyle to my training routine. I've spent
                the past 6 years creating online training programs for anyone
                who wants to take their fitness to the next-level.
              </p>
              <Link to="/trainingprograms">
                <button>See my Programs</button>
              </Link>
            </div>
          </div>
          <div className="projects-two">
            <img src={image_1} alt="Online Trianing Programs" />
            <div className="two-copy">
              <h5>YouTube Channel</h5>
              <p className="text-copy">
                I record follow along with workouts that aim to make training
                accessible for everyone. Whether you are a complete beginner or
                a seasoned athlete, my aim is to unite people through movement.
              </p>
              <Link to="https://www.youtube.com/@stephaniemariefitness8793">
                <button>Come Train with Me</button>
              </Link>
            </div>
          </div>
          <div className="projects-three">
            <img src={image_3} alt="" />
            <div className="three-copy">
              <h5>Newsletter</h5>
              <p className="text-copy">
                Subscribing to my newsletter means you will see my nerdy side!
                It's a place where I can share my thoughts on training,
                nutrition, our body anatomy and how to train for your own goals.
              </p>
              <Link to="/newsletter">
                <button>Join my Newsletter</button>
              </Link>
            </div>
          </div>
          <div className="projects-four">
            <img src={image_4} alt="" />
            <div className="four-copy">
              <h5>Freebies</h5>
              <p className="text-copy">
                I know a lot of times people like to see sample workouts before
                they purchase a training program, so I have made it a goal to
                create a ton of short free training plans to allow you to get
                accustomed to my style. Click the link below to check them out!
              </p>
              <Link to="/freebies">
                <button>Grab these FREEBIES</button>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}
