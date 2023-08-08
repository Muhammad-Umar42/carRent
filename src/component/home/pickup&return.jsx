import React from "react";
import { Fade } from "react-reveal";
import { AiOutlineSearch } from "react-icons/ai";

const Pickup = () => {
  return (
    <>
      <div className="bg-[#fcfbfb] md:p-16 p-44 relative flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 p-6 w-full max-w-screen-xl mx-[auto] shadow-md bg-white absolute bottom-10 rounded-xl border-orange-300 border border-dotted ">
          <Fade bottom>
            <div>
              <label className="block font-bold pb-2">
                Pickup Location
              </label>
              <input
                className="w-[90%] bg-[#fcfbfb] px-4 py-2"
                type="text"
                placeholder=" Enter City, Airport, or Address "
              />
            </div>
          </Fade>

          <Fade bottom>
            <div>
              <label className="block font-bold pb-2 md:pt-0 pt-5">
                {" "}
                Pickup Date{" "}
              </label>
              <div className="flex justify-between w-[90%]">
                <input
                  className="w-[48%] bg-[#fcfbfb] px-4 py-2"
                  type="text"
                  placeholder="4/11/2023"
                />
                <input
                  className="w-[48%] bg-[#fcfbfb] px-4 py-2"
                  type="text"
                  placeholder="11:00AM"
                />
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div>
              <label className="block font-bold pb-2 md:pt-0 pt-5">
                Return Date
              </label>
              <div className="flex justify-between">
                <input
                  className="w-[48%] bg-[#fcfbfb] px-4 py-2"
                  type="text"
                  placeholder="4/11/2023"
                />
                <input
                  className="w-[48%] bg-[#fcfbfb] px-4 py-2"
                  type="text"
                  placeholder="11:00AM"
                />
              </div>
            </div>
          </Fade>

          <div className="flex justify-center items-end">
            <botton className="cursor-pointer py-2 px-8 bg-orange-400 text-white font-bold flex items-center gap-2">
              <AiOutlineSearch /> Search
            </botton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pickup;
