import React from "react";
import styled from "styled-components";

const CoursesItem = ({ years, name, school }) => {
  return (
    <Wrapper>
      <Data>{years}</Data>
      <Name>{name}</Name>
      <School>{school}</School>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Data = styled.p`
  background-color: ${({ theme }) => theme.mainColor};
  display: inline-block;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.white};
`;

const Name = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: 300;
`;

const School = styled.h5`
  font-weight: 300;
  color: ${({ theme }) => theme.fontLightColor};
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.fontLightColor};
  padding-bottom: 0.5rem;
`;

export default CoursesItem;
