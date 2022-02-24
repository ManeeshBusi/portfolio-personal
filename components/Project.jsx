import React from "react";
import { motion } from "framer-motion";
import { container, item } from "../animationVar";
let projects = require("../data/projects.json");

function Project() {
  return (
    <motion.section
      id="project"
      className="project"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      <h1 className="projectHeading">Projects</h1>
      <motion.ul className="projectList" variants={item}>
        {projects.map((p) => (
          <li className="projectItem" key={p.id}>
            <div className="projectDetails">
              <h2 className="projectTitle">{p.title}</h2>
              <p className="projectDesc">{p.desc}</p>
              <ul className="projectTech">
                {p.stack.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div className="projectLinks">
                <a href={p.git} rel="noopener noreferrer" target="_blank">
                  <svg
                    xmlns="http://ww.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <title>Github</title>
                    <path d="M 9 19 c -5 1.5 -5 -2.5 -7 -3 m 14 6 v -3.87 a 3.37 3.37 0 0 0 -0.94 -2.61 c 3.14 -0.35 6.44 -1.54 6.44 -7 A 5.44 5.44 0 0 0 20 4.77 A 5.07 5.07 0 0 0 19.91 1 S 18.73 0.65 16 2.48 a 13.38 13.38 0 0 0 -7 0 C 6.27 0.65 5.09 1 5.09 1 A 5.07 5.07 0 0 0 5 4.77 a 5.44 5.44 0 0 0 -1.5 3.78 c 0 5.42 3.3 6.61 6.44 7 A 3.37 3.37 0 0 0 9 18.13 V 22"></path>
                  </svg>
                </a>
                <a href={p.link} rel="noopener noreferrer" target="_blank">
                  <svg
                    xmlns="http://ww.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                  >
                    <title>External Link</title>
                    <path d="M 18 13 v 6 a 2 2 0 0 1 -2 2 H 5 a 2 2 0 0 1 -2 -2 V 8 a 2 2 0 0 1 2 -2 h 6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="projectVideo">
              <iframe
                src={p.vid}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="yt"
              ></iframe>
            </div>
          </li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

export default Project;
