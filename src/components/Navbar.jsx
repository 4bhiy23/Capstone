import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-2 fixed top-0 w-full shadow-2xl backdrop-blur-sm py-2'>
        <div className="logo">
            <img src="./src/assets/logo/dwellsmart-light.png" alt="" className='h-10' />
        </div>

        {/* Middle - Links */}
        <ul className='flex gap-x-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/buy">Buy</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>

        <div className='flex gap-3'>
            <Button variant="secondary">Login</Button>
            <Button>Sign Up</Button>
        </div>
    </div>
    
  )
}

export default Navbar
