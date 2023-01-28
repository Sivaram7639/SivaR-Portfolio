import React from 'react';
import "./About.css";
import logo from "../Assets/IMG_20220919_111923.jpg"
import {  FaUniversity } from "react-icons/fa";
import{useState} from "react";
import { Link } from 'react-router-dom';

function About() {
  const [scroll,setScroll]=useState("transition");
  const[scrollY,setScrollY]=useState("slide")

   const myFunction=()=>{
    if(window.scrollY>=500){
       setScroll("college")
    }
  else{
    setScroll("transition")
  }
   }
  const scrollFunction =()=>{
    if(window.scrollY>=300)
    {
      
      setScrollY("master")
    
      
    }
    else{
    
      setScrollY("slide")
    
      
    }
    
  }
  

  window.addEventListener('scroll',myFunction,);
  window.addEventListener("scroll",scrollFunction)

  return (
    <body id="body">
    <div  className="about">
      <img className="picture" src={logo} alt="man"/>
      <div className="namesection">
      <h1 className="greet"> Hi!,<span> I'M SIVARAM</span></h1>
      <p className="para">A Professional Front End Web Developer For ReactJS</p>
    <Link to="/Cv"> <button className="button">Download CV</button></Link>
     </div>
     <div className="container">
      <div className={scrollY}>
      <a href="http://apcac.edu.in"><FaUniversity/></a>
      <h1 className="mcom">M.COM</h1>
      <p className="class">APA COLLEGE OF ARTS AND CULTURE. PALANI</p>
      <p className="year">2020-2022</p>
     </div>
      <div className={scroll}>
        <a href="http://scas.org.in"> <FaUniversity/></a>
        <h1 className="mcom">B.COM(CA)</h1>
      <p className="class">SUBRAMANYA COLLEGE OF ARTS AND SCIENCE. THALAYUTHU</p>
      <p className="year">2017-2020</p>
      </div>
      
    </div>

    
    
    </div>
    </body>
  )
}

export default About;