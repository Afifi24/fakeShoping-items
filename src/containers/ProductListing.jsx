import React, { useEffect } from 'react'
import {setProducts} from '../redux/action/productAction'
import ProductComponent from './ProductComponent' 
import axios from 'axios'
import { useDispatch } from 'react-redux'
const ProductListing = () => {
  const dispatch = useDispatch()
  const fetchProducts = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log('err',err)
    })
    dispatch(setProducts(response.data))
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div className='p-10 space-y-6 sm:grid-cols-2 grid place-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10 lg:gap-4 mt-10'>
      <ProductComponent/>
      </div>
  )
}

export default ProductListing