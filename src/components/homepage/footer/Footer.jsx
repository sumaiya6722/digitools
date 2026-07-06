// import React from 'react';

import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white px-10 lg:px-20 py-30">

      <div className="footer-top grid grid-cols-1 md:flex items-center justify-around">

        <div className="flex flex-col space-y-7">
          <h2 className="text-5xl font-bold">DigiTools</h2>
          <p className="opacity-80">Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
        </div>

        <div className="grid grid-cols-1 my-10 md:flex gap-10">
          <ul className="space-y-4">
            <li className="font-semibold text-xl">Product</li>
            <li>features</li>
            <li>pricing</li>
            <li>templates</li>
            <li>Integrations</li>
          </ul>

          <ul className="space-y-4">
            <li className="font-semibold text-xl">Product</li>
            <li>features</li>
            <li>pricing</li>
            <li>templates</li>
            <li>Integrations</li>
          </ul>

          <ul className="space-y-4">
            <li className="font-semibold text-xl">Product</li>
            <li>features</li>
            <li>pricing</li>
            <li>templates</li>
            <li>Integrations</li>
          </ul>
        </div>


        <div className="flex flex-col">
          <h3 className="font-semibold text-xl mb-2">Social Links</h3>
          <div className="flex gap-4 text-2xl">
            <div><FaFacebookSquare /></div>
            <div><FaGithub /></div>
            <div><FaSquareInstagram /></div>
          </div>
        </div>
      </div>

      <div className="p-10 border-b opacity-70">

      </div>

      <div className="footer-bottom grid grid-cols-1 space-y-5 md:flex justify-between opacity-75 pt-10 px-15">
        <h3>© 2026 Digitools. All rights reserved.</h3>
        <div>
          <ul className="flex gap-5">
            <li>Privacy Policy</li>
            <li>Term Of Services</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;