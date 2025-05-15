import React from "react";

const ProductsSection = () => {
  const techs = [
    {
      name: "ParkEase",
      icon: "https://www.zevtabs.mn/parkEaseLogo.svg",
    },
    {
      name: "Rently",
      icon: "https://www.zevtabs.mn/rentlyLogo.svg",
    },
    {
      name: "PosEase",
      icon: "https://www.zevtabs.mn/posEaseLogo.svg",
    },
    {
      name: "HiCar",
      icon: "https://www.zevtabs.mn/hicarLogo.svg",
    },
    {
      name: "ToyLand",
      icon: "https://www.zevtabs.mn/toyLandLogo.svg",
    },
  ];

  return (
    <div className="w-full flex justify-center h-[350px]">
      <div className="grid grid-cols-2  w-full max-w-6xl items-center ">
        <div className="text-4xl font-bold items-center">
          Бидний хийсэн <br /> бүтээгдэхүүнүүд
        </div>
        <div className="grid grid-cols-3 gap-12 ">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="w-[100px] h-[120px] items-center min-w-[60px]   "
            >
              <img src={tech.icon} alt={tech.name} className="w-full h-auto" />
              <span className="text-sm font-medium text-gray-700 text-center ">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsSection;
