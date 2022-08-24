import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="py-5 bg-gray">
        <div className="container-shrink">
          <div className="footer-title-wrapper">
            <div className="footer-line"></div>
            <div className="footer-title-bg">
              <h1 className="footer-title">TOMASZ GARBARZ</h1>
            </div>
          </div>
          <ul className="footer-social">
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <FaGithub />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <p className="footer-copy">
            All Rights Reserved &copy; Tomasz Garbarz 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
