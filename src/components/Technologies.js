import React from 'react';
import { FaReact } from 'react-icons/fa';

import {
  SiTypescript,
  SiJavascript,
  SiAdobephotoshop,
  SiBootstrap,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="container">
        <h1 className="technologies-title">TECHNOLOGIES</h1>
        <ul className="technologies-list">
          <li className="technologies-list-item">
            <SiHtml5 />
          </li>
          <li className="technologies-list-item">
            <SiCss3 />
          </li>
          <li className="technologies-list-item">
            <SiJavascript />
          </li>
          <li className="technologies-list-item">
            <FaReact />
          </li>
          <li className="technologies-list-item">
            <SiBootstrap />
          </li>
          <li className="technologies-list-item">
            <SiTypescript />
          </li>
          <li className="technologies-list-item">
            <SiAdobephotoshop />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
