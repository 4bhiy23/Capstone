import React, { useState } from "react";
import properties from "../../assets/data/properties.json";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Cards_Per_Page = 12;

const Buy = () => {
  const navigate = useNavigate();

  const handleCardCick = (property) => {
    navigate(`/buy/property/${property.id}`, { state: { property } });
    console.log("Card Was clicked");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const TotalPages = Math.ceil(properties.length / Cards_Per_Page);
  const start = (currentPage - 1) * Cards_Per_Page;
  const currentCards = properties.slice(start, start + Cards_Per_Page);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {currentCards.map((property, idx) => (
          <div
            key={idx}
            onClick={() => handleCardCick(property)}
            className="cursor-pointer rounded-2xl shadow-md bg-white overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={
                "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
              }
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800">
                {property.name}
              </h2>
              <p className="text-sm text-gray-600">{property.location}</p>
              <p className="text-sm text-gray-600">{property.for}</p>
              <p className="text-sm text-gray-600">{property.area}</p>
              <p className="mt-2 font-bold text-yellow-700">{property.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-6 items-center mt-6">
        <Button
          className="cursor-pointer"
          disabled={currentPage === 1}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          ← Prev
        </Button>

        <div className="font-semibold text-gray-800">
          {currentPage}/{TotalPages}
        </div>

        <Button
          className="cursor-pointer"
          disabled={currentPage === TotalPages}
          onClick={() =>
            currentPage < TotalPages && setCurrentPage(currentPage + 1)
          }
        >
          Next →
        </Button>
      </div>
    </div>
  );
};

export default Buy;
