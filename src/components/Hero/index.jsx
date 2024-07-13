import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-24 lg:mt-32">
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="flex flex-col gap-8"
      >
        <div className="px-5 lg:px-16 space-y-7">
          <h1 className="text-5xl font-bold capitalize">
            Empower Your Journey with Green Technology
          </h1>
          <p className="text-gray-500">
            Experience sustainable mobility with EcoDrive Electric Cars. Enjoy
            an eco-friendly ride with superior efficiency and performance,
            contributing to a cleaner planet with every mile.
          </p>
        </div>

        <div className="bg-[#5070d9] w-72 rounded-e-full py-4">
          <div className="px-5 lg:px-16 flex flex-col gap-2">
            <h1 className="text-xl font-bold text-white">save up to 50%</h1>
            <p className="text-white">on your first order</p>

            <a
              href="#car-list"
              className="bg-[#ff7803] text-white py-1 px-6 rounded-full uppercase font-bold text-md w-36 text-center"
            >
              shop now
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="overflow-hidden md:block lg:block hidden "
      >
        <img
          className="mt-20 transition-transform duration-300 transform hover:scale-105"
          src="/img/car2.png"
          alt="Car"
        />
      </div>
    </div>
  );
};
