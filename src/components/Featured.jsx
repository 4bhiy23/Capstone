import React from 'react'
import { MapPin } from 'lucide-react';
import { Button } from './ui/Button';

const properties = [
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800",
    title: "Modern Villa in Pune",
    location: "Baner, Pune",
    price: "₹1.2 Cr",
    details: "3BHK • 2 Bath • 1650 sq.ft",
  },
  {
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800",
    title: "Luxury Apartment",
    location: "Gurgaon, Delhi NCR",
    price: "₹90 Lakh",
    details: "2BHK • 2 Bath • 1200 sq.ft",
  },
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    title: "Cozy Family Home",
    location: "Whitefield, Bangalore",
    price: "₹1.05 Cr",
    details: "3BHK • 3 Bath • 1450 sq.ft",
  },
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    title: "Stylish Studio",
    location: "Andheri, Mumbai",
    price: "₹82 Lakh",
    details: "1BHK • 1 Bath • 780 sq.ft",
  },
];

const Featured = () => {
  return (
    <div className="py-16 text-center bg-linear-to-b from-[#fff8e1] via-[#ffefc2] to-[#fdf6e3]">
      <h2 className="text-4xl font-bold mb-10 text-[#b8860b]">Best Picks of the Week</h2>
      
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {properties.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 w-72 border border-[#f5deb3]/50"
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-xl mb-1">{p.title}</h3>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#c5a236]" /> {p.location}
              </p>
              <p className="text-gray-500 text-sm mt-2">{p.details}</p>
              <p className="font-bold text-lg mt-3 text-[#b8860b]">{p.price}</p>
              <Button className="mt-4 w-full bg-[#d4af37] hover:bg-[#c5a236] text-white cursor-pointer">
                View Details ↗
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
