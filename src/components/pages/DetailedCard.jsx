import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

const DetailedCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { property } = location.state || {};

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-xl">
        <p>⚠️ No property data found.</p>
        <Button className="mt-4" onClick={() => navigate(-1)}>
          ← Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      {/* Hero Section */}
      <div className="relative w-full h-[600px]">
        <img
          src={'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80'}
          alt={property.name}
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white space-y-3">
          <h1 className="text-4xl font-bold drop-shadow-lg">{property.name}</h1>
          <p className="text-lg text-gray-200">{property.location}</p>
          <span className="bg-indigo-600 px-4 py-1 rounded-full text-sm uppercase tracking-wide">
            {property.for}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {/* Overview */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              This {property.type.toLowerCase()} located in{" "}
              <span className="font-medium text-gray-800">
                {property.location}
              </span>{" "}
              offers a modern living experience with all essential amenities and
              excellent connectivity. Perfect for families and professionals
              looking for comfort and luxury.
            </p>
          </div>
          <div className="text-right space-y-2">
            <h3 className="text-3xl font-bold text-emerald-600">
              {property.price}
            </h3>
            <p className="text-gray-500 text-sm">{property.area}</p>
          </div>
        </div>

        {/* Property Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-700">
          <div className="bg-white shadow-sm p-5 rounded-xl text-center">
            <p className="text-2xl font-semibold">{property.beds}</p>
            <p className="text-gray-500 text-sm">Bedrooms</p>
          </div>
          <div className="bg-white shadow-sm p-5 rounded-xl text-center">
            <p className="text-2xl font-semibold">{property.baths}</p>
            <p className="text-gray-500 text-sm">Bathrooms</p>
          </div>
          <div className="bg-white shadow-sm p-5 rounded-xl text-center">
            <p className="text-2xl font-semibold">{property.area}</p>
            <p className="text-gray-500 text-sm">Area</p>
          </div>
          <div className="bg-white shadow-sm p-5 rounded-xl text-center">
            <p className="text-2xl font-semibold">{property.type}</p>
            <p className="text-gray-500 text-sm">Property Type</p>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Amenities
          </h2>
          <div className="flex flex-wrap gap-3">
            {property.amenities.map((amenity, i) => (
              <span
                key={i}
                className="bg-indigo-50 text-indigo-700 px-5 py-2 rounded-full text-sm font-medium"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="flex justify-between items-center pt-10 border-t">
          <Button variant="outline" onClick={() => navigate(-1)}>
            ← Back
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6 rounded-xl">
            Contact Agent
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
