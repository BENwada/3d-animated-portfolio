import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="cSection left">
        <form action="" ref={form} onSubmit={sendEmail}>
          <h1 className="cTitle">Let's keep in touch</h1>
          <div className="formItem">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="formItem">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="formItem">
            <label htmlFor="">Massage</label>
            <textarea rows={10} placeholder="Write your message..."></textarea>
          </div>
          <button className="formButton">Send</button>
        </form>
      </div>
      <div className="cSection right">SVG</div>
    </div>
  );
};

export default Contact;
