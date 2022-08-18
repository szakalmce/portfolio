import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo">
            <h1 className="title">TOMASZ GARABARZ</h1>
            <h3 className="subtitle">PORTFOLIO</h3>
          </div>
          <nav className="navbar-nav">
            <ul className="navbar-ul">
              <li className="navbar-li">
                <a href="#" className="navbar-link">
                  Link
                </a>
              </li>
              <li className="navbar-li">
                <a href="#" className="navbar-link">
                  Link
                </a>
              </li>
              <li className="navbar-li">
                <a href="#" className="navbar-link">
                  Link
                </a>
              </li>
              <li className="navbar-li">
                <a href="#" className="navbar-link">
                  Link
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
