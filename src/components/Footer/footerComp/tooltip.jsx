import React from "react";

const Tooltip = ({ children, text, position = "top" }) => {
  let positionClasses = "";

  switch (position) {
    case "top":
      positionClasses = "bottom-full left-1/2 -translate-x-1/2 mb-2";
      break;
    case "bottom":
      positionClasses = "top-full left-1/2 -translate-x-1/2 mt-2";
      break;
    case "left":
      positionClasses = "right-full top-1/2 -translate-y-1/2 mr-2";
      break;
    case "right":
      positionClasses = "left-full top-1/2 -translate-y-1/2 ml-2";
      break;
    default:
      positionClasses = "bottom-full left-1/2 -translate-x-1/2 mb-2";
  }

  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute ${positionClasses} z-10 whitespace-nowrap 
          bg-black text-white text-xs rounded px-2 py-1 opacity-0 
          group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
