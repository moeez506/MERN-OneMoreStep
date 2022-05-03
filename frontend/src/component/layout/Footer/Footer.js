import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>OneMoreStep.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Moeez Ahmad</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://twitter.com/MoeezAhmad_">Twitter</a>
        <a href="https://www.linkedin.com/in/moeezahmad01/">LinkedIn</a>
        <a href="https://github.com/moeez506">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;