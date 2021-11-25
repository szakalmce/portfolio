import React, { useEffect } from "react";
import "normalize.css";
import Navbar from "../components/Organisms/Navbar";
import Header from "../components/Organisms/Header";
import About from "../components/Organisms/About";
import Services from "../components/Organisms/Services";
import Skills from "../components/Organisms/Skills";
import Portfolio from "../components/Organisms/Portfolio";
import Blog from "../components/Organisms/Blog";
import Contact from "../components/Organisms/Contact";
import Footer from "../components/Organisms/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  useEffect(() => {
    AOS.init({ delay: 1000, offset: "-100", once: "true" });
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Root;
