import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Section_5 = () => {
  return (
    <div className="bg-[#fffbf3]">
      <div className="xl:mx-40 lg:mx-40 pb-24">
        <h1 className="pt-20 text-4xl font-bold text-slate-900 text-center lg:text:left xl:text-left">
          Learning paths
          <span className="text-green-500"> designed by experts</span>
        </h1>
        <h1 className="text-3xl text-slate-900 pt-1 text-center lg:text:left xl:text-left">
          Learn a new technology
        </h1>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          <Link
            href="/"
            className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Image
              src="/python.png"
              alt="picture"
              width={300}
              height={150}
              className="px-16 py-6"
            />
          </Link>
          <Link
            href="/"
            className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Image
              src="/r.png"
              alt="picture"
              width={200}
              height={50}
              className="px-16 py-4"
            />
          </Link>
          <Link
            href="/"
            className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Image
              src="/post.png"
              alt="picture"
              width={300}
              height={150}
              className="px-16 py-6"
            />
          </Link>
          <Link
            href="/"
            className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Image
              src="/Tableau.png"
              alt="picture"
              width={300}
              height={150}
              className="px-16 py-6"
            />
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          <div className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/power.png"
              alt="picture"
              width={300}
              height={150}
              className="px-16 py-6"
            />
          </div>
          <div className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/excel.png"
              alt="picture"
              width={400}
              height={150}
              className="px-16 py-4"
            />
          </div>
          <div className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/scala.png"
              alt="picture"
              width={300}
              height={150}
              className="px-16 py-4"
            />
          </div>
          <div className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/Tableau.png"
              alt="picture"
              width={300}
              height={150}
              className="px-16 py-6"
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          <div className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/APACHE.png"
              alt="picture"
              width={250}
              height={100}
              className="px-16 py-4"
            />
          </div>
          <div className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/shell.png"
              alt="picture"
              width={300}
              height={150}
              className="px-16 py-4"
            />
          </div>
          <div className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/git.png"
              alt="picture"
              width={300}
              height={150}
              className="px-16 py-4"
            />
          </div>
          <div className="bg-white rounded-md shadow hover:bg-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
              src="/orc.png"
              alt="picture"
              width={300}
              height={150}
              className="px-16 py-4"
            />
          </div>
        </div>
        <Link href={"/"}>
          <p className="text-lg font-semibold text-slate-900 text-end mt-4 hover:text-sky-400">
            Explore All Technologies-
          </p>
        </Link>
        <div className="mt-20">
          <h1 className="text-4xl text-slate-900 font-bold text-center lg:text:left xl:text-left">
            Launch your Career
          </h1>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <Link
              href={"/"}
              className="bg-white shadow px-24 py-8 text-2xl font-bold text-slate-900 rounded-md hover:bg-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Data Scientist
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-8 py-8 text-2xl font-bold text-slate-900 rounded-md hover:bg-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Machine Learning Scientist
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-24 py-8 text-2xl font-bold text-slate-900 rounded-md hover:bg-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Data Engineer
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify justify-center">
            <Link
              href={"/"}
              className="bg-white shadow px-24 py-8 text-2xl font-bold text-slate-900 rounded-md hover:bg-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Data Analyst
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-32 py-8 text-2xl font-bold text-slate-900 rounded-md hover:bg-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Statistician
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-28 py-8 text-2xl font-bold text-slate-900 rounded-md hover:bg-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Programmer
            </Link>
          </div>
          <Link href={"/"}>
            <p className="text-lg font-semibold text-slate-900 text-end mt-4 hover:text-pink-400">
              Explore All Career Tracks-
            </p>
          </Link>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl text-slate-900 font-bold text-center lg:text:left xl:text-left">
            Master a specific skill
          </h1>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <Link
              href={"/"}
              className="bg-white shadow px-12 py-8 text-xl font-bold text-slate-900 rounded-md hover:bg-violet-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              SQL Fundamentals
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-14 py-8 text-xl font-bold text-slate-900 rounded-md hover:bg-violet-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Data Litracy
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-12 py-8 text-xl font-bold text-slate-900 rounded-md hover:bg-violet-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Machine Learning
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-20 py-8 text-xl font-bold text-slate-900 rounded-md hover:bg-violet-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Statistics
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <Link
              href={"/"}
              className="bg-white shadow px-14 py-8 text-xl font-bold text-slate-900 rounded-md hover:bg-violet-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Market analytics
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-28 py-8 text-xl font-bold text-slate-900 rounded-md hover:bg-violet-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              NLP
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-14 py-8 text-xl font-bold text-slate-900 rounded-md hover:bg-violet-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Applied Finance
            </Link>
            <Link
              href={"/"}
              className="bg-white shadow px-14 py-8 text-xl font-bold text-slate-900 rounded-md hover:bg-violet-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              Data Visulization
            </Link>
          </div>
          <Link href={"/"}>
            <p className="text-lg font-semibold text-slate-900 text-end mt-4 hover:text-violet-400">
              Explore All Skill Tracks-
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section_5
