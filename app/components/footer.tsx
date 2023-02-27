import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="justify-end py-10 bg-[#000820]">
        <div className="mt-40 xl:max-w-6xl xl:mx-auto lg:max-w-6xl lg:mx-auto grid grid-cols-3 lg:grid-cols-7 xl:grid-cols-7 gap-5">
          <div className="text-gray-300 text-lg space-y-1">
            <h1 className="text-white text-bold pb-4 font-bold">LEARN</h1>
            <h1>Learn Python</h1>
            <h1>Learn Power BI</h1>
            <h1>Learn Tableau</h1>
            <h1>Learn Scala</h1>
            <h1>Learn Excel</h1>
          </div>
          <div className=""></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>
      
    </div>
  );
}

export default Footer
