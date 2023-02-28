"use client"
import React from 'react'
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Section8 = () => {
    const images = [
      {
        src: "/s81.png",
        alt: "Image 1",
      },
      {
        src: "/s82.png",
        alt: "Image 2",
      },
      {
        src: "/s83.png",
        alt: "Image 3",
      },
      {
        src: "/s84.png",
        alt: "Image 1",
      },
      {
        src: "/s86.png",
        alt: "Image 3",
      },
      {
        src: "/s88.png",
        alt: "Image 2",
      },
      // Add more images as needed
    ];
     const scrollContainerRef = React.useRef<HTMLDivElement>(null);

     const scrollRight = () => {
       if (scrollContainerRef.current) {
         scrollContainerRef.current.scrollLeft += 200;
       }
     };

     const scrollLeft = () => {
       if (scrollContainerRef.current) {
         scrollContainerRef.current.scrollLeft -= 200;
       }
     };
  return (
    <div className="text-white bg-[#7933ff] text-center w-full h-auto pb-10">
      <h1 className="text-5xl font-bold pt-16">
        Don’t just take our word for it.
      </h1>
      <div className="flex items-center">
        <button
          className="bg-gray-200 rounded-full p-2 mr-4"
          onClick={scrollLeft}
        >
          <FiChevronLeft />
        </button>
        <div
          className="snap-x overflow-x-scroll flex"
          ref={scrollContainerRef}
        >
          {images.map((image, index) => (
            <div className="mr-4 snap-start scroll-ml-6" key={index}>
              <Image src={image.src} alt={image.alt} width={350} height={500} />
            </div>
          ))}
        </div>
        <button
          className="bg-gray-200 rounded-full p-2 ml-4"
          onClick={scrollRight}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Section8

