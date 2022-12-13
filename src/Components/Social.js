import React from 'react';
import "./social.css";
import {FaFacebook, FaGithub, FaInstagram, FaWhatsapp} from "react-icons/fa";

function Social() {
  return (
    <div className="soc">
      <h1 className="social">FOLLOW US</h1>
      <div className="icon">
      
    <a href="https://www.instagram.com/n.siva.16" className="insta"><FaInstagram/></a>
    <a href="https://www.facebook.com/sivaram.sivaram.5015983" className="insta"><FaFacebook/></a>
    <a href="https://wa.me/+917639301382" className="insta"><FaWhatsapp/></a>
    <a href="https://github.com/sivaram7639" className="insta"><FaGithub/></a>
  </div></div>
  )
}

export default Social;