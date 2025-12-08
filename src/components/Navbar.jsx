import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="z-10 flex justify-between items-center px-4 fixed top-0 w-full 
                    shadow-md backdrop-blur-md bg-background/80 border-b border-border py-2">
      
      {/* Logo */}
      <div className="logo">
        <img 
          src="./src/assets/logo/dwellsmart-light.svg" 
          alt="logo" 
          className="h-8" 
        />
      </div>

      {/* Links */}
      <ul className="flex gap-x-6 text-foreground font-medium">
        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
        <li><Link to="/buy" className="hover:text-primary transition-colors">Buy</Link></li>
        <li><Link to="/agents" className="hover:text-primary transition-colors">Agents</Link></li>
        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-3">
        <Button variant="secondary" className="hover:bg-secondary hover:text-secondary-foreground transition-all">
          Login
        </Button>
        <Button className="bg-primary text-primary-foreground hover:opacity-90 transition-all">
          Sign Up
        </Button>
      </div>
    </div>
  )
}

export default Navbar
