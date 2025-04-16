import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const ref = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setSuccess(false);
          setError(true);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref} onSubmit={sendEmail}>
      <div className="cSection left">
        <motion.form
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          action=""
          ref={form}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="">Name</label>
            <input type="text" name="user_username" placeholder="John Doe" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="">Massage</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message..."
            ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className="formButton">
            Send
          </motion.button>
          {success && <span>Success! Message sent.</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection right">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
