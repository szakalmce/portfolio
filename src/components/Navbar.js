import React from 'react';
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo">
            <h1 className="navbar-title">TOMASZ GARABARZ</h1>
            <h3 className="subtitle">PORTFOLIO</h3>
          </div>
          <nav className="navbar-nav">
            <ul className="navbar-ul">
              <li className="navbar-li">
                <a href="#" className="navbar-link">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="navbar-li">
                <a href="#" className="navbar-link">
                  <FaGithub />
                </a>
              </li>
              <li className="navbar-li">
                <a href="#" className="navbar-link">
                  <FaInstagram />
                </a>
              </li>
              <li className="navbar-li">
                <a href="#" className="navbar-link">
                  <FaRegEnvelope />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

window.document.addEventListener('scroll', () => {
  const maxHeight = 200;
  const navbar = document.querySelector('.navbar-wrapper');

  if (window.pageYOffset > maxHeight) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

export default Navbar;
