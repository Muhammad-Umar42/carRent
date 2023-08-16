import React from 'react'
import Cta from './cta';

const Thenumber = () => {

    
    const card = [
        {
            image:'heart.svg',
            value:'16K+',
            desc:'Happy Customers',
        },
        {
            image:'car.svg',
            value:'2547+',
            desc:'Count of Cars',
        },
        {
            image:'headphone.svg',
            value:'625K+',
            desc:'Car Center Solutions',
        },
        {
            image:'tim.svg',
            value:'200K+',
            desc:'Total Kilometer',
        },
    ]
  return (
      <div className='bg-[#201F1D] py-28 mb-6 relative px-3'>
          <img className='hidden lg:block absolute w-full max-w-[200px] top-2 -left-20' src="nbrCar.png" alt="" />
          <div className='text-center'>
              
          <Cta title="Facts By The Numbers" color="white" />
          </div>

          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-2xl mx-[auto]'>
              {
                  card.map((ele) => {
                      return (
                        <div className='bg-white flex  items-center p-6 rounded-xl'>
                        <img className='rounded-xl bg-black p-6' src={ele.image} alt="" />
                        <div className='pl-5'>
                            <h1 className='font-extrabold text-3xl'>{ele.value} </h1>
                            <p>{ele.desc} </p>
                        </div>
                   </div>
                   
                      )
                  })
              }
              
              
              
          </div>
      
          
          <img className='absolute top-8 right-14  hidden lg:block  ' src="lines.png" alt="" />
    </div>
  )
}

export default Thenumber;

