//import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

function Header() {
  return (
    <header className='bg-yellow-300 uppercase p-4
                      border-b border-stone-200 sm:px-6
                      flex items-center justify-between
    '>
        <Link to="/" className='tracking-widest'> Fast React Pizza Co.</Link>
        <SearchOrder />
        <Username />
    </header>
  )
}

export default Header