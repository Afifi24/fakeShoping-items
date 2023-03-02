import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ProductComponent = () => {
  const products = useSelector((state)=>state.allProducts.products)
 const renderList = products.map(product=>{
  const {id, title, image,price,category} =product
  return(
    <div key={id} className=''>
      <Link to={`/product/${id}`}>
    {/* <div className="h-full border-2 border-gray-400 space-y-2"> */}
      <div className=" h-full p-4 rounded-md overflow-hidden border shadow-lg border-gray-400 bg-white hover:shadow-2xl duration-200 hover:-translate-y-1">
        <div className="h-80">
          <img className='h-full w-full ' src={image} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold mt-4">{title}</div>
          <div className="font-bold">${price}</div>
          <div className="text-gray-400">
            {category}
          </div>
        </div>
      {/* </div> */}
    </div>
    </Link>
  </div>
  )
 })
  return (
     <>
    {renderList}
    </>
  )
}

export default ProductComponent