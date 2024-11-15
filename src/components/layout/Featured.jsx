import React, { useState } from "react";

const tabContent = {
  about: {
    title: "EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel nibh consectetur urna facilisis pellentesque liberum viverra tempus. Lorem ipsum dolor sit metus enim velit nunc dolor incididunt et labore et magna.",
  },
  experience: {
    title: "OUR YEARS OF EXPERIENCE",
    description:
      "With over 50+ market experiences, we've perfected our craft to bring you the finest dining experience possible.",
  },
  contact: {
    title: "GET IN TOUCH WITH US",
    description:
      "Reach out to us for reservations, catering services, or any questions about our menu and services.",
  },
};

const Featured = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 mt-10 font-poppins mb-5 lg:mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src="/feature1.png"
            alt="Featured"
            className="rounded-lg w-full h-auto shadow-xl"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b">
            {["About", "Experience", "Contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`relative px-4 py-2 transition-colors duration-300 ${
                  activeTab === tab.toLowerCase()
                    ? "text-red-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase() && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 transition-all duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold transition-all duration-300">
              {tabContent[activeTab].title}
            </h2>
            <p className="text-gray-600 transition-all duration-300">
              {tabContent[activeTab].description}
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500 transition-colors">
                ABOUT MORE
              </button>
              <div className="flex items-center gap-2">
                <span className="text-red-600">📞</span>
                <span>+88 3426 739 485</span>
              </div>
            </div>
          </div>

          {/* Static Features */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Fast Delivery */}
        <div className="flex items-center gap-3">
          <div className="p-5 border-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-red-50">
            <img
              src="/images/delivery1.png"
              alt="Fast Delivery"
              className="w-6 h-6"
            />
          </div>
          <div>
            <h3 className="font-bebas text-[30px] font-semibold">
              FAST DELIVERY
            </h3>
            <p className="text-sm text-gray-600">Within 30 minutes</p>
          </div>
        </div>

        {/* Absolute Dining */}
        <div className="flex items-center gap-3">
          <div className="p-5 border-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-red-50">
            <img
              src="/images/delivery2.png"
              alt="Absolute Dining"
              className="w-6 h-6"
            />
          </div>
          <div>
            <h3 className="font-bebas text-[30px] font-semibold ">
              ABSOLUTE DINING
            </h3>
            <p className="text-sm text-gray-600">Best buffet restaurant</p>
          </div>
        </div>

        {/* Pickup Delivery */}
        <div className="flex items-center gap-3">
          <div className="p-5 border-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-red-50">
            <img
              src="/images/delivery3.png"
              alt="Pickup Delivery"
              className="w-6 h-6"
            />
          </div>
          <div>
            <h3 className="font-bebas text-[30px] font-semibold">
              PICKUP DELIVERY
            </h3>
            <p className="text-sm text-gray-600">Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
