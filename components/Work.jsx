import React from "react";
import { motion } from "framer-motion";
import { container, item } from "../animationVar";

function Work() {
  return (
    <motion.section
      id="exp"
      className="exp"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <h1 className="expHeading">Experience</h1>
      <motion.div className="expContent" variants={container}>
        <motion.ul className="expList" variants={container}>
          <motion.li variants={item}>
            <h3 className="expTitle">
              Application Support Engineer{" "}
              <span>
                @{" "}
                <a
                  href="https://one.walmart.com/content/globaltechindia/en_in.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Walmart Global Tech
                </a>
              </span>
            </h3>
            <p className="expTime">December 2020 - Present</p>
            <ul className="expAcc">
              <li>
                Assisted production support and development staff in debugging
                application related issues.
              </li>
              <li>
                Provided and created documentation of previous and new
                applications and assisted in maintaining it.
              </li>
              <li>
                Provided off-hours customer support via pager as scheduled
              </li>
              <li>Coached new employees about the applications supported</li>
            </ul>
          </motion.li>

          <motion.li variants={item}>
            <h3 className="expTitle">
              Technical Intern{" "}
              <span>
                @{" "}
                <a
                  href="https://www.quantela.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Quantela Inc.
                </a>
              </span>
            </h3>
            <p className="expTime">January 2020 - April 2020</p>
            <ul className="expAcc">
              <li>
                Worked as an independent contributor directly reporting to the
                Vice President of a department.
              </li>
              <li>
                Designed an IOT based automated street light system using
                NodeMCU and Arduino
              </li>
              <li>
                Created a working model of the project given and pitched to the
                company to bring it to production.
              </li>
            </ul>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}

export default Work;
