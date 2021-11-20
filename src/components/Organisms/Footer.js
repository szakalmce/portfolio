import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.{" "}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 1rem 0;
`;

export default Footer;
