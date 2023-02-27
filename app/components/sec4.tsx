import React from 'react'
import Image from 'next/image';
const Section_4 = () => {
  return (
    <div>
      <Image src="/dec4.png" alt="picture" width={1900} height={87} />
      <h1 className="pt-10 text-4xl font-bold text-white text-center">
        <span className="text-green-500">Hands-on </span>learning experience
      </h1>
      <div className="xl:max-w-6xl xl:mx-auto">
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-24">
          <Image
            src="/dec3.png"
            alt="picture"
            width={500}
            height={350}
            className="order-last lg:-order-1 xl:-order-1"
          />
          <div className="pt-10 text-3xl font-bold text-white text-center xl:text-left lg:text-left">
            <span className="text-sky-500">No installation required</span> — run
            code from your browser
          </div>
        </div>
        <div className="mt-36 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-24">
          <Image
            src="/dec5.png"
            alt="picture"
            width={500}
            height={450}
            className="order-last lg:-order-1 xl:-order-1"
          />
          <div>
            <h1 className="pt-10 xl:pt-40 lg:pt-40 text-3xl font-bold text-white text-center xl:text-left lg:text-left">
              Learn From
            </h1>
            <h1 className="pt-1 text-3xl font-bold text-[#7933ff] text-center xl:text-left lg:text-left">
              best instructors
            </h1>
          </div>
        </div>
        <div className="mt-36 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-24">
          <Image
            src="/dec6.png"
            alt="picture"
            width={500}
            height={400}
            className="order-last lg:-order-1 xl:-order-1"
          />
          <div>
            <h1 className="pt-10 xl:pt-44 lg:pt-44 text-3xl font-bold text-amber-500 text-center xl:text-left lg:text-left">
              Interactive exercises
            </h1>
            <h1 className="pt-1 text-3xl font-bold text-amber-500 text-center xl:text-left lg:text-left">
              short videos
            </h1>
          </div>
        </div>
        <div className="mt-36 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-24">
          <Image
            src="/dec7.png"
            alt="picture"
            width={400}
            height={300}
            className="order-last lg:-order-1 xl:-order-1 rever xl:ml-24 lg:ml-24"
          />
          <div>
            <h1 className="pt-10 xl:pt-28 lg:pt-28 text-3xl font-bold text-white text-center xl:text-left lg:text-left">
              <span className="text-pink-400">Practice </span>and
            </h1>
            <h1 className="pt-1 text-3xl font-bold text-white text-center xl:text-left lg:text-left">
              <span className="text-pink-400">apply </span>your skill
            </h1>
          </div>
        </div>
      </div>
      <Image
        src="/dec.png"
        alt="picture"
        width={1920}
        height={150}
      />
    </div>
  );
}

export default Section_4
