// import React from 'react';

import { IoPlayOutline } from "react-icons/io5";
import image from '../../../public/assets/banner.png'

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 space-y-4 pl-10 lg:flex justify-center gap-6 pt-30 pb-20">

        <div className="banner-left space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E1E7FF] px-2 py-1">
            <div className="relative h-5 w-5">
              <div className="absolute inset-px rounded-full bg-violet-400 opacity-40 "></div>
              <div className="absolute inset-1 rounded-full bg-violet-500 opacity-60"></div>
              <div className="absolute inset-1.75 rounded-full bg-violet-700"></div>
            </div>

            <span className="text-lg font-medium text-violet-600">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="font-bold text-[#101727] text-7xl">Supercharge Your <br /> Digital Workflow</h1>
          <p className="text-[#627382] text-lg">Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>
          <div className="flex items-center gap-3">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg rounded-full py-3">Explore Products</button>
            <button className=" inline-flex
        items-center
        gap-1
        rounded-full
        border-2
        border-violet-600
        bg-white
        px-2
        py-1.5
        text-lg
        font-semibold
        text-violet-600
        transition-all
        duration-200
        hover:bg-violet-50
        hover:shadow-lg">
              <div className="text-violet-600 text-2xl font-extrabold">
                <IoPlayOutline />
              </div>
              Watch Demo</button>
          </div>
        </div>


        <div className="banner-right">
          <img height={590} width={500} src={image} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 pl-10 md:grid-cols-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30 text-white lg:flex justify-center items-center gap-10">
        <div className="px-10 py-0 border-r">
          <h3 className="font-bold text-7xl">50K+</h3>
          <p className="text-2xl">Active User</p>
        </div>
        <div className="px-10 py-0 border-r">
          <h3 className="font-bold text-7xl">200+</h3>
          <p className="text-2xl">Premium Tools</p>
        </div>
        <div className="p-10">
          <h3 className="font-bold text-7xl">4.9</h3>
          <p className="text-2xl">ratings</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;