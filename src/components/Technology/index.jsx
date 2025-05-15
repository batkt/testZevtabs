import React from "react";

const techStack = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
];

const Technology = () => {
  return (
    <div className="w-full flex flex-col justify-center h-[20rem] items-center">
      <p className="font-bold text-[#475569] text-6xl mb-[30px]">Технологи</p>
      <div className=" whitespace-nowrap p-4  rounded-xl  bg-white">
        <div className="flex gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[80px]"
            >
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium text-gray-700 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
