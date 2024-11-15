import React, { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularFoodItems = () => {
  const swiperRef = useRef(null);

  const foodItems = [
    {
      image: "/slider/slider1.png",
      title: "Veggies Burger",
      description: "Barbecue Italian cuisine pizza",
    },
    {
      image: "/slider/slider2.png",
      title: "Spacial Pizza",
      description: "Barbecue Italian cuisine pizza",
    },
    {
      image: "/slider/slider3.png",
      title: "Spacial French Fries",
      description: "Barbecue Italian cuisine",
    },
    {
      image: "/slider/slider4.png",
      title: "Cuisine Chicken",
      description: "Japanese Cuisine Chicken",
    },
    {
      image: "/slider/slider4.png",
      title: "Cuisine Chicken",
      description: "Japanese Cuisine Chicken",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${require("../../assest/image/tomato.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "left",
        opacity: 0.95,
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 mt-10 font-poppins mb-10">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-red-500  mb-2">
              {" "}
              <span className="w-2 h-2 bg-red-500 inline-block mr-2"></span>
              Crispy, Every Bite Taste
            </div>
            <div className="text-3xl font-bold">POPULAR FOOD ITEMS</div>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
            ref={swiperRef}
          >
            {foodItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularFoodItems;
