import React, { useState } from 'react';

function AboutUs() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', title: 'Бидний хийдэг зүйл', content: 'Таны бизнест технологийн бодит тусыг бид хүргэх болно.' },
    { id: 'vision', title: 'Алсын хараа', content: 'Дэлхийн сүпэр дүпэр IT компани болох' },
    { id: 'goal', title: 'Зорилго', content: 'Харилцагч бүртээ сайхан сэтгэгдэл үлдээх.' }
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24 min-h-[calc(100vh-100px)]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Зураг хэсэг */}
        <div className="lg:w-1/2 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px] w-full">
            <img 
              src='https://stackbros.in/folio/landing/assets/images/about/07.jpg' 
              alt="ЗЭВ ТАБС ХХК" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-purple-800/20"></div>
          </div>
        </div>

        
        <div className="lg:w-1/2 w-full space-y-8">
          {/* Тайлбар хэсэг */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Бидний тухай
            </h2>

            <div className="flex flex-wrap items-center gap-6 md:gap-8">
                {/* Баг */}
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-3 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-600">+9</h3>
                    <p className="text-gray-600">Баг</p>
                </div>

                {/* Бүтээгдэхүүн */}
                <div className="flex items-center space-x-2 bg-purple-50 px-4 py-3 rounded-lg">
                    <h3 className="text-2xl font-bold text-purple-600">+10</h3>
                    <p className="text-gray-600">Бүтээгдэхүүн</p>
                </div>

                {/* Хэрэглэгч */}
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-3 rounded-lg">
                    <h3 className="text-2xl font-bold text-green-600">+100</h3>
                    <p className="text-gray-600">Хэрэглэгч</p>
                </div>
                </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
              ЗЭВ ТАБС ХХК нь интернет орчинд суурилсан цахим системийг, шинээр төрүүлэн ажилласаар байна. 
              Бизнес эрхлэгчдийн үйл ажиллагааг сайжруулахын тулд тасралтгүй хөгжүүлэлттэй цогц технологийн 
              шинэчлэлтийг зах зээлд нэвтрүүлэх чин хүсэл эрмэлзэлтэйгээр ажиллаж байна.
            </p>
          </div>

          {/* Tabs хэсэг */}
          <div className="space-y-6">
            <div className="flex border-b border-gray-200">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-6 font-semibold text-base transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-blue-500'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Итвэхтэй товч */}
            <div className="bg-gray-50 rounded-xl p-6 transition-all duration-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                {tabs.find(tab => tab.id === activeTab)?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;