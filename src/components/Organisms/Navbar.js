import React, { useState } from "react";
import Nav from "../Molecules/Nav";
import styled from "styled-components";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <NavbarWrapper>
      <div className="container">
        <NavbarInner>
          <Logo>Krozo</Logo>
          <Nav toggle={toggle} setToggle={setToggle} />
        </NavbarInner>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  height: 100px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
`;

const NavbarInner = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
`;

const Logo = styled.h1``;

export default Navbar;
