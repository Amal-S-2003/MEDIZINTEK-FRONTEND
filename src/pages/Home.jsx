import React, { useContext, useEffect } from "react";
import ProductListing from "../components/ProductListing";
import { ProdcutContext } from "../Context/ProductContext";
import Footer from "../components/Footer";

function Home() {
  const {allProducts, setAllProducts}=useContext(ProdcutContext)
  useEffect(() => {
    
  console.log(allProducts);
  
  }, []);
  return (
    <div className="">
      {/* Banner: Simple & Professional */}
      <div className="flex flex-col lg:flex-row justify-center items-center bg-gray-200 px-6 py-12 lg:py-20">
        <div className="text-center lg:text-left lg:w-1/2 space-y-4">
          <h1 className="font-bold text-zinc-600 text-4xl md:text-6xl">
            Your Health, Our Priority
          </h1>
          <h2 className="font-medium text-zinc-500 text-lg md:text-xl">
            Trusted Medicines & Healthcare Products at Your Fingertips
          </h2>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Explore Products
          </button>
        </div>
        <img
          src="./banner.png"
          alt="Healthcare Banner"
          className="w-2/3 md:w-1/2 lg:w-1/3 mt-6 lg:mt-0"
        />
      </div>

      {/* Discount & Offer Based Banner with 8 Images in a Single Row */}
      <div className="relative bg-zink-100 py-10 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          Get Up to 20% Off on All Medicines!
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Fast Delivery | Genuine Medicines | Affordable Prices
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition">
            Order Now
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
            View Offers
          </button>
        </div>

        {/* 8 Images in a Single Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 overflow-x-auto px-4">
          {[
            "babyskincareproduct.png",
            "digitalinstruments.png",
            "urologycare.png",
            "surgicalcare.png",
            "homeandprofessionalprotection.png",
            "gauzeproducts.png",
            "syringe.png",
            "criticalcare.png",
          ].map((image, index) => (
            <img
              key={index}
              src={`./${image}`}
              alt={`Product ${index + 1}`}
              className="h-auto w-32 "
            />
          ))}
        </div>
      </div>
      {/* Popular brands */}
      <div className="text-center p-4 border-t-2 border-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Popular Brands
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Trusted by millions around the world
        </p>
        <div className="flex justify-between items-center space-x-8 mx-20 p-4 px-10 bg-gray-100">
          <img src="brand-romsons.png" alt="Brand1" className="h-24" />
          <img src="brand-polymed.png" alt="Brand1" className="h-24" />
          <img src="brand-coloplast.png" alt="Brand1" className="h-24" />
          <img src="brand-3m.png" alt="Brand1" className="h-24" />
          <img src="brand-Dr-morepen.png" alt="Brand1" className="h-24" />
          <img src="brand-adlisc.png" alt="Brand1" className="h-24" />
        </div>
      </div>


      {/* Prodcuts Listing */}
      <ProductListing allProducts={allProducts}/>

      <Footer/>
    </div>
  );
}

export default Home;
