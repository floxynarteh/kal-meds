import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaSquareTwitter } from "react-icons/fa6";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaWhatsapp />
        <CiFacebook />
        <CiInstagram />
        <FaSquareTwitter />
      </div>
      <p> &copy; 2024 kalmeds.com </p>
    </div>
  );
}

export default Footer;
