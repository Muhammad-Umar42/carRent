import React from 'react'
import Cta from './cta'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommendedCar = () => {

    var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        centerPadding: '20px',
        
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
      <>
          <div className='bg-[#f2f7f6] py-10'>
              <div className='w-full max-w-screen-2xl mx-[auto]'>
              <div className='text-center'>
                  <Cta title='Recommended Car Rental deals'/>
              </div>


              <Slider className="  p-4  " {...settings}>
                      <div className='text-center'>
                          <div className='bg-white ml-4 p-4 rounded-lg'>
                              
                          <img src="Revo.jpg" alt="" />
                          <h1>REvo</h1>
                          <img src="stars.jpg" alt="" />
                          </div>
                  </div>
                      <div className='text-center'>
                          <div className='bg-white ml-4 p-4 rounded-lg'>
                              
                          <img src="Revo.jpg" alt="" />
                          <h1>REvo</h1>
                          <img src="stars.jpg" alt="" />
                          </div>
                  </div>
                      <div className='text-center'>
                          <div className='bg-white ml-4 p-4 rounded-lg'>
                              
                          <img src="Revo.jpg" alt="" />
                          <h1>REvo</h1>
                          <img src="stars.jpg" alt="" />
                          </div>
                  </div>
                      <div className='text-center'>
                          <div className='bg-white ml-4 p-4 rounded-lg'>
                              
                          <img src="Revo.jpg" alt="" />
                          <h1>REvo</h1>
                          <img src="stars.jpg" alt="" />
                          </div>
                  </div>
                     
                      
                  
              </Slider>


              </div>
          </div>
      
    </>
  )
}

export default RecommendedCar
