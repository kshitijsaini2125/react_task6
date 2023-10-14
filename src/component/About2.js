import "../css/About2.css";
import React from "react";

const About2 = () => {
  return (
    <div className="about2">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am engineering student, pursuing B.Tech in cse specialisation in cybersecurity and digital forensic from VIT Bhopal university.
        </p>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src="/img/react-img.jpg" className="image"/>
            </div>
            <div className="img-stack bottom">
                <img src="/img/react-img2.jpg" className="image"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
