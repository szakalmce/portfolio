import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  font-size: 0.85rem;
  background-color: ${({ theme }) => theme.mainColor};
  border: none;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease-in-out;
  z-index: 2;
  overflow: hidden;

  &::after {
    content: "";
    background-color: #000;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 100%;
    transition: all 0.5s ease-in-out;
    z-index: -1;
  }

  &::before {
    content: "";
    background-color: #000;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: -100%;
    transition: all 0.5s ease-in-out;
    z-index: -1;
  }

  &:hover {
    &::after,
    &::before {
      left: 0;
    }
  }
`;

export default Button;
