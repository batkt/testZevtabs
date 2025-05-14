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
      <div className="w-full h-[20000px] top-0 left-0 ">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="products" element={<Products />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
