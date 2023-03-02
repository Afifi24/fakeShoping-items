import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-black shadow-md py-4 px-10 fixed top-0 z-10 right-0 left-0'>
     <div className=''> 
     <Link to={'/'}>
     <h2 className='font-semibold text-white'>FakeShop</h2>
     </Link>
     </div>
    </div>
  )
}

export default Header