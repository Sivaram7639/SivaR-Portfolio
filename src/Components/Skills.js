import React from 'react';
import "./Skills.css";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import script from "../Assets/script.png";
import react from "../Assets/react.png"

function Skills() {
  return (
    <div className="skills">
      <div className="skill">
        <div className="html">
        <img className="logohtml" src={html} alt="logo"></img>
        <div className="bar">
        <div className="skillbar"></div>
        <h2 className="no">75%</h2>
        </div>
        </div>
        <div className="css">
          <img className="logocss" src={css} alt="css"></img>
          <div className="bar">
            <div className="skillcss"></div>
          </div>
          <h2 className="nom">60%</h2>
        </div>
        <div className="javas">
          <img className="logojava" src={script} alt="java"></img>
          <div className="bar"></div>
          <div className="skilljava"></div>
          <h2 className="nomb">50%</h2>
        </div>
        <div className="react">
          <img className="logoreact" src={react} alt="react" ></img>
          <div className="bar"></div>
          <div className="skillreact"></div>
          <h2 className="nomb">50%</h2>
        </div>
      </div>
      <div>
        <h2 className="exper">SKILLS AND EXPERIENCE</h2>
      </div>
    </div>
  )
}

export default Skills;