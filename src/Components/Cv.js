import React from 'react';
import "./Cv.css"
import resume from "../Assets/resume.jpg";

function Cv() {
  return (
    <div>
        <img className="res" src={resume} alt="resume"></img>
       <a href="../Assets/resume.jpg" download className="ang"> <button className="down">DOWNLOAD </button></a>
    </div>
  )
}

export default Cv;