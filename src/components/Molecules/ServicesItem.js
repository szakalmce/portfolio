import React from "react";
import styled from "styled-components";

const ServicesItem = ({ title, icon, desc }) => {
  return (
    <ItemWrapper>
      <ItemIcon>{icon}</ItemIcon>
      <ItemTitle>{title}</ItemTitle>
      <ItemP>{desc}</ItemP>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  color: black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.mainColor};
  }
`;

const ItemIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 0.5rem;
`;

const ItemTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const ItemP = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export default ServicesItem;
