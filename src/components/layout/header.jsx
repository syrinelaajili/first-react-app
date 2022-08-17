import React from "react";
import wacademy from "../../assets/imgs/wacademy.jpeg";
import '../../styles/header.css'


export default function Header() {
  return (
    <div className="header-container">
      <nav className="navbar">
        <div>
          <img className="logo-navbar" src="https://3wa.fr/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/01/cropped-big.png.webp" alt="logo"></img>
        </div>
        <div className="liens">
          <a href="#">Métiers</a>
          <a href="#">Technoligies</a>
          <a href="#">Entreprise</a>
          <a href="#">Notre Academy</a>
          <a href="#">Villes</a>
          <button type="button">CVthèque</button>
        </div>
      </nav>
    </div>
  );
}
