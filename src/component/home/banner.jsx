import React from "react";
import { BsHandThumbsUpFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${" banner_bg.jpg"})` }}
        className="bg-cover bg-no-repeat bg-center"
      >
        <div className="w-full max-w-[1280px] mx-[auto] p-4 pb-24 grid grid-cols-1 md:grid-cols-2">
          <Fade top>
            <div>
              <div className="flex text-xl items-center justify-center text-gray-700 bg-white max-w-[480px] rounded-full py-3 ">
                <BsHandThumbsUpFill className="text-orange-400" />
                <p>100% Trusted car rental platform in the World</p>
              </div>

              <h1 className="text-5xl font-black pt-5">Find Your Best</h1>
              <h1 className="text-5xl font-black pt-4 text-orange-400">
                Dream Car for Rental
              </h1>
              <p className="text-gray-500 max-w-[540px] pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button className="text-xl text-black border-black hover:border-orange-600 bg-white rounded-lg border-2  px-4 py-1 mt-4 hover:bg-orange-500 hover:text-white transition-colors duration-500">
                view all cars &#10509;
              </button>
            </div>
          </Fade>
          <Fade right>
            <div>
              <img className="w-full" src="bannerCar.png" alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Banner;
