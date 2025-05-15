import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../Hamburger";
import EnglishFlag from "../../assets/english-flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const productLinks = [
  {
    name: "ParkEase",
    icon: "https://www.zevtabs.mn/parkEaseLogo.svg",
    path: "/products/parkease",
  },
  {
    name: "Rently",
    icon: "https://www.zevtabs.mn/rentlyLogo.svg",
    path: "/products/rently",
  },
  {
    name: "PosEase",
    icon: "https://www.zevtabs.mn/posEaseLogo.svg",
    path: "/products/posease",
  },
  {
    name: "HiCar",
    icon: "https://www.zevtabs.mn/hicarLogo.svg",
    path: "/products/hicar",
  },
  {
    name: "ToyLand",
    icon: "https://www.zevtabs.mn/toyLandLogo.svg",
    path: "/products/toyland",
  },
];

const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full h-[100px] fixed bg-[#F9F4FF] z-50 top-0 left-0 flex justify-between items-center">
      <div className="max-w-6xl mx-auto flex justify-between w-full items-center">
        <div className="flex space-x-2 flex-1 items-center">
          <p>
            <img
              src="https://www.zevtabs.mn/_next/image?url=%2Flogo.png&w=128&q=75"
              alt="logo"
            />
          </p>
          <div className="text-[32px] text-black">ZevTabs</div>
        </div>

        <div className="hidden xl:flex text-lg justify-center items-center flex-1 space-x-8 relative">
          <button className="text-black px-[18px] rounded-[5px] py-[7px] hover:text-[#5f41fb] hover:bg-[#f2f0ff]">
            <NavLink
              onClick={() => props.scrollToSection(props.homeRef)}
              to="/"
            >
              Эхлэл
            </NavLink>
          </button>

          <div
            className="relative  "
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => props.scrollToSection(props.productsRef)}
              className="text-black flex items-center gap-2 px-[18px] rounded-[5px] py-[7px] hover:text-[#5f41fb] hover:bg-[#f2f0ff]"
            >
              <span>Бүтээгдэхүүн</span>
              <FontAwesomeIcon icon={faArrowDown} className="text-sm" />
            </button>

            {dropdownOpen && (
              <div className="absolute  top-full left-0 mt-0 w-auto bg-white shadow-lg rounded-md z-50">
                {productLinks.map((product) => (
                  <button
                    key={product.name}
                    to={productLinks.path}
                    className="flex h-[60px] items-center hover:cursor-pointer  w-[200px] px-4 py-2 hover:bg-gray-100 "
                  >
                    <img
                      src={product.icon}
                      alt={product.name}
                      className="w-5 h-5 mr-2"
                    />
                    <span className="text-[18px] text-black hover:text-[#5f41fb]">
                      {product.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="text-black px-[18px] rounded-[5px] py-[7px] hover:text-[#5f41fb] hover:bg-[#f2f0ff]">
            <NavLink
              onClick={() => props.scrollToSection(props.serviceRef)}
              to="service"
            >
              Үйлчилгээ
            </NavLink>
          </button>

          <button
            onClick={() => props.scrollToSection(props.footerRef)}
            className="text-black px-[18px] rounded-[5px] py-[7px] hover:text-[#5f41fb] hover:bg-[#f2f0ff] whitespace-nowrap"
          >
            <NavLink to="/contact">Холбоо барих</NavLink>
          </button>
        </div>

        <div className="hidden xl:flex flex-1 justify-end h-[32px] w-auto">
          <img src={EnglishFlag} alt="English" className="h-full w-auto" />
        </div>

        <Hamburger
          toggleSidebar={props.toggleSidebar}
          showSidebar={props.showSidebar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
