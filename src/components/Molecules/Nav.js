import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const LinkWrapper = styled.div`
  display: flex;
  justify-self: flex-end;

  .bar-icon {
    display: none;
    cursor: pointer;
    @media (max-width: 1100px) {
      display: block;
    }
  }
`;

const LinkUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: red;

  @media (max-width: 1100px) {
    position: absolute;
    transform: translateY(100px);
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.5s ease-in-out;

    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
  }
`;

const LinkLi = styled.li`
  margin: 0 2rem;

  @media (max-width: 1100px) {
    display: block;
    background-color: violet;
    margin: 0rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fontLightColor};

  &:hover {
    color: ${({ theme }) => theme.mainColor};

    @media (max-width: 1100px) {
      background-color: ${({ theme }) => theme.mainColor};
      color: ${({ theme }) => theme.white};
    }
  }

  @media (max-width: 1100px) {
    color: ${({ theme }) => theme.fontLightColor};
    background-color: ${({ theme }) => theme.bgColor};
    display: block;
    text-align: center;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
  }
`;

const Nav = ({ toggle, setToggle }) => {
  return (
    <LinkWrapper>
      <FaBars onClick={() => setToggle(!toggle)} className="bar-icon" />
      <LinkUl className={`${toggle ? "active" : ""}`}>
        <LinkLi>
          <Link href="/">Home</Link>
        </LinkLi>
        <LinkLi>
          <Link href="/about">about</Link>
        </LinkLi>
        <LinkLi>
          <Link href="/service">service</Link>
        </LinkLi>
        <LinkLi>
          <Link href="/portfolio">portfolio</Link>
        </LinkLi>
        <LinkLi>
          <Link href="/blog">blog</Link>
        </LinkLi>
        <LinkLi>
          <Link href="/contact">contact</Link>
        </LinkLi>
      </LinkUl>
    </LinkWrapper>
  );
};

export default Nav;
