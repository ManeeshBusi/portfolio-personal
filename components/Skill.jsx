import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { container, item } from "../animationVar";
let frontSkills = require("../data/front.json");
let backSkills = require("../data/back.json");
let toolSkills = require("../data/tool.json");

function Skill() {
  return (
    <motion.section
      id="skill"
      className="skill"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <h1 className="skillHeading">Skills</h1>
      <motion.div className="skillContent" variants={item}>
        <h2 className="skillTitle">Frontend</h2>
        <div className="skillList">
          {frontSkills.map((fs) => (
            <div className="skillItem" key={fs.id}>
              <div className="skillImg">
                <Image
                  src={fs.img}
                  layout="fill"
                  objectFit="contain"
                  alt={fs.name}
                />
              </div>
              <div className="skillName">{fs.name}</div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div className="skillContent" variants={item}>
        <h2 className="skillTitle">Backend</h2>
        <div className="skillList">
          {backSkills.map((fs) => (
            <div className="skillItem" key={fs.id}>
              <div className="skillImg">
                <Image
                  src={fs.img}
                  layout="fill"
                  objectFit="contain"
                  alt={fs.name}
                />
              </div>
              <div className="skillName">{fs.name}</div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div className="skillContent" variants={item}>
        <h2 className="skillTitle">Tools</h2>
        <div className="skillList">
          {toolSkills.map((fs) => (
            <div className="skillItem" key={fs.id}>
              <div className="skillImg">
                <Image
                  src={fs.img}
                  layout="fill"
                  objectFit="contain"
                  alt={fs.name}
                />
              </div>
              <div className="skillName">{fs.name}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Skill;
