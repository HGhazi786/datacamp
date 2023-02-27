"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {FiMenu} from "react-icons/fi"
import Dropdown from "./dropdown";
export default function Navbar()
{
    const [open,setOpen]=useState(false)
    return (
      <main className="sticky top-0">
        <nav className="bg-[#05192D] pb-2">
          <div className="flex items-center pt-2 justify-between xl:max-w-6xl xl:mx-auto lg:max-w-6xl lg:mx-auto max-w-full">
            <div className="flex space-x-3">
              <Image
                src={"/datacamp.png"}
                alt="logo"
                width={250}
                height={130}
              />
            </div>
            <div className="hidden lg:block">
              <ul className="flex justify-center space-x-8 text-white ">
                <li>Explore</li>
                <li>Pricing</li>
                <li>Business</li>
                <li>Universities</li>
              </ul>
            </div>
            <FiMenu
              className="lg:hidden block w-6 h-6 cursor-pointer"
              color="white"
            />
            <div className="lg:block hidden space-x-2">
              <button className="bg-transperant text-white px-4 py-2 font-medium border-2 border-solid border-white rounded-sm hover:border-green-500 hover:bg-slate-800">
                Sign In
              </button>
              <button className="bg-white px-4 py-2 rounded-sm font-medium hover:bg-green-500">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </main>
    );
}