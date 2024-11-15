import React, { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FlowerIcon from "../../assest/image/flower.svg";

const ReviewSection = () => {
  const swiperRef = useRef(null);

  const reviews = [
    {
      text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
      author: "Khalid Al-Dawsary",
      location: "Jeddah, Saudi",
    },
    {
      text: "The Chicken Mandi here is absolutely delicious! Perfectly seasoned and cooked to perfection. I highly recommend it to anyone looking for a tasty and authentic Middle Eastern dish.",
      author: "Sarah Patel",
      location: "Dubai, UAE",
    },
    {
      text: "I'm so glad I tried the Chicken Mandi here. The flavors are amazing and the meat is so tender and juicy. It's quickly become one of my favorite dishes on the menu.",
      author: "Ethan Wong",
      location: "Singapore",
    },
  ];

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${require("../../assest/image/tom.png")}), url(${require("../../assest/image/grass.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 40%, 15% auto",
        backgroundPosition: "left, right bottom",
        opacity: 0.95,
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 mt-10 font-poppins mb-10">
        <div className="flex justify-between items-center mb-16">
          <div>
            <div className="text-red-500 mb-2">
              <span className="w-2 h-2 bg-red-500 inline-block mr-2"></span>
              Crispy, Every Bite Taste
            </div>
            <div className="text-3xl font-bold">
              What Some of my Customers Say
            </div>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-gray-200 p-3 hover:bg-gray-300"
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
              className="bg-gray-200 p-3 hover:bg-gray-300"
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

        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2  gap-0 w-full">
                <div className="bg-yellow-500 relative w-full h-full pt-8 pl-6">
                  <div className="p-10">
                    <p className="text-black h-full flex items-center">
                      {review.text}
                    </p>
                    <div className="flex justify-end mt-4 text-black">
                      <div>
                        <div className="font-bold">{review.author}</div>
                        <div className="text-sm">{review.location}</div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={FlowerIcon}
                    alt="Flower Icon"
                    className="absolute bottom-0 -left-5 w-24 h-24"
                  />
                </div>
                <div className="relative w-full h-full">
                  <img
                    src="/Video.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
