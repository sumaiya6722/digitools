// import React from 'react';
import { use, useState } from "react";
import ProductsPage from "./products/ProductsPage";
import CartPage from "./cart/CartPage";
// import StepsPage from "./stepsPage/StepsPage";




const HomePage = ({ digitalToolsPromise, selectedProducts, setSelectedProducts }) => {

  const digitalTools = use(digitalToolsPromise);
  const [selectedButton, setSelectedButton] = useState('products');
  
  return (

    <div className="container mx-auto">
      <div className="text-center mt-20 space-y-4">
        <h3 className="text-5xl font-bold">Premium Digital Tools</h3>
        <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
      </div>


      <div className="my-7 text-center">
        <button onClick={() => setSelectedButton('products')} className={`${selectedButton == 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-r-2xl shadow-md' : 'opacity-70 rounded-r-none'} btn rounded-l-2xl text-xl p-6`}>Products</button>
        <button onClick={() => setSelectedButton('cart')} className={`${selectedButton == 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-l-2xl shadow-md' : 'opacity-70 rounded-l-none'} btn rounded-r-2xl text-xl p-6`}>Cart({selectedProducts.length})</button>


        {selectedButton == 'products' ?
          <ProductsPage selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} digitalTools={digitalTools}></ProductsPage> :
          <CartPage selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></CartPage>}
      </div>



    </div>
  );
};

export default HomePage;