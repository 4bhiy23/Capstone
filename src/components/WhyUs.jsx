import React from "react";
import { Home, MapPin, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Home className="w-10 h-10 text-amber-500" />,
    title: "Verified Homes",
    desc: "Every property listed on DwellSmart is thoroughly verified for authenticity.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-amber-500" />,
    title: "Smart Location Search",
    desc: "Find homes based on area, amenities, and commute — all in one place.",
  },
  {
    icon: <Shield className="w-10 h-10 text-amber-500" />,
    title: "Secure Deals",
    desc: "Safe, transparent, and user-first experience at every buying step.",
  },
  {
    icon: <Zap className="w-10 h-10 text-amber-500" />,
    title: "Instant Alerts",
    desc: "Get notified the moment a property matching your needs is listed.",
  },
];

const WhyUs = () => {
  return (
    <div className="py-16 bg-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="w-72 h-64 bg-amber-100 shadow-md rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
