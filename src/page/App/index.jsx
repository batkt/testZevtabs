import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./style.module.css";
import Sidebar from "../../components/Sidebar";
import Products from "../Products";
import Footer from "../../components/Footer";
import Home from "../Home";
import Technology from "../../components/Technology";
import ProductsSection from "../../components/ProductsSection";
import Service from "../../page/ourservice";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const productsRef = useRef(null);
  const technologyRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full h-auto  top-0 left-0 ">
        <Navbar
          toggleSidebar={toggleSidebar}
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          serviceRef={serviceRef}
          productsRef={productsRef}
          technologyRef={technologyRef}
          footerRef={footerRef}
        />
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={technologyRef}>
          <Technology />
        </div>
        <div ref={serviceRef}>
          <Service />
        </div>
        <div ref={productsRef}>
          <Products />
        </div>
        <ProductsSection />
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
