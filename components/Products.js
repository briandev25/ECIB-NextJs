import React from 'react'
import Product from './Product'

function Products({products}) {
    console.log(products)
  return (
      <div className='mx-10 py-6'>
          <h1 className=' text-2xl text-center font-bold'>For You</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4'>
          {products?.map(item =>(
              <Product key={item.id} {...item} />
          ))}
          </div>
      </div> 
  )
}

export default Products;