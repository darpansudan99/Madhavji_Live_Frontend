import React, { useRef } from 'react'
import foodDelivery from '../Assets/food-delivery.png'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux';
import CardFeature from '../component/CardFeature';
import { GrPrevious, GrNext } from "react-icons/gr";
import AllProduct from "../component/AllProduct";
import Footer from './Footer';

const Home = () => {
  const productData = useSelector((state) => state.product.productList);

  const homeProductCartList = productData.slice(0,5);
  const homeProductCartListSweets = productData.filter(e1 => e1.category === "sweet", [])


  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img src={foodDelivery} alt='' className='h-7' />
          </div>
          <h2 className='text-2xl md:text-7xl font-bold py-3'>Fastest Delivery at <span className='text-orange-600'>Your Home</span></h2>

          <p className="py-3 text-base ">
          Welcome to Madhavji Sweet Shop, where sweet dreams come to life. We are passionate about crafting the most delectable and authentic sweets that will tantalize your taste buds and leave you craving for more.
          </p>
          <p className="py-1 text-base ">
          We take immense pride in offering a wide array of both traditional and innovative sweets, each carefully handcrafted with love and passion. From timeless favorites like Gulab Jamun and Jalebi to unique creations that blend a symphony of flavors and textures, our sweet shop caters to every sweet tooth.
          </p>
          <button className="font-bold bg-orange-500 text-slate-200 px-4 py-2 mt-6 rounded-md">
            Order Now
          </button>
        </div>
        

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
        {homeProductCartList[0]
            ? homeProductCartList.map((e1) => {
                return (
                  <HomeCard
                    key={e1._id}
                    id={e1._id}
                    image={e1.image}
                    name={e1.name}
                    price={e1.price}
                    category={e1.category}
                  />
                );
              })
            : loadingArray.map((e1, index) => {
                return <HomeCard key={index+"loading"} loading={"Loading..."} />;
              })}
        </div>
      </div>

      <div className=''>
      <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            New and Fresh Sweets
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={prevProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
        {homeProductCartListSweets[0]
            ? homeProductCartListSweets.map((e1) => {
                return (
                  <CardFeature
                    key={e1._id+"sweet"}
                    id={e1._id}
                    name={e1.name}
                    category={e1.category}
                    price={e1.price}
                    image={e1.image}
                  />
                );
              })
            : loadingArrayFeature.map((e1,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>
      </div>
      <AllProduct heading={"Your Product"}/>
      <Footer />
    </div>
  )
}

export default Home