import React from 'react';

import {
  FaRocket,
  FaTelegramPlane,
  FaPencilAlt,
  FaChartLine,
} from 'react-icons/fa';

const Services = () => {
  return (
    <div className="services py-5 bg-gray">
      <div className="container">
        <h1 className="title">SERVICES</h1>
        <div className="services-grid">
          <div className="services-item">
            <div className="item-front">
              <div className="service-icon">
                <FaRocket />
              </div>
              <p className="service-title">WEB DEVELOPMENT</p>
            </div>
            <div className="item-back">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                consectetur aspernatur aliquid voluptatem rem ullam quae! Ut
                accusamus est dolore.
              </p>
            </div>
          </div>
          <div className="services-item">
            <div className="item-front">
              <div className="service-icon">
                <FaPencilAlt />
              </div>
              <p className="service-title">UI DESIGN</p>
            </div>
            <div className="item-back">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                consectetur aspernatur aliquid voluptatem rem ullam quae! Ut
                accusamus est dolore.
              </p>
            </div>
          </div>

          <div className="services-item">
            <div className="item-front">
              <div className="service-icon">
                <FaTelegramPlane />
              </div>
              <p className="service-title">REACT APLICATIONS</p>
            </div>
            <div className="item-back">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                consectetur aspernatur aliquid voluptatem rem ullam quae! Ut
                accusamus est dolore.
              </p>
            </div>
          </div>
          <div className="services-item">
            <div className="item-front">
              <div className="service-icon">
                <FaChartLine />
              </div>
              <p className="service-title">SEO OPTIMIZE</p>
            </div>
            <div className="item-back">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                consectetur aspernatur aliquid voluptatem rem ullam quae! Ut
                accusamus est dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
