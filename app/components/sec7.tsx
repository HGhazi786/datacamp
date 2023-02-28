import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Section7 = () => {
  return (
    <div>
      <main className="w-full mx-0 bg-[#05192D] h-auto">
        <div className="xl:ml-40 lg:ml-40 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center justify-items-center">
          <div className="mb-5">
            <p className="text-sky-500 tracking-widest pt-40 font-semibold text-center xl:text-left lg-text-left">
              WORKSPACE
            </p>
            <h1 className="text-4xl text-white font-bold space-y-3 text-center xl:text-left lg-text-left">
              Start your own data analysis in seconds
            </h1>
            <p className="text-white font-medium text-xl mt-5 mb-6">
              Your personal in-browser tool to write, run, and share your data
              analysis.
            </p>
            <Link
              href={"https://www.datacamp.com/certification"}
              className="bg-transperant border-2 border-white text-center font-semibold text-white hover:bg-slate-700 rounded-md px-4 py-2 justify-center xl:justify-left lg-justify-left"
            >
              Learn More
            </Link>
          </div>
          <div className="top-0">
            <Image
              src="/section7.png"
              alt="picture"
              width={1023}
              height={777}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Section7
