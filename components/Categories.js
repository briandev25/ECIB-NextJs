import React from 'react'
import CategoriesItem from './CategoriesItem'

function Categories() {
  return (
    <div className=' mx-auto py-6 max-w-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-full'>
        <h1 className=' text-2xl text-center font-bold'>Categories</h1>
       <CategoriesItem /> 
    </div>
  )
}

export default Categories