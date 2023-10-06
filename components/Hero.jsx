"use client";
import React from 'react'
import  CustomButton  from '../components/CustomButton'
import Heropng from  '../public/hero.webp'
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => {
    // const nextSection = document.getElementById("discover");

    // if (nextSection) {
    //   nextSection.scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <div className='hero bg-black text-white'>
    <div className="flex-1 pt-36 padding-x">
    <h1 className="hero__title">
    Discover, and lease a vehicle effortlessly and in no time!
        </h1>
        
        <p className="hero__subtitle text-white">
        Simplify your car rental journey with our seamless booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-indigo-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      
    </div>
    <div className="hero__image-container">
        <div className="hero__image">
          <Image src={Heropng} alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
     
    </div>
  )
}

export default Hero