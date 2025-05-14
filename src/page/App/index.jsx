import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./style.module.css";
import Sidebar from "../../components/Sidebar";
import Products from "../Products";
import Footer from "../../components/Footer";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <>
      <div className="w-full h-full  top-0 left-0 ">
        <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="products" element={<Products />} />
          <Route path="service" element={<Products />} />
          <Route path="contact" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
