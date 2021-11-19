import React from "react";
import styled from "styled-components";

const PortfolioItem = ({ title, img }) => {
  return (
    <div>
      <Image src={`/img/${img}`} />
    </div>
  );
};

const Image = styled.img`
  width: 100%;
`;

export default PortfolioItem;
