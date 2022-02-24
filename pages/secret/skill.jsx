import { useRouter } from "next/router";
import React, { useState } from "react";

function Skill() {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("front");
  const [createURL, setCreateURL] = useState(null);
  let imgName = "";

  const uploadtoClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImg(i);
      setCreateURL(URL.createObjectURL(i));
    }
  };

  const uploadtoServer = async (event) => {
    const body = new FormData();
    imgName = img.name;
    body.append("file", img);
    const resp = await fetch("/api/upload", {
      method: "POST",
      body,
    });
  };
  const router = useRouter();

  const handleSubmit = async (event) => {
    await uploadtoServer(event);
    // const data = new FormData();
    // data.append("name", title);
    // data.append("type", type);
    // data.append("img", `/images/${imgName}`);
    const data = { name: title, type: type, img: `/images/${imgName}` };
    // console.log(typeOf(data));
    const resp = await fetch("/api/skill", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.reload(window.location.pathname);
  };

  return (
    <div className="newskill">
      <h1 className="newskillTitle">New Skill</h1>
      <div className="newskillForm">
        <div className="newskillOne">
          <div className="newskillFormInput">
            <label>Name</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <select onChange={(e) => setType(e.target.value)}>
            <option value="front">Frontend</option>
            <option value="back">Backend</option>
            <option value="tool">Tool</option>
          </select>
        </div>
        <div className="newskillTwo">
          <div className="newskillFormInput">
            <label>Select Image</label>
            <input type="file" name="myImage" onChange={uploadtoClient} />
          </div>
          <img src={createURL} alt="" />
        </div>
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Skill;
