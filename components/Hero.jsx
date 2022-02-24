import React from "react";
import { motion } from "framer-motion";
import { container, item } from "../animationVar";

function Hero() {
  return (
    <motion.section
      className="hero"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="heroIntro" variants={item}>
        <h2>Hi, my name is</h2>
      </motion.div>
      <motion.div className="heroName" variants={item}>
        <h1>Maneesh Busi.</h1>
      </motion.div>
      <motion.div className="heroSub" variants={item}>
        <h1>I love learning new technologies.</h1>
      </motion.div>
      <motion.div className="heroDesc" variants={item}>
        <p>
          I am a logical and results-driven fullstack web developer dedicated to
          building responsive and scalable web applications across the stack.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
