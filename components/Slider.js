import { useState } from "react";
import {
    ArrowLeftIcon,
    ArrowRightIcon,

  } from "@heroicons/react/24/solid";
import classes from "./HeaderBar.module.css";

function Slider() {
    const slides = [
        {
          url: '/sliderB.jpg',
        },
        {
          url: '/slider1.jpg',
        },
        {
          url: '/sliderF.png',
        },
        {
          url: '/sliderD.jpg',
        },
      ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="hidden sm:flex sm:justify-center">
     <div className='h-[300px] w-full mt-3  group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='items-center flex justify-between w-full h-full bg-center bg-cover duration-500'    
      >
        <div onClick={prevSlide} className='hidden group-hover:block z-1 cursor-pointer text-3xl text-white mx-10 hover:text-4xl'>
          ❰
        </div>
        <div onClick={nextSlide} className='hidden group-hover:block z-1 cursor-pointer text-3xl text-white mx-10 hover:text-4xl'>
          ❱
        </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Slider;