import React from "react";

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${require("../../assest/image/footerbg.jpg")})`,
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 mt-10 font-poppins">
        <div className="text-center pt-10 text-white text-5xl font-bebas">
          We ready to have you the best dining experiences
        </div>

        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="mr-12">
            <img src="/images/time.png" alt="Opening Hours" className="mb-2" />
            <p className="font-bebas text-xl text-white">Opening hours</p>
            <p className="font-bebas text-xl text-white">Monday - Sunday</p>
            <p className="font-bebas text-xl text-white">9:00 AM to 11:30 PM</p>
          </div>

          <div className="mr-12">
            <img src="/images/phone.png" alt="Let's Talk" className="mb-2" />
            <p className="font-bebas text-xl text-white">Let's Talk</p>
            <p className="font-bebas text-xl text-white">
              Phone: 1-800-222-4545
            </p>
            <p className="font-bebas text-xl text-white">Fax: 1-800-222-4545</p>
          </div>

          <div className="mr-12">
            <img src="/images/email.png" alt="Book a Table" className="mb-2" />
            <p className="font-bebas text-xl text-white">Book a Table</p>
            <p className="font-bebas text-xl text-white">
              Email: demo@website.com
            </p>
            <p className="font-bebas text-xl text-white">
              Support: support@website.com
            </p>
          </div>

          <div>
            <img
              src="/images/location.png"
              alt="Our Address"
              className="mb-2"
            />
            <p className="font-bebas text-xl text-white">Our Address</p>
            <p className="font-bebas text-xl text-white">
              123 Street New York City, United
            </p>
            <p className="font-bebas text-xl text-white">States Of America</p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/facebook.png" alt="Facebook" className="mr-6" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/linkdin.png" alt="LinkedIn" className="mr-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/x.png" alt="Twitter" className="mr-6" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
        </div>

        <div className="text-center text-white font-bebas text-xl mt-8 pb-10">
          © 2023 All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
