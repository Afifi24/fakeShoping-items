import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {selectedProduct,removeSelectedProduct} from '../redux/action/productAction'
const ProductDetails = () => {
  const product = useSelector((state=>state.product))
  const {title,image,price,category,description}= product
  console.log(Object.keys(product).length)
  const dispatch = useDispatch()
  const fetchProducts = async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
      console.log('err',err)
    })
    dispatch(selectedProduct(response.data))
  }
  const {productId} = useParams()
  console.log(productId)
  useEffect(()=>{
   if(productId && productId!=='') fetchProducts()
   const remove =()=>{
    return(
      dispatch(removeSelectedProduct())
    )
   }
   remove()
  //  return ()=>{
  //   dispatch(removeSelectedProduct())
  //  }
   
  },[productId])
  return (
    <div className='flex items-center mx-4 my-20 md:my-24 justify-center min-h-screen md:mx-10'>
      {Object.keys(product).length===0 ? (<div>...Loading</div>):
      (<div className=' grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-2 ' >
        <div className=' flex p-2 rounded-md items-center justify-center border md:col-span-1 w-full' id='image'>
          <img className='w-full ' src={image} alt="" />
        </div>
        <div className='flex flex-col gap-3 items-start md:col-span-1' id="content">
            <h2 className='font-bold text-lg'>{title}</h2>
            <div className='py-2 px-6 bg-blue-900 rounded-md text-white'>${price}</div>
            <div className='bg-gray-300 py-2 px-6 w-full rounded-md text-yellow-600'>{category}</div>
            <div>
              <p>{description}</p>

            </div>
            <button className='py-2 px-10 mt-10 text-white bg-red-500 rounded-sm'>Add to cart</button>
        </div>
      </div>)
      }
    </div>
  )
}

export default ProductDetails