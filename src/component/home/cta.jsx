import React from 'react'

const Cta = (props) => {
  return (
      <>
          <h1 style={{color: props.color}}
              className="font-black text-4xl pt-8">{props.title}</h1>
          <img
            className="mx-[auto] py-3 w-full max-w-[80px]"
            src="wave.png"
            alt=""
          />
          <p className="text-gray-400 max-w-sm mx-[auto] pb-20">
            Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
      
    </>
  )
}

export default Cta
