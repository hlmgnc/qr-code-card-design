import React from "react";

export default function Card() {
  return (
    <div className="container">
      <img src="image-qr-code.png" alt="" className="img" />
      <div className="content">
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p className="text">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
