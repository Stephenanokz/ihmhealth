import React, { useRef } from "react";
import "./contact.css";
import mailImg from "../../img/mail.png";
import twitterImg from "../../img/twitter.png";
import facebookImg from "../../img/facebook.png";
import whatsappImg from "../../img/whatsapp.png";
import youtubeImg from "../../img/youtube.png";
import telephoneImg from "../../img/telephone.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m886bml",
        "template_iwnxtkk",
        form.current,
        "n9iMxqTYBlNvswt1X"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="contactTop">
        <h2>Contact Us</h2>
        <p className="address">
          <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Immaculate+Heart+Specialist+Hospital,+Nkpor/@6.1565093,6.8489923,17z/data=!3m1!4b1!4m6!3m5!1s0x104391214344d2e1:0x2f55b97a59a69edb!8m2!3d6.156504!4d6.851181!16s%2Fg%2F11lt043m9p">
            <b>Address: </b> 18 Immaculate Heart Avenue Nkpor, Idemili North
            L.G.A Anambra State.
          </a>
        </p>
        <p>
          For enquiries, feedbacks or more infomation about our services, please
          reach out to us via the following:
        </p>
      </div>
      <div className="contactBottom">
        <div className="contactItem">
          <img src={mailImg} alt="mail" id="mail" />
          <h3>Email</h3>
          <span>
            You can send a mail to our 24/7 support team and you will get a
            feedback from us.
          </span>
          <a href="mailto:admin@ihmcare.net?subject = Feedback&body = Message">
            <button>Send mail</button>
          </a>
        </div>
        <div className="contactItem">
          <img src={twitterImg} alt="twitter" id="twitter" />
          <h3>Twitter</h3>
          <span>
            Visit our Twitter page <a href="/">@ihmhealth</a> to stay updated on
            services and promos going on. You can also tag us, @ihmhealth, in
            your tweet using the button below.
          </span>
          <a href="https://twitter.com/intent/tweet">
            <button>Tweet</button>
          </a>
        </div>
        <div className="contactItem">
          <img src={facebookImg} alt="facebook" id="facebook" />
          <h3>Facebook</h3>
          <span>
            Our facebook handle is{" "}
            <em>
              <strong>ihmshn ihmsrs</strong>
            </em>
            .
          </span>
          <a href="https://www.facebook.com/profile.php?id=100090901730751">
            <button>View Profile</button>
          </a>
        </div>
        <div className="contactItem">
          <img src={whatsappImg} alt="whatsapp" id="whatsapp" />
          <h3>WhatsApp</h3>
          <span>
            Send us a chat on WhatsApp and we'll reply you as soon as we can.
          </span>
          <a href="https://wa.me/2349065498234">
            <button>Chat</button>
          </a>
        </div>
        <div className="contactItem">
          <img src={youtubeImg} alt="youtube" id="youtube" />
          <h3>YouTube</h3>
          <span>
            You can checkout our YouTube channel and see some inspiring works of
            the lord.
          </span>
          <a href="https://www.youtube.com/channel/UC4C4U8tz1SeoaNx0oR98c_g">
            <button>Visit Channel</button>
          </a>
        </div>
        <div className="contactItem phone">
          <img src={telephoneImg} alt="phone" id="phone" />
          <h3>Telephone</h3>
          <span>
            You can also give us a call on any of our customer lines: <br />{" "}
            <a href="tel:234-906-549-8234">09065498234</a> <br />{" "}
            <a href="tel:234-906-543-6727">09065436727</a> <br />{" "}
            <a href="tel:234-803-694-1299">08036941299</a>
          </span>
        </div>
        <div className="contactItem contactFormContainer">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <h2 className="contactFormTitle">Contact us</h2>
            <input
              name="from_name"
              type="text"
              placeholder="Full Name"
              className="contactFormInput"
            />
            <input
              name="from_email"
              type="email"
              placeholder="Email"
              className="contactFormInput"
            />
            <textarea
              name="message"
              id="body"
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="contactFormTextArea"
            ></textarea>
            <button className="contactFormButton">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
