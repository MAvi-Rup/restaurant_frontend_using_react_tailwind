import React from "react";
import heroFood from "../assest/image/home.png";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-red-700"
        style={{
          backgroundImage: `url(${require("../assest/image/backgroundimg.png")})`,
          backgroundRepeat: "repeat",
          opacity: 0.95,
        }}
      />

      {/* Hero Content */}
      <div className="relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-20">
            {/* Left Content */}
            <div className="md:w-1/2 text-white space-y-6 relative">
              <div className="bg-red-500 bg-opacity-30 p-8 rounded-lg">
                <h1 className="font-bebas text-7xl lg:text-[72px] font-bold leading-tight z-10">
                  TASTE THE AUTHENTIC
                  <br />
                  SAUDI CUISINE
                </h1>
              </div>
              <p className="text-lg opacity-90">
                Among the best Saudi chefs in the world, serving
                <br />
                you something beyond flavor.
              </p>
              <button className="bg-yellow-400 px-8 py-3 rounded-md text-black font-medium">
                EXPLORE MENU
              </button>
            </div>

            {/* Right Content - Image */}
            <div className="md:w-1/2 mt-10 md:mt-0 relative">
              <div className=" absolute -top-8 -right-8">
                <img src=" /star.png" alt="" />
              </div>
              <img
                src={heroFood}
                alt="Saudi Cuisine"
                className="rounded-lg shadow-2xl"
              />
              {/* Today's Offer Badge */}
              <div className="absolute -bottom-5 -right-5 bg-yellow-400 rounded-full p-2">
                <div className="  outline-[#BD1F17] rounded-full outline-dashed p-2">
                  <span className="text-black font-semibold">
                    TODAY
                    <br />
                    OFFER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
