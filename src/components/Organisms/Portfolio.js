import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../Atoms/Title";
import { projects } from "../../Assets/data";
import PortfolioItem from "../Molecules/PortfolioItem";
import AOS from "aos";

const Portfolio = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(projects)
      : setFilteredImages(projects.filter((item) => item.tag === tag));
  }, [tag]);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 500);
    setActive(false);
  }, [tag]);

  console.log(active);

  return (
    <Wrapper>
      <Title className="center">My Portfolio</Title>
      <ButtonsContainer>
        <Button
          handlerClick={setTag}
          name="all"
          active={tag === "all" ? true : false}
        />
        <Button
          handlerClick={setTag}
          name="branding"
          active={tag === "branding" ? true : false}
        />
        <Button
          handlerClick={setTag}
          name="photography"
          active={tag === "photography" ? true : false}
        />
        <Button
          handlerClick={setTag}
          name="fashion"
          active={tag === "fashion" ? true : false}
        />
        <Button
          handlerClick={setTag}
          name="product"
          active={tag === "product" ? true : false}
        />
      </ButtonsContainer>
      <div className="container">
        <ItemsWrapper className="category">
          {filteredImages.map((item) => (
            <PortfolioItem active={active} {...item} />
          ))}
        </ItemsWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5rem 0;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.bgDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 2s ease-in-out;
`;

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1100px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  list-style: none;
  margin: 0;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

const Button = ({ name, handlerClick, active }) => {
  return (
    <ButtonWrapper
      className={`${active ? "PortfolioActive" : null}`}
      onClick={() => handlerClick(name)}
    >
      {name}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.white};

  @media (max-width: 1100px) {
    font-size: 0.85rem;
  }

  &:hover {
    color: ${({ theme }) => theme.mainColor};
  }

  &.PortfolioActive {
    color: ${({ theme }) => theme.mainColor};
  }
`;

export default Portfolio;
