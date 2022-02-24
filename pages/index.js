import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Side from "../components/Side";
import Skill from "../components/Skill";
import Topbar from "../components/Topbar";
import Work from "../components/Work";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [op, setOp] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 6000);

  useEffect(() => {
    op
      ? document.querySelector("body").classList.add("blur")
      : document.querySelector("body").classList.remove("blur");
  }, [op]);

  return (
    <div>
      <Head>
        <title>Maneesh Busi</title>
        <meta
          name="description"
          content="Maneesh Busi is a software engineer that strives to build immersive and beautiful web applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <div className="loading">
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
      ) : (
        <div className={op ? "bb open" : "bb"}>
          <Topbar op={op} setOp={setOp} />
          <Side />
          <main className="main">
            <Hero />
            <Skill />
            <Project />
            <Work />
            <Contact />
          </main>
          <footer>
            <div className="down">
              <ul className="downList">
                <li>
                  <a
                    href="https://github.com/ManeeshBusi"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/maneesh-busi-1b90b318b"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://ww.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-linkedin"
                    >
                      <title>LinkedIn</title>
                      <path d="M 16 8 a 6 6 0 0 1 6 6 v 7 h -4 v -7 a 2 2 0 0 0 -2 -2 a 2 2 0 0 0 -2 2 v 7 h -4 v -7 a 6 6 0 0 1 6 -6 Z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCFJWPbj9NYfKCzYL8i8IT5w/featured"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://ww.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-youtube"
                    >
                      <title>YouTube</title>
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div>Designed & Built by Maneesh Busi</div>
          </footer>
        </div>
      )}
    </div>
  );
}
