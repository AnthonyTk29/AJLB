import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Resume />
     
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
