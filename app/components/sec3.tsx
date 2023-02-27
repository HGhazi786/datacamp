import React from 'react'
import Image from 'next/image';

const Section_3 = () => {
  return (
    <div className="text-white bg-[#7933ff] text-center w-full h-auto pb-10">
      <Image src="/dec2.png" alt="picture" width={1896} height={152} />
      <h1 className="text-5xl font-bold pt-16">What is DataCamp?</h1>
      <p className="text-xl pt-4 xl:mx-96 lg:mx-96">
        Learn the data skills you need online at your own pace—from non-coding
        essentials to data science and machine learning.
      </p>
      <button className="text-xl text-slate-900 font-medium bg-green-500 mt-5 hover:bg-green-400 h-14 w-60 lg:h-14 lg:w-72 xl:h-14 xl:w-72 rounded-sm">
        Start learning for free
      </button>
    </div>
  );
}

export default Section_3
