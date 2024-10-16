import "./Contact.css";
import instagram from "../../Assets/instagram_icon.png";
import pinterest from "../../Assets/pinterest_icon.png";
import kettlebell from "../../Assets/kettlebell.png";
import db from "../../Assets/db.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Form from "./Form/Form";


export default function ContactMe() {

  return (
    <>
      <div className="contact-header">
        <div className="contact-copy">
          <h3>Contact Me</h3>
          <p className="copy">
            Feel free to shoot me a message at any time. I'll get back to you as
            soon as I can!
          </p>
          <p className="email">Email</p>
          <p className="email-address">
            <strong>stephaniemariefitness1@gmail.com</strong>
          </p>
          <div className="contact-container-icons">
            <img src={instagram} alt="Instagram" />
            <img src={pinterest} alt="Pinterest" />
          </div>
        </div>
      </div>
      <div className="get-in-touch">
        <img src={db} alt="" />
      </div>
      <div className="get-in-touch-copy">
        <h3>Get in Touch</h3>
        <hr />
        <p>
          If you have any feedback or questions about training programs or my
          service in general,
        </p>
        <p>please send me a message by completing our inquiry form.</p>
      </div>
      <div className="input">
      <Form />
      </div>

    </>
  );
}
