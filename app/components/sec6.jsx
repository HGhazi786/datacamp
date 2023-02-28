import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Section6 = () => {
  return (
    <main className="w-full mx-0 bg-[#fffbf3] h-auto pb-16">
      <div className="xl:max-w-6xl xl:mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center justify-items-center gap-0">
        <div>
          <p className="text-pink-500 tracking-widest pt-40 font-medium text-center xl:text-left lg-text-left">
            CERTIFICATION
          </p>
          <h1 className="text-4xl text-slate-900 font-bold space-y-3 text-center xl:text-left lg-text-left lg:mr-28 xl:mr-28">
            Land your dream job in data science
          </h1>
          <p className="text-slate-900 text-lg mt-5 mb-6 lg:mr-16 xl:mr-16">
            From a certification in data science to personalized resume reviews
            and interview prep—we've got you covered.
          </p>
          <Link
            href={"https://www.datacamp.com/certification"}
            className="bg-transperant border-2 border-slate-900 text-center font-semibold text-slate-900 hover:bg-stone-300 rounded-md px-4 py-2 justify-center xl:justify-left lg-justify-left"
          >
            Learn More
          </Link>
        </div>
        <div className="pt-16">
          <Image src="/section6.png" alt="picture" width={596} height={447} />
        </div>
      </div>
    </main>
  );
}

export default Section6
