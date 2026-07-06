// import React from 'react';
import user from '../../../../public/assets/user.png';
import rocket from '../../../../public/assets/rocket.png';
import box from '../../../../public/assets/package.png';




const StepsPage = () => {
  return (
    <div className="bg-[#F9FAFC] pb-30">

      <div className='text-center space-y-5 mt-20 pt-25 pb-15'>
        <h2 className="text-5xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>

      </div>

      <div className="grid px-10 md:flex gap-7  container mx-auto pl-10">

        <div className='rounded-xl shadow-md p-5 bg-white'>

          <div className='flex justify-end'>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 py-2.5 rounded-full btn'><h3>01</h3></div>
          </div>
          <div className='flex flex-col items-center text-center p-5 space-y-5 my-5'>
            <div className='flex w-14 bg-violet-100 items-center justify-center py-2 rounded-full'><img height={40} width={40} src={user} alt="" /></div>
            <h2 className='text-[#101727] font-semibold text-2xl'>Create Account</h2>
            <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
          </div>

        </div>


        <div className='rounded-xl shadow-md p-5 bg-white'>

          <div className='flex justify-end'>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 py-2.5 rounded-full btn'><h3>02</h3></div>
          </div>
          <div className='flex flex-col items-center text-center p-5 space-y-5 my-5'>
            <div className='flex w-14 bg-violet-100 items-center justify-center py-2 rounded-full'><img height={40} width={40} src={box} alt="" /></div>
            <h2 className='text-[#101727] font-semibold text-2xl'>Choose Products</h2>
            <p className='text-[#627382]'>Browse our catalog and select the tools <br />that fit your needs.</p>
          </div>

        </div>


        <div className='rounded-xl shadow-md p-5 bg-white'>

          <div className='flex justify-end'>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 py-2.5 rounded-full btn'><h3>03</h3></div>
          </div>
          <div className='flex flex-col items-center text-center p-5 space-y-5 my-5'>
            <div className='flex w-14 bg-violet-100 items-center justify-center py-2 rounded-full'><img height={40} width={40} src={rocket} alt="" /></div>
            <h2 className='text-[#101727] font-semibold text-2xl'>Start Creating</h2>
            <p className='text-[#627382]'>Download and start using your premium <br /> tools immediately.</p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default StepsPage;