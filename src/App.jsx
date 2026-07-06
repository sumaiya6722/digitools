import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import HomePage from './components/homepage/HomePage';
import Navbar from './components/navbar/Navbar'
import StepsPage from './components/homepage/stepsPage/StepsPage';
import PricingPage from './components/homepage/pricing/PricingPage';
import TransformWorkFlow from './components/homepage/transformWork/TransformWork';
import Footer from './components/homepage/footer/Footer';
// import { HiH3 } from 'react-icons/hi2';


const digitalTools = async () => {
  const data = await fetch('/data.json').then(res => res.json());
  return data;
}

function App() {

  const digitalToolsPromise = digitalTools();
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      <Navbar selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h3>The tools are loading......</h3>}>
        <HomePage selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} digitalToolsPromise={digitalToolsPromise}></HomePage>
      </Suspense>
      <StepsPage></StepsPage>
      <PricingPage></PricingPage>
      <TransformWorkFlow></TransformWorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
