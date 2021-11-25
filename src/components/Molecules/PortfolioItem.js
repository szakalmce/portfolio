import React from "react";
import styled from "styled-components";

const PortfolioItem = ({ title, img, active }) => {
  return (
    <div>
      {active ? (
        <div style={{ transition: "all 0.5s ease-in-out" }} data-aos="fade-up">
          <Image src={`/img/${img}`} />
        </div>
      ) : null}
    </div>
  );
};

const Image = styled.img`
  width: 100%;
`;

export default PortfolioItem;
