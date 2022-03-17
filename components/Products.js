import React, { useState } from 'react'
import Image from 'next/image';
import Product from './Product'

function Products({products}) {

 const [loadMore,setLoadMore] =useState(false);


  return (
      <div className='flex flex-col items-center mx-10 py-6'>
          <h1 className=' text-2xl text-center font-bold'>For You</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4'>
          {products?.slice(0,4).map(item =>(
              <Product key={item.id} {...item} />
          ))}
          <div  data-aos='fade-up' className='relative mx-5 h-56 my-5 md:col-span-full'><Image src='/background-images/masked.jpg' layout='fill' objectFit='cover'/></div>
          {products?.slice(4,8).map(item =>(
              <Product key={item.id} {...item} />
          ))}
          
        {loadMore ? products?.slice(8,products.length).map(item =>(
              <Product key={item.id} {...item} />
          )): null}
          </div>
          <button className=' px-8 py-2 shadow-md text-slate-600 active:scale-95 transition transform duration-150  bg-gray-50' onClick={() =>setLoadMore(!loadMore)}>{!loadMore ? "Load More" : "Show Less"}</button>
      </div> 
  )
}

export default Products;