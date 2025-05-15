import React from "react";

function OurService() {
  const services = [
    {
      title: "Бүх төрлийн хөгжүүлэлт",
      description: "Вэб апп, гар утасны апп, систем",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Гар утасны апп хөгжүүлэлт",
      description: "Технологийн шийдлүүд",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Төслийн удирдлагын шуурхай баг",
      description: "Төслийн бүх шатны удирдлага болон хяналт",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Технологийн зөвлөгөө",
      description: "Технологийн сүүлийн үеийн шийдлүүд",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Title хэсэг */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Бидний үйлчилгээ
          </h2>
        </div>

        {/* Body хэсэг */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Services */}
          <div className="lg:w-1/2 space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-5 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Img оруулах */}
          <div className="lg:w-1/2 w-full h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[512px]">
              <img
                src="https://www.zevtabs.mn/image%203.png"
                alt="Үйлчилгээ"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
