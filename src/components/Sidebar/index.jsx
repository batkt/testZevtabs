import React from "react";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full bg-[#673AB7] text-white z-40 transition-transform duration-300 ease-in-out
        ${showSidebar ? "translate-y-[100.34px]" : "-translate-y-full"}
        xl:hidden
      `}
    >
      <div className="flex flex-col items-center space-y-6 py-8 text-lg">
        <button onClick={toggleSidebar}>✕</button>
        <a href="/" className="hover:text-gray-200">
          Эхлэл
        </a>
        <a href="/" className="hover:text-gray-200">
          Бүтээгдэхүүн
        </a>
        <a href="/" className="hover:text-gray-200">
          Үйлчилгээ
        </a>
        <a href="/" className="hover:text-gray-200">
          Холбоо барих
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
