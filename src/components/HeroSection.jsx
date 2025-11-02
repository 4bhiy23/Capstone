import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section
      className="relative h-[90vh] w-full flex justify-end items-end text-right p-10 bg-cover bg-center"
      style={{ backgroundImage: "url('./src/assets/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-linear-to-l from-black/60 via-black/30 to-transparent"></div>

      <div className="relative max-w-xl">
        <h1 className="text-6xl md:text-7xl font-bold text-ivory mb-8 leading-tight">
          Find Your Dream Home with <span className="text-gold">DwellSmart</span>
        </h1>

        <div className="flex justify-end gap-2">
          <Input
            placeholder="Search by location or property..."
            className="w-64 md:w-80 bg-ivory/90 border-none text-gray-800 placeholder-gray-500"
          />
          <Button className="bg-gold text-charcoal hover:bg-gold/90">
            🔍
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
