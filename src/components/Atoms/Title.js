import React from "react";
import styled from "styled-components";

const Title = ({ children, className }) => {
  return <TitleWrapper className={className}>{children}</TitleWrapper>;
};

export const TitleWrapper = styled.h1`
  position: relative;
  display: inline-block;
  padding-bottom: 0.75rem;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;

  &.left {
    &::after {
      content: "";
      position: absolute;
      display: block;
      background-color: ${({ theme }) => theme.mainColor};
      height: 2px;
      width: 40%;
      bottom: 0;
      left: 0;
    }
  }

  &.center {
    &::after {
      content: "";
      position: absolute;
      display: block;
      background-color: ${({ theme }) => theme.mainColor};
      height: 2px;
      width: 40%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export default Title;
