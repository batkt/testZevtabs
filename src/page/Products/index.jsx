import React, { useState } from "react";

function Products() {
  const products = [
    {
      id: 1,
      url: "/products/parkEase",
      name: "ParkEase",
      title: "Зогсоолын төлбөр тооцооны систем",
      description:
        "Камер болон хаалтын төхөөрөмжтэй холбогдож төлбөрийг бүртгэн и-баримт хэвлэх боломжтой удирдлагын систем ба таны хүссэн тариф болон цагийн хязгаарлалтаар тооцоолон бодох чадвартай...",
      logo: "https://www.zevtabs.mn/parkEaseLogo.svg",
      image: "https://www.zevtabs.mn/ParkEase1.svg",
    },
    {
      id: 2,
      url: "/products/rently",
      name: "Rently",
      title: "ТАЛБАЙН ТҮРЭЭСИЙН СИСТЕМ",
      description:
        "Түрээсийн болон эзэмшлийн талбайн гэрээг удирдан зохицуулах, мөнгөн урсгалыг хянах...",
      logo: "https://www.zevtabs.mn/rentlyLogo.svg",
      image: "https://www.zevtabs.mn/toyLand1.svg",
    },
    {
      id: 3,
      url: "/products/posease",
      name: "PosEase",
      title: "Кассын төлбөр тооцооны систем",
      description:
        "Олон төрлийн төлбөрийн шийдлийг багтаасан бараа материалын үлдэгдэл хөтлөн удирдлагын хяналтыг сайжруулах...",
      logo: "https://www.zevtabs.mn/posEaseLogo.svg",
      image: "https://www.zevtabs.mn/PosEase1.svg",
    },
    {
      id: 4,
      url: "/products/hicar",
      name: "Hi-Car",
      title: "Зогсоолын төлбөр тооцооны систем",
      description:
        "Жолоочийг угтахаас үдэх хүртэлх засвар урсгалыг бүртгэлжүүлэн...",
      logo: "https://www.zevtabs.mn/hicarLogo.svg",
      image: "https://www.zevtabs.mn/hicar1.svg",
    },
    {
      id: 5,
      url: "/products/toyland",
      name: "Toyland",
      title: "Тоглоомын төвийн захиалгааны систем",
      description: "Гар ажиллагаатай процессуудад баяртай гэж хэлээрэй...",
      logo: "https://www.zevtabs.mn/toyLandLogo.svg",
      image: "https://www.zevtabs.mn/toyLand1.svg",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Манай Бүтээгдэхүүнүүд
        </h1>

        {/* Зөвхөн нэр болон лого харуулах хэсэг */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-12 h-12 mb-2"
                />
                <p className="text-center text-sm font-medium text-gray-800">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Дэлгэрэнгүй хэсэг */}
        {selectedProduct && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:w-1/2">
                <div className="flex items-center mb-6">
                  <img
                    src={selectedProduct.logo}
                    alt={selectedProduct.name}
                    className="h-16 w-16 mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedProduct.name}
                    </h2>
                    <h3 className="text-xl text-blue-600">
                      {selectedProduct.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {selectedProduct.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                    Дэлгэрэнгүй
                  </button>
                  <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                    Холбоо барих
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
