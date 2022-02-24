import Link from "next/link";
import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import { motion, AnimatePresence } from "framer-motion";

function Topbar({ op, setOp }) {
  const [show, setShow] = useState("top");

  useEffect(() => {
    let scroll = window.scrollY;

    window.addEventListener("scroll", () => {
      if (scroll < window.scrollY) {
        setShow("scroll hide");
      } else {
        setShow("scroll show");
      }

      scroll = window.scrollY;
      if (window.scrollY === 0) {
        setShow("top");
      }
    });
  }, []);

  return (
    <header className={"topbar " + show}>
      <div className="topbarWrapper">
        <div className="topbarLogo">
          <svg
            viewBox="0 0 263 263"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="131.5"
              cy="131.5"
              r="120"
              stroke="#66FCF1"
              strokeWidth="11"
            />
            <path
              id="text"
              d="M101.29 144.866H101.902L110.266 113.348C112.034 106.548 114.754 101.89 118.426 99.374C122.098 96.858 127.64 95.6 135.052 95.6V167H125.464V106.412C123.696 107.16 122.336 108.214 121.384 109.574C120.5 110.934 119.65 112.974 118.834 115.694L106.084 159.452H97.108L84.256 115.694C83.44 112.906 82.59 110.866 81.706 109.574C80.822 108.214 79.496 107.16 77.728 106.412V167H68.14V95.6C75.552 95.6 81.06 96.892 84.664 99.476C88.336 101.992 91.09 106.616 92.926 113.348L101.29 144.866ZM158.298 167H148.812V118.346C148.812 111.342 151.056 105.63 155.544 101.21C160.1 96.79 165.71 94.58 172.374 94.58C179.718 94.58 185.226 96.45 188.898 100.19C192.638 103.862 194.508 108.384 194.508 113.756C194.508 120.624 191.312 125.554 184.92 128.546V128.954C193.692 131.47 198.078 137.556 198.078 147.212C198.078 160.404 190.292 167 174.72 167H161.97V158.024H174.618C179.31 158.024 182.744 157.072 184.92 155.168C187.096 153.264 188.184 150.204 188.184 145.988C188.184 142.316 186.994 139.494 184.614 137.522C182.302 135.55 179.14 134.564 175.128 134.564H165.03V126.098H171.558C175.23 126.098 178.358 125.112 180.942 123.14C183.594 121.1 184.92 118.38 184.92 114.98C184.92 111.716 183.9 108.996 181.86 106.82C179.888 104.644 176.658 103.556 172.17 103.556C168.09 103.556 164.758 104.848 162.174 107.432C159.59 109.948 158.298 113.654 158.298 118.55V167Z"
              fill="#66FCF1"
            />
          </svg>
        </div>

        <div className="topbarLinks">
          <Scrollspy
            items={["skill", "project", "exp", "contact"]}
            currentClassName="current"
            className="topbarList"
          >
            <li className="topbarListItem">
              <Link href="#skill">Skills</Link>
            </li>
            <li className="topbarListItem">
              <Link href="#project">Projects</Link>
            </li>
            <li className="topbarListItem">
              <Link href="#exp">Experience</Link>
            </li>
            <li className="topbarListItem">
              <Link href="#contact">Contact</Link>
            </li>
          </Scrollspy>
          <div>
            <a
              href="./CV.pdf"
              download="ManeeshBusi-CV.pdf"
              className="topbarCV"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="topbarMenu">
          <div>
            <button className="topbarBtn" onClick={() => setOp(!op)}>
              <div className="topbarHambox">
                <div className={op ? "topbarHam open" : "topbarHam"}></div>
              </div>
            </button>

            <aside className={op ? "topbarAside open" : "topbarAside"}>
              <nav>
                {" "}
                <Scrollspy
                  items={["skill", "project", "exp", "contact"]}
                  currentClassName="current"
                  className="topbarAsideList"
                >
                  <li
                    className="topbarAsideListItem"
                    onClick={() => setOp(false)}
                  >
                    <Link href="#skill">Skills</Link>
                  </li>
                  <li
                    className="topbarAsideListItem"
                    onClick={() => setOp(false)}
                  >
                    <Link href="#project">Projects</Link>
                  </li>
                  <li
                    className="topbarAsideListItem"
                    onClick={() => setOp(false)}
                  >
                    <Link href="#exp">Experience</Link>
                  </li>
                  <li
                    className="topbarAsideListItem"
                    onClick={() => setOp(false)}
                  >
                    <Link href="#contact">Contact</Link>
                  </li>
                </Scrollspy>
                <a
                  href="./CV.pdf"
                  download="ManeeshBusi-CV.pdf"
                  className="topbarAsideCV"
                  onClick={() => setOp(false)}
                >
                  Resume
                </a>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
