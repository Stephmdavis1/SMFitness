import { useState } from "react";
import emailjs from "@emailjs/browser";
import React from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const reset = (event) => {
    event.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
   

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_API_KEY
      )
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          
        },
        (error) => {
          console.log("Failed...", error);
        }
      );
  };

  return (
    <>
      {submitted && <div className="thanks">Thank you for your message</div>}

      <form className="input-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            value={formData.name}
            type="text"
            placeholder="Enter Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            name="email"
            id="email"
            value={formData.email}
            type="email"
            placeholder="Enter Email Address"
            required
            onChange={handleChange}
          />
        </div>
        <div className="message-container">
          <label htmlFor="message">Your Message:</label>
          <textarea
            value={formData.message}
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            className="input-container3"
            required
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
        <button type="submit" value="Send">
          Submit
        </button>
        <button type="submit" value="Send" onClick={reset}>Reset</button>
        </div>
      </form>
    </>
  );
}
