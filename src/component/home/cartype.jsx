import React from "react";
import Cta from "./cta";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarType = () => {
  const cardata = [
    {
      carimage: "bw1.png",
      carname: "pickup",
    },
    {
      carimage: "bw2.png",
      carname: "SUV",
    },
    {
      carimage: "bw3.png",
      carname: "Sedan",
    },
    {
      carimage: "bw1.png",
      carname: "pickup",
    },
    {
      carimage: "bw4.png",
      carname: "sports coupe ",
    },
    {
      carimage: "bw5.png",
      carname: "Family MPV",
    },
  ];

  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
            ,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="bg-[#fbfcfc]">
      <div className="text-center pt-12 pb-20 w-full max-w-screen-2xl mx-[auto]">
        <Cta title="Most Popular Cartypes" color="black" />

        <Slider className=" p-4" {...settings}>
          {cardata.map((ele, ind) => {
            return (
                <div key={ind} className="text-center ">
                    <div className="bg-white ml-4 py-4 hover:bg-[#e5f5f2] transition-colors transform duration-700">

                <img
                  className="m-[auto]"
                  src={ele.carimage}
                  alt=""
                  />
                <h3 className="pb-3">{ele.carname}</h3>
                  </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CarType;
