import React from 'react';

import { BsBoxArrowInUpRight, BsGithub } from 'react-icons/bs';

import { FaReact } from 'react-icons/fa';

import {
  SiTypescript,
  SiJavascript,
  SiAdobephotoshop,
  SiBootstrap,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

const Projects = () => {
  return (
    <div className="projects py-5">
      <div className="container">
        <h1 className="title">PROJECTS</h1>
      </div>
      <div className="container-shrink">
        <ul className="projects-list">
          <li className="project-item">
            <div className="project-img-wrapper">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="project img"
                className="project-img"
              />
            </div>
            <div className="project-content-wrapper">
              <div className="project-title-wrapper">
                <h2 className="project-title">PROJECT 1</h2>
                <ul className="project-technologies">
                  <li>
                    <SiHtml5 />
                  </li>
                  <li>
                    <SiCss3 />
                  </li>
                  <li>
                    <FaReact />
                  </li>
                </ul>
              </div>
              <div className="project-description">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maxime beatae aspernatur facere obcaecati, blanditiis soluta
                  sit assumenda enim. Placeat, sint.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio deserunt, voluptates quia, animi sunt inventore
                  accusantium et unde facilis rerum earum voluptatibus neque
                  obcaecati fugit dolorum sint reprehenderit ducimus quos.
                </p>
              </div>
              <div className="project-icons-wrapper">
                <a target="_blank" href="https://www.WordPress.com">
                  <BsGithub />
                </a>
                <a href="#">
                  <BsBoxArrowInUpRight />
                </a>
              </div>
            </div>
          </li>

          <li className="project-item">
            <div className="project-img-wrapper">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="project img"
                className="project-img"
              />
            </div>
            <div className="project-content-wrapper">
              <h2 className="project-title">PROJECT 1</h2>
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, tempore?
              </p>
              <div className="project-icons-wrapper">
                <a target="_blank" href="https://www.WordPress.com">
                  <BsGithub />
                </a>
                <a href="#">
                  <BsBoxArrowInUpRight />
                </a>
              </div>
            </div>
          </li>
          <li className="project-item">
            <div className="project-img-wrapper">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="project img"
                className="project-img"
              />
            </div>
            <div className="project-content-wrapper">
              <h2 className="project-title">PROJECT 1</h2>
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, tempore?
              </p>
              <div className="project-icons-wrapper">
                <a target="_blank" href="https://www.WordPress.com">
                  <BsGithub />
                </a>
                <a href="#">
                  <BsBoxArrowInUpRight />
                </a>
              </div>
            </div>
          </li>
          <li className="project-item">
            <div className="project-img-wrapper">
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt="project img"
                className="project-img"
              />
            </div>
            <div className="project-content-wrapper">
              <h2 className="project-title">PROJECT 1</h2>
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, tempore?
              </p>
              <div className="project-icons-wrapper">
                <a target="_blank" href="https://www.WordPress.com">
                  <BsGithub />
                </a>
                <a href="#">
                  <BsBoxArrowInUpRight />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
