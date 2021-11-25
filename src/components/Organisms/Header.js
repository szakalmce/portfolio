import React from "react";
import styled from "styled-components";
import img from "../../Assets/img/header_bg.png";
import Button from "../Atoms/Button";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderInner data-aos="fade-up">
          <HeaderInfo>
            <HeaderJobTitle>Web Developer</HeaderJobTitle>
            <HeaderTitle>Tomasz Garbarz</HeaderTitle>
            <HeaderSubTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut dolor the sit amet consectetur
              adipisicing elit sed do consectetur labore et dolo...
            </HeaderSubTitle>
            <Button>view more</Button>
          </HeaderInfo>
        </HeaderInner>
      </div>
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.div`
  margin-top: 100px;
  height: 80vh;
  position: relative;
  background-image: url(${img});
  background-position: top;
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    height: 40vh;
  }
`;

export const HeaderInner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: 70% 30%;
  }
`;

export const HeaderInfo = styled.div``;

export const HeaderJobTitle = styled.h3`
  color: ${({ theme }) => theme.fontLightColor};
  font-weight: 300;
  font-size: 1.75rem;
  margin-bottom: 1rem;

  @media (max-width: 1100px) {
    margin-bottom: 0.2rem;
    font-size: 1.25rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;

  @media (max-width: 1100px) {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
`;

export const HeaderSubTitle = styled.p`
  font-weight: 300;
  margin-bottom: 1.5rem;

  @media (max-width: 1100px) {
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }
`;

export default Header;
