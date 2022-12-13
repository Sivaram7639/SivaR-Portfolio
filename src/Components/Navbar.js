import React, {useState}from 'react';
import { FaHome } from 'react-icons/fa';
import {Link} from "react-router-dom";
import "./Navbar.css";
import {Tooltip} from "react-tooltip";
import {Tooltip as ReactTooltip} from"react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "react-tooltip/dist/react-tooltip.esm";
import project from "../Assets/project.svg";
import skills from "../Assets/professional-skills-icon.svg";
import contact from "../Assets/md-contact.svg";


function Navbar() {
  const[burger_Class,setBurgerClass]=useState("burger-bar unclicked");
  const[nav,setNav]=useState("nav-links hidden")
  const[isMenuClicked, setisMenuClicked]=useState(false);

  const menuClick = () =>{

    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked")
      setNav("nav-links visible")

    }
    else{
      setBurgerClass("burger-bar unclicked")
      setNav("nav-links hidden")
    }
    setisMenuClicked(!isMenuClicked)
  }
    

  return (
      
    <nav className="nav-bar">
    <div className="burger_icon" onClick={menuClick}>
        <div className={burger_Class}></div>
        <div className={burger_Class}></div>
      </div>
      <Link className="nav-name" to="./">SIVA<span>RAM</span></Link>
      <ul className={nav}>
        <Link onClick={menuClick} to="./" className="nav-items"  id="home" data-tooltip-content="HOME" ><FaHome/></Link>
        <Link onClick={menuClick}to="./Skills" className="nav-items"><img id="skills" data-tooltip-content="SKILLS" src={skills} alt='skills'></img></Link>
        <Link onClick={menuClick} to="./Project" className="nav-items"><img id="project" data-tooltip-content="PROJECT" src={project} alt='project'></img></Link>
      
        <Link onClick={menuClick} to="./Contact" className="nav-items"><img id="contact" data-tooltip-content="CONTACT" src={contact} alt='project'></img></Link>

      <ReactTooltip anchorId="skills"/>
      <Tooltip anchorId="project"/>
      <Tooltip anchorId="home"/>
      <Tooltip anchorId="contact"/>
      </ul>
    </nav>
    
  )
}

export default Navbar;