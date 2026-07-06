// import React from 'react';

const TransformWorkFlow = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white mt-15 p-15 lg:p-30">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-5xl font-bold">Ready to Transform Your Workflow?</h2>
        <p className="text-center">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
        <div className="grid md:flex gap-4">
          <div className="mt-6 bg-white rounded-full">
            <button className="btn rounded-full btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Explore Products</button>
          </div>
          <div className="mt-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
            <button className="btn rounded-full btn-block bg-clip-text text-transparent">View Pricing</button>
          </div>
        </div>
        <p className="">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default TransformWorkFlow;