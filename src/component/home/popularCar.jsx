import React from "react";
import Cta from "./cta";
import { Fade } from "react-reveal";

const PopularCar = () => {
  const data = [
    [
      {
        carname: "Lexus ES 300h",
        carimage: "ES_300h.jpg",
        carrating: "stars.jpg",
        desc: " ES 300h is a luxury car",
        rent: "160$",
      },
      {
        carname: "Fortuner",
        carimage: "fortuner.jpeg",
        carrating: "stars.jpg",
        desc: "fortuner is a popular car",
        rent: "100$",
      },
      {
        carname: "Revo",
        carimage: "revo.jpg",
        carrating: "stars.jpg",
        desc: "revo is a popular car",
        rent: "80$",
      },
    ],
    [
      {
        carname: "BMW",
        carimage: "bmwi8.webp",
        carrating: "stars.jpg",
        desc: "Bmw have two seter car",
        rent: "200$",
      },
      {
        carname: "Bmw i5 M60",
        carimage: "bmw-i5m60.jpg",
        carrating: "stars.jpg",
        desc: "M60 is a popular car",
        rent: "150$",
      },
      {
        carname: "BMW i7 X60",
        carimage: "BMW_i7m60.jpg",
        carrating: "stars.jpg",
        desc: "X60 is a popular car",
        rent: "120$",
      },
    ],
    [
      {
        carname: "Mercedes AMG G63 ",
        carimage: "g63.webp",
        carrating: "stars.jpg",
        desc: "AMG G63 is a popular car",
        rent: "260$",
      },
      {
        carname: "Mercedes-Maybach S-Class",
        carimage: "S-Class.jpg",
        carrating: "stars.jpg",
        desc: "Maybach S-Class is a luxurious car",
        rent: "300$",
      },
      {
        carname: "Maybach GLS 600 SUV",
        carimage: "gls600.jpg",
        carrating: "stars.jpg",
        desc: "GLS 600 is SUV",
        rent: "180$",
      },
    ],
    [
      {
        carname: "Audi R8 GT ",
        carimage: "audir8.webp",
        carrating: "stars.jpg",
        desc: "R8 is a sport car",
        rent: "200$",
      },
      {
        carname: "Audi A6",
        carimage: "A6.jpg",
        carrating: "stars.jpg",
        desc: "A6 is a popular car",
        rent: "100$",
      },
      {
        carname: "Audi e-tron",
        carimage: "e-tron.jpg",
        carrating: "stars.jpg",
        desc: "e-tron is a electric car",
        rent: "280$",
      },
    ],
  ];
  return (
    <>
      <div className="bg-[#e5f5f2] py-10 ">
        <div className="w-full max-w-screen-xl mx-[auto] text-center">
          <Cta title="Explore Most Popular Cars" color="black" />

          {/* ///////////////////// */}

          <nav
            className="flex justify-center md:space-x-8 space-x-2"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="hs-tab-active:bg-blue-600 hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 active"
              id="pills-with-brand-color-item-1"
              data-hs-tab="#pills-with-brand-color-1"
              aria-controls="pills-with-brand-color-1"
              role="tab"
            >
              Tayota
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-blue-600 hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 "
              id="pills-with-brand-color-item-2"
              data-hs-tab="#pills-with-brand-color-2"
              aria-controls="pills-with-brand-color-2"
              role="tab"
            >
              BMW
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-blue-600 hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 "
              id="pills-with-brand-color-item-3"
              data-hs-tab="#pills-with-brand-color-3"
              aria-controls="pills-with-brand-color-3"
              role="tab"
            >
              Mercedes
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-blue-600 hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 "
              id="pills-with-brand-color-item-4"
              data-hs-tab="#pills-with-brand-color-4"
              aria-controls="pills-with-brand-color-4"
              role="tab"
            >
              Audi
            </button>
          </nav>

          <div className="mt-10">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-3 px-3 md:px-0"
              id="pills-with-brand-color-1"
              role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-1"
            >
              {data[0].map((ele, ind) => {
                return (
                  <Fade bottom key={ind}>
                    <a
                      className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                      href="#"
                    >
                      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                          src={ele.carimage}
                          alt="Image Description"
                        />
                      </div>
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          {ele.carname}
                        </h3>
                        <img
                          className="w-full max-w-[100px] m-[auto]"
                          src="stars.jpg"
                          alt=""
                        />
                        <p className=" text-gray-800 dark:text-gray-400">
                          {ele.desc}
                        </p>
                        <div className="flex justify-around mt-1 bg-[#f2fafa] w-full max-w-xs mx-[auto]">
                          <h1 className="font-black text-xl">
                            PerDay
                          </h1>

                          <h1 className="font-black text-xl text-green-500">
                            {ele.rent}
                          </h1>
                        </div>
                      </div>
                    </a>
                  </Fade>
                );
              })}
            </div>
            <div
              className="hidden grid grid-cols-1 md:grid-cols-3 gap-3 px-3 md:px-0 "
              id="pills-with-brand-color-2"
              role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-2"
            >
              {data[1].map((ele, ind) => {
                return (
                  <Fade bottom key={ind}>
                    <a
                      className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                      href="#"
                    >
                      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                          src={ele.carimage}
                          alt="Image Description"
                        />
                      </div>
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          {ele.carname}
                        </h3>
                        <img
                          className="w-full max-w-[100px] m-[auto]"
                          src="stars.jpg"
                          alt=""
                        />
                        <p className=" text-gray-800 dark:text-gray-400">
                          {ele.desc}
                        </p>
                        <div className="flex justify-around mt-1 bg-[#f2fafa] w-full max-w-xs mx-[auto]">
                          <h1 className="font-black text-xl">
                            PerDay
                          </h1>

                          <h1 className="font-black text-xl text-green-500">
                            {ele.rent}
                          </h1>
                        </div>
                      </div>
                    </a>
                  </Fade>
                );
              })}
            </div>
            <div
              className="hidden grid grid-cols-1 md:grid-cols-3 gap-3 px-3 md:px-0 "
              id="pills-with-brand-color-3"
              role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-3"
            >
              {data[2].map((ele, ind) => {
                return (
                  <Fade bottom key={ind}>
                    <a
                      className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                      href="#"
                    >
                      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                          src={ele.carimage}
                          alt="Image Description"
                        />
                      </div>
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          {ele.carname}
                        </h3>
                        <img
                          className="w-full max-w-[100px] m-[auto]"
                          src="stars.jpg"
                          alt=""
                        />
                        <p className=" text-gray-800 dark:text-gray-400">
                          {ele.desc}
                        </p>
                        <div className="flex justify-around mt-1 bg-[#f2fafa] w-full max-w-xs mx-[auto]">
                          <h1 className="font-black text-xl">
                            PerDay
                          </h1>

                          <h1 className="font-black text-xl text-green-500">
                            {ele.rent}
                          </h1>
                        </div>
                      </div>
                    </a>
                  </Fade>
                );
              })}
            </div>
            <div
              className="hidden grid grid-cols-1 md:grid-cols-3 gap-3 px-3 md:px-0 "
              id="pills-with-brand-color-4"
              role="tabpanel"
              aria-labelledby="pills-with-brand-color-item-4"
            >
              {data[3].map((ele, ind) => {
                return (
                  <Fade bottom key={ind}>
                    <a
                      className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                      href="#"
                    >
                      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                          src={ele.carimage}
                          alt="Image Description"
                        />
                      </div>
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          {ele.carname}
                        </h3>
                        <img
                          className="w-full max-w-[100px] m-[auto]"
                          src="stars.jpg"
                          alt=""
                        />
                        <p className=" text-gray-800 dark:text-gray-400">
                          {ele.desc}
                        </p>
                        <div className="flex justify-around mt-1 bg-[#f2fafa] w-full max-w-xs mx-[auto]">
                          <h1 className="font-black text-xl">
                            PerDay
                          </h1>

                          <h1 className="font-black text-xl text-green-500">
                            {ele.rent}
                          </h1>
                        </div>
                      </div>
                    </a>
                  </Fade>
                );
              })}
            </div>
          </div>

          {/* ///////////////////// */}
        </div>
      </div>
    </>
  );
};

export default PopularCar;
