import React from "react";
import "normalize.css";
import Navbar from "../components/Organisms/Navbar";
import Header from "../components/Organisms/Header";
import About from "../components/Organisms/About";

const Root = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
};

export default Root;
