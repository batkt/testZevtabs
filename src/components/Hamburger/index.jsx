import React from "react";

const Hamburger = (props) => {
  return (
    <div
      onClick={props.toggleSidebar}
      className="flex flex-col justify-between w-6 h-5 cursor-pointer xl:hidden"
    >
      <div className="h-[3px] bg-black rounded"></div>
      <div className="h-[3px] bg-black rounded"></div>
      <div className="h-[3px] bg-black rounded"></div>
    </div>
  );
};

export default Hamburger;
