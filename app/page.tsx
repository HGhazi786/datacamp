import { Inter } from '@next/font/google'
import Image from 'next/image';
import Login from './components/login';
import Hfooter from './components/hfooter';
import Section_2 from './components/sec2';
import Section_3 from './components/sec3';
import Section_4 from './components/sec4';
import Section_5 from './components/sec5';
import Section6 from './components/sec6'
import Footer from './components/footer';
import Link from 'next/link';
import Section7 from './components/sec7';
import Section8 from './components/sec8';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="xl:max-w-6xl xl:mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-0 lg:gap-24 xl:gap-24 justify-center justify-items-center">
        <div className="pb-24 overflow-hidden">
          <h1 className="text-5xl font-bold text-white mt-20 text-center lg:text-start xl:text-start ">
            Build data skills online
          </h1>
          <p className="text-2xl text-white lg:28 xl:mr-28 mt-5 text-center lg:text-start xl:text-start">
            Data drives everything. Get the skills you need for the future of
            work.
          </p>
          <button className="text-xl font-medium bg-green-500 mt-5 hover:bg-green-400 h-14 w-60 lg:h-14 lg:w-96 xl:h-14 xl:w-96 rounded-sm">
            Start learning for free
          </button>
          <button className="bg-transperant text-white text-xl mt-3 font-medium border-2 border-solid border-white h-14 w-60 lg:h-14 lg:w-96 xl:h-14 xl:w-96 rounded-sm hover:bg-slate-800">
            Data Camp For Business
          </button>
        </div>
        <Login />
      </div>
      <Hfooter />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <div className="xl:max-w-6xl xl:mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-0 lg:gap-20 xl:gap-20 justify-center justify-items-center pb-8">
        <div className='mb-5'>
          <Image src={"/ldec.png"} alt="ico" width={400} height={250} />
          <h1 className="pt-4 text-4xl text-white font-bold text-center lg:text-left xl:text-left">
            Discover your data skill level
            <span className="text-sky-500"> for free</span>
            <p className="pt-4 text-lg text-white text-center lg:text-left xl:text-left">
              Effective learning starts with assessment.
            </p>
            <p className="text-lg text-white text-center lg:text-left xl:text-left">
              Learning a new skill is hard work—Signal makes
            </p>
            <p className="text-lg text-white text-center lg:text-left xl:text-left">
              it easier.
            </p>
            <div className="xl:flex lg:flex space-x-2">
              <Link
                href={"/"}
                className="text-center text-slate-900 text-lg font-medium bg-green-500 mt-5 hover:bg-green-400 py-2 w-40 lg:py-2 lg:w-60 xl:py-2 xl:w-60 rounded-md"
              >
                Take an Assessment
              </Link>
              <Link
                href={"/"}
                className="bg-transperant text-center text-white text-lg mt-5 font-medium border-2 border-solid border-white py-2 w-80 lg:py-2 lg:w-80 xl:py-2 xl:w-80 rounded-md hover:bg-slate-800"
              >
                Request a Datacamp for Business
              </Link>
            </div>
          </h1>
        </div>
        <div>
          <Image src={"/deca.png"} alt="ico" width={700} height={570} />
        </div>
      </div>
      <Section6/>
      <Section7/>
      <Section8/>

      <Footer />
    </main>
  );
}
