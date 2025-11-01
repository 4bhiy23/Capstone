import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
const HeroSection = () => {
  return (
    <div
    className='h-[90vh] w-full object-cover p-6 flex justify-end items-end text-right'
    style={{ 
      backgroundImage: "url('./src/assets/images/hero.jpg')",
      backgroundSize: "cover"
     }}
    >
        <div className="">
            <h1 className='text-7xl font-bold mb-10'>Find Your Dream <br></br> Home with DwellSmart</h1>
            <div className=" flex">
            <Input></Input>
            <Button variant="outline">🔍</Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
