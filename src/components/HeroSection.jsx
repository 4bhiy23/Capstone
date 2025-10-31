import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
const HeroSection = () => {
  return (
    <div
    className='bg-pink-300 h-[90vh] p-6 flex justify-start items-end'
    // style={{ backgroundImage: "url('/src/assets/hero.jpg')" }}
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
