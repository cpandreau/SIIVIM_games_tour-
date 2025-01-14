import React from "react";
import "./Header.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center">
        <p>Nevers n'est pas lié à Epic Games</p>
      </div>
      <div className="footer-right">
        <p>Evan Verplaetse et Titouan Beaurepaire</p>
      </div>
      <div className="footer-icons" style={{ display: "flex", flexDirection: "column" }}>
        <a href="https://www.instagram.com/villedenevers/?hl=fr" target="_blank" rel="noopener noreferrer">
          <img src="image/insta.png" alt="Instagram" className="footer-icon" />
        </a>
        <a href="https://discord.gg/g9unyDfyfG" target="_blank" rel="noopener noreferrer">
          <img src="image/discord.png" alt="Discord" className="footer-icon" />
        </a>
        <a href="https://www.tiktok.com/@villedenevers" target="_blank" rel="noopener noreferrer">
          <img src="image/tiktok.png" alt="TikTok" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;

