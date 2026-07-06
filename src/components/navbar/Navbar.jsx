// import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { Link } from '@heroui/react';

const Navbar = ({selectedProducts}) => {

  const links = [
    <ul className="menu menu-horizontal px-1">
      <li><Link>Products</Link></li>
      <li><Link>Features</Link></li>
      <li><Link>Pricing</Link></li>
      <li><Link>Testimonial</Link></li>
      <li><Link>FAQs</Link></li>
    </ul>]


  return (

    <div className="">
      <div className="navbar bg-base-100 shadow-sm flex flex-col lg:flex-row px-30">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link>Products</Link></li>
              <li><Link>Features</Link></li>
              <li><Link>Pricing</Link></li>
              <li><Link>Testimonial</Link></li>
              <li><Link>FAQs</Link></li>
            </ul>

          </div>
          <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-2xl font-bold bg-clip-text text-transparent">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {links}
        </div>
        <div className="navbar-end flex gap-3">
          <div className="text-2xl font-bold flex gap-1 items-center">
            <IoCartOutline/>
            <h2 className="font-medium text-xl">({selectedProducts.length})</h2>
            </div>
          <button className="font-semibold">Login</button>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg rounded-full p-5">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;