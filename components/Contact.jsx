import React from "react";
import { motion } from "framer-motion";
import { container, item } from "../animationVar";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.h1 className="contactHeading" variants={item}>
        Get in touch
      </motion.h1>
      <motion.p className="contactContent" variants={item}>
        I&#39;m always looking for new and exciting oppurtunities, so please
        feel free to contact me.{" "}
      </motion.p>
      <motion.div className="contactBtnContainer" variants={item}>
        <a
          className="contactBtn"
          href="mailto:maneesh.busi@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          SAY HELLO
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
