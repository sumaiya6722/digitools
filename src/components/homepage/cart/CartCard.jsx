// import React from 'react';

import { Button } from "@heroui/react";

const CartCard = ({ cartProduct, handleDeleteProduct }) => {
  const { title,  price,  icon } = cartProduct;

  return (
    <div>
      <div className="card card-border bg-[#F9FAFC] w-full mt-10">

        <div className="flex flex-col gap-6 md:justify-between">
          <div className="flex items-center gap-4">
            <div className="p-4 text-2xl shadow-md rounded-xl bg-white">{icon}</div>
            <div className="flex flex-col">
              <h3 className="font-medium text-2xl">{title}</h3>
              <p className="text-start">${price}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Button
            onClick={()=>handleDeleteProduct(cartProduct)}
             className="btn btn-ghost text-red-600 text-xl">Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;