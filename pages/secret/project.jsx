import React, { useState } from "react";
import { useRouter } from "next/router";

function Project() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [stack, setStack] = useState([]);
  const [git, setGit] = useState("");
  const [link, setLink] = useState("");
  const [vid, setVid] = useState("");

  const router = useRouter();

  const handleClick = async (event) => {
    const data = {
      title,
      desc,
      stack: stack.split(", "),
      git,
      link,
      vid,
    };

    console.log(data);

    const res = await fetch("/api/project", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.reload(window.location.pathname);
  };

  return (
    <div className="newpro">
      <h1 className="newproTitle">New Project</h1>
      <div className="newproForm">
        <div className="newproFormInput">
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        {/* textarea */}

        <div className="newproFormInput">
          <label>Description</label>
          <textarea
            rows="6"
            style={{ maxWidth: "100%" }}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        {/* stack */}

        <div className="newproFormInput">
          <label>Stack</label>
          <input type="text" onChange={(e) => setStack(e.target.value)} />
        </div>
        <div className="newproFormInput">
          <label>GitHub Repo Link</label>
          <input type="text" onChange={(e) => setGit(e.target.value)} />
        </div>
        <div className="newproFormInput">
          <label>Website Link</label>
          <input type="text" onChange={(e) => setLink(e.target.value)} />
        </div>
        <div className="newproFormInput">
          <label>YouTube Link</label>
          <input type="text" onChange={(e) => setVid(e.target.value)} />
        </div>

        <button type="submit" onClick={handleClick}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Project;
