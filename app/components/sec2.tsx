import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Section_2 = () => {
return (
  <main className="w-full mx-0 bg-[#fffbf3] h-auto pb-24">
    <Image src="/dec.png" alt="picture" width={1896} height={152} />
    <div className="xl:max-w-6xl xl:mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center justify-items-center">
      <div>
        <p className="text-red-500 tracking-widest pt-20 font-medium text-center xl:text-left lg-text-left">
          LOVED BY LEARNERS AT THOUSANDS OF COMPANIES
        </p>
        <h1 className="text-4xl text-slate-900 font-bold space-y-3 text-center xl:text-left lg-text-left">
          Skill up at scale. Data training designed for your business.
        </h1>
        <p className="text-slate-900 font-medium text-xl mt-5 mb-6">
          Join 2,500+ companies and 80% of the Fortune 1000 who use DataCamp to
          upskill their teams.
        </p>
        <Link
          href={"/"}
          className="bg-slate-900 text-center text-white hover:bg-slate-800 rounded-sm px-6 py-3 justify-center xl:justify-left lg-justify-left"
        >
          Learn More
        </Link>
      </div>
      <div className="pt-36">
        <Image src="/p1.png" alt="picture" width={1596} height={547} />
      </div>
    </div>
  </main>
);
}

export default Section_2
