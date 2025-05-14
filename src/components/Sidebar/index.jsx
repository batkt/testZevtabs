import React from "react";

const Sidebar = ({ showSidebar }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full  text-white z-20 transition-transform duration-300 ease-in-out
        ${showSidebar ? "translate-y-[100.34px]" : "-translate-y-full"}
        xl:hidden
      `}
    >
      <div className="flex h-[48.8px] bg-white text-black items-start justify-center pl-6 flex-col  space-y-6 py-8 text-lg">
        <a href="/" className="hover:text-[#673AB7]">
          Эхлэл
        </a>
      </div>
      <div className="flex h-[48.8px] bg-white text-black items-start justify-center pl-6 flex-col  space-y-6 py-8 text-lg">
        <a href="/products" className="hover:text-[#673AB7]">
          Бүтээгдэхүүн
        </a>
      </div>
      <div className="flex h-[48.8px] bg-white text-black items-start justify-center pl-6 flex-col  space-y-6 py-8 text-lg">
        <a href="/service" className="hover:text-[#673AB7]">
          Үйлчилгээ
        </a>
      </div>
      <div className="flex h-[48.8px] bg-white text-black items-start justify-center pl-6 flex-col  space-y-6 py-8 text-lg">
        <a href="/contact" className="hover:text-[#673AB7]">
          Холбоо барих
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
