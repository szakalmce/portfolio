import React from "react";
import styled from "styled-components";

const SkillsItem = ({ name, value }) => {
  return (
    <Wrapper>
      <Value>{value}%</Value>
      <Details
        data-aos-offset="-200"
        data-aos-once="true"
        once="true"
        data-aos="fade-right"
      >
        <h4>{name}</h4>
        <Bar value={value} />
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Value = styled.h1`
  margin-right: 1rem;
`;

const Details = styled.div`
  width: 100%;

  h4 {
    font-weight: 300;
    margin-bottom: 0.3rem;
  }
`;

const Bar = styled.div`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.bgColor};
  height: 10px;
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => `${props.value}%` || "0%"};
    background-color: ${({ theme }) => theme.mainColor};
  }
`;

export default SkillsItem;
