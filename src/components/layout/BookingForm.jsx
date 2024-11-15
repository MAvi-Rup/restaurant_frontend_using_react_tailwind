import React from "react";

const BookingForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      guests: event.target.guests.value,
      totalPeople: event.target.totalPeople.value,
      reservationDate: event.target.reservationDate.value,
      message: event.target.message.value,
    };
    console.log(formData);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${require("../../assest/image/bgimage.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 mt-10 font-poppins mb-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="pt-20">
            <div className="text-red-500 mb-2">
              <span className="w-2 h-2 bg-red-500 inline-block mr-2"></span>
              Book Now
            </div>
            <div className="text-5xl font-bold text-white font-bebas">
              Book Your Table
            </div>
            <p className="font-roboto pt-3 text-white lg:pr-5 pr-0">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
            <form className="mt-5 mb-20" onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="font-roboto">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name*"
                    className="w-full bg-transparent border border-gray-500 rounded-md p-2 text-white focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    placeholder="Your Guests*"
                    className="w-full bg-transparent border border-gray-500 rounded-md p-2 text-white focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
                <div>
                  <input
                    type="date"
                    id="reservationDate"
                    name="reservationDate"
                    placeholder="Reservation Date*"
                    className="w-full bg-transparent border border-gray-500 rounded-md p-2 text-white focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="totalPeople"
                    name="totalPeople"
                    placeholder="Total People*"
                    className="w-full bg-transparent border border-gray-500 rounded-md p-2 text-white focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  className="w-full bg-transparent border border-gray-500 rounded-md p-2 text-white focus:outline-none focus:border-red-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md mt-4"
              >
                BOOK NOW
              </button>
            </form>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
