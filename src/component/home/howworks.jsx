import React from "react";
import Cta from "./cta";

const Howworks = () => {
  return (
    <>
      <div className="bg-[#fcfbfb]">
        <div className="w-full max-w-screen-xl mx-[auto] text-center p-4">
         <Cta title="How It Works" color="black" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 pb-20">
            <div className="text-center">
              <div className="border-teal-600 border-2 border-dashed rounded-full w-full max-w-[100px] p-3 mx-[auto]">
                <img
                  className=" bg-teal-600 rounded-full p-4 mx-[auto]"
                  src="locationPin.svg"
                  alt=""
                />
              </div>
              <h1 className="font-extrabold text-2xl py-3">
                1. Choose Locationss
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            <div className="text-center py-8 md:py-0">
              <div className="border-yellow-500 border-2 border-dashed rounded-full w-full max-w-[100px] p-3 mx-[auto]">
                <img
                  className=" bg-yellow-500 rounded-full p-4 mx-[auto]"
                  src="locationPin.svg"
                  alt=""
                />
              </div>
              <h1 className="font-extrabold text-2xl py-3">
              2. Pick-Up Locations
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            <div className="text-center">
              <div className="border-black border-2 border-dashed rounded-full w-full max-w-[100px] p-3 mx-[auto]">
                <img
                  className=" bg-black rounded-full p-4 mx-[auto]"
                  src="locationPin.svg"
                  alt=""
                />
              </div>
              <h1 className="font-extrabold text-2xl py-3">
              3. Book your Car
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howworks;
