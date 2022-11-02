import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

const Contact = () => {
  const form = useRef();
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zypor4b",
        "template_r2mbmas",
        form.current,
        "B3Ty6GAYPVF3Umufj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow(true);
          setTimeout(function () {
            setShow(false);
          }, 4000);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div id="contact" className="section contact-section">
      <h2>Contact me</h2>
      <div>
        <h3>
          Love to hear from you,
          <br />
          Get in touch 👋
        </h3>
      </div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="field name">
          <label>Your name</label>
          <input type="text" placeholder="Your name" name="user_name" />
        </div>
        <div className="field mail">
          <label>Your email</label>
          <input type="email" placeholder="Your email" name="user_email" />
        </div>
        <div className="field full message">
          <label>Message</label>
          <textarea placeholder="Write your message here" name="message" />
        </div>
        <div className="field send">
          <input type="submit" value="Send Message" />
        </div>
      </form>
      <div className={`modal ${show ? "modal-show" : ""}`}>
        Your message is sent.
      </div>
    </div>
  );
};

export default Contact;
