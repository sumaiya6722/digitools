// import React from 'react';

import { useState } from "react";
import ProductFeatures from "./ProductFeatures";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";




const ProductsCard = ({ digitalTool, selectedProducts, setSelectedProducts }) => {

  const { badge, title, description, price, duration, icon, features } = digitalTool;
  const [isSelected, setIsSelected] = useState(false);

  const handleChooseProduct = () => {
    toast.success(`${title} is added successfully`);

    setIsSelected(true)
    setSelectedProducts([...selectedProducts, digitalTool])
  }


  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm mt-7">
        <div className="card-body">
          <div className="flex justify-between items-center mb-2">
            <div className="border px-2 text-lg btn rounded-full">{icon}</div>
            <span className="badge badge-md badge-warning rounded-full">{badge}</span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>{description}</p>
            <span className="text-2xl font-semibold">${price}/{duration}</span>
          </div>

          <ul className="mt-4 flex flex-col gap-2 text-xs">
            {features.map(feature => <ProductFeatures feature={feature}></ProductFeatures>)}
          </ul>

          <div className="mt-6">
            <Button
              disabled={isSelected ? true : false}
              onClick={handleChooseProduct}
              className={`${isSelected ? 'opacity-40':'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} rounded-full btn-block`}>
            {isSelected ? 'Added to the Cart' : 'Buy Now'}
          </Button>
        </div>
      </div>
    </div>
    </div >
  );
};

export default ProductsCard;