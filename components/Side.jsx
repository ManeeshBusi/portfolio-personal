import React from "react";

function Side() {
  return (
    <div className="side">
      <ul className="sideList">
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
  );
}

export default Side;
