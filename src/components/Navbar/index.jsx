import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../Hamburger";
import EnglishFlag from "../../assets/english-flag.png";

const Navbar = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrolY > 800);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll");
  });

  const navLinkClasses = ({ isActive }) =>
    `text-[16px] py-[8px] px-[16px] rounded transition-colors  duration-200 whitespace-nowrap ${
      isActive
        ? "bg-[#EBE7FF] text-[#673AB7] font-semibold"
        : "bg-white text-[#141727]"
    }`;

  return (
    <nav className="text-[#141727] w-full h-[100px] bg-[#fff] z-50 top-0 left-0  flex justify-between items-center px-[110.4px]">
      <div className="flex space-x-2 flex-1 items-center">
        <p>
          <img
            src="https://www.zevtabs.mn/_next/image?url=%2Flogo.png&w=128&q=75"
            alt=""
          />
        </p>
        <div className="text-[32px]">ZevTabs</div>
      </div>

      <div className="hidden xl:flex text-lg justify-center  items-center flex-1 space-x-8">
        <NavLink to="/" className={navLinkClasses}>
          Эхлэл
        </NavLink>
        <NavLink to="/products" className={navLinkClasses}>
          Бүтээгдэхүүн
        </NavLink>
        <NavLink to="/service" className={navLinkClasses}>
          Үйлчилгээ
        </NavLink>
        <NavLink
          to="/contact"
          className={(props) => `${navLinkClasses(props)} whitespace-nowrap`}
        >
          Холбоо барих
        </NavLink>
      </div>
      <div className="hidden xl:flex flex-1 justify-end h-[32px] w-auto">
        <img src={EnglishFlag} alt="English" className="h-full w-auto" />
      </div>

      <Hamburger toggleSidebar={props.toggleSidebar} />
    </nav>
  );
};

export default Navbar;
