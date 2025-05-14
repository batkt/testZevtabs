import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#0F1123] text-white pb-6 pt-24 w-full fixed bottom-0 left-0">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-10 w-full">
        <div className="mb-10 md:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://www.zevtabs.mn/_next/image?url=%2Flogo.png&w=128&q=75"
              alt="LogoZevtabs"
              className="w-10 h-10"
            />
            <h2 className="text-2xl font-bold">Zevtabs LLC</h2>
          </div>
          <p className="text-gray-400 mb-6 text-left">
            Дэвшилтэд технологи ашиглан таны бизнесийн ашгийг нэмэгдүүлж,
            хяналтыг сайжруулна
          </p>
          <div>
            <div className="text-[#475569] text-[16px] font-semibold mb-1">
              Холбоо барих
            </div>
            <div className="text-[#475569] text-[13px] mb-1">
              ХУД, 15-р хороо, Ихнаяд таур 1211 тоот
            </div>
            <div className="text-[#475569] text-[13px] mb-1">
              (+976) 77072707
            </div>
            <div className="text-[#475569] text-[13px]">info@zevtabs.mn</div>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-8 text-left ml-16">
          {/* Бүтээгдэхүүн */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Бүтээгдэхүүн
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Rently", tooltip: "Түрээсийн платформ" },
                { name: "HiCar", tooltip: "Таксины үйлчилгээ" },
                {
                  name: "ParkEase",
                  badge: "Last update",
                  badgeColor: "bg-purple-500",
                  tooltip: "Паркын систем",
                },
                { name: "PosEase", tooltip: "Борлуулалтын систем" },
                { name: "ToyLand", tooltip: "Хүүхдийн тоглоом" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 group relative"
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#646cff] transition-colors duration-300 relative"
                    onMouseMove={(e) => {
                      const tooltip = document.getElementById(
                        `tooltip-${index}`
                      );
                      if (tooltip) {
                        tooltip.style.left = `${e.clientX + 10}px`;
                        tooltip.style.top = `${e.clientY - 10}px`;
                      }
                    }}
                  />
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#646cff] transition-colors duration-300 relative"
                    onMouseMove={(e) => {
                      const tooltip = document.getElementById(
                        `tooltip-${index}`
                      );
                      if (tooltip) {
                        tooltip.style.left = `${e.clientX + 15}px`;
                        tooltip.style.top = `${e.clientY + 15}px`;
                      }
                    }}
                  >
                    {item.name}
                    {item.tooltip && (
                      <span
                        id={`tooltip-${index}`}
                        className="fixed hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none z-50"
                        style={{ left: 0, top: 0 }}
                      >
                        {item.tooltip}
                      </span>
                    )}
                  </a>
                  {item.badge && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded text-white ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Тусламж */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Тусламж</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#646cff] transition-colors duration-300"
                >
                  Түгээмэл асуултууд
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#646cff] transition-colors duration-300"
                >
                  Үйлчилгээний нөхцөл
                </a>
                <span className="bg-green-500 text-xs px-2 py-0.5 rounded text-white">
                  New
                </span>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#646cff] transition-colors duration-300"
                >
                  Нууцлалын бодлого
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#646cff] transition-colors duration-300"
                >
                  Санал хүсэлт
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Доод хэсэг */}
      <div className="container mx-auto px-4 md:px-6 border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        © ZEV-TABS LLC 2025. Бүх эрх хуулиар баталгаажсан
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Social buttons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-[#1a1a1a] cursor-pointer transition duration-300 hover:border-[#646cff]  focus:outline-webkit-focus-ring-color">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-[#1a1a1a] cursor-pointer transition duration-300 hover:border-[#646cff]  focus:outline-webkit-focus-ring-color">
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-[#1a1a1a] cursor-pointer transition duration-300 hover:border-[#646cff]  focus:outline-webkit-focus-ring-color">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-[#1a1a1a] cursor-pointer transition duration-300 hover:border-[#646cff]  focus:outline-webkit-focus-ring-color">
              <FontAwesomeIcon icon={faYoutube} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
