import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/*Logo + About */}
        <div>
          <img
            src="./src/assets/logo/dwellsmart-dark.png"
            alt="DwellSmart"
            className="h-10 mb-4"
          />
          <p className="text-sm leading-relaxed">
            DwellSmart helps you find, explore, and buy your dream home with ease.
            A smarter way to dwell, one click at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-600">Home</a></li>
            <li><a href="#" className="hover:text-pink-600">Buy</a></li>
            <li><a href="#" className="hover:text-pink-600">Explore</a></li>
            <li><a href="#" className="hover:text-pink-600">Contact</a></li>
            <li><a href="#" className="hover:text-pink-600">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-500" /> R2, Rishihood University
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-pink-500" /> support@dwellsmart.in
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink-500" /> +91 8178199707
            </li>
          </ul>
        </div>

        {/*  Social Icons */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-pink-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-600">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Divider Line */}
      <div className="border-t border-pink-200 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 DwellSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
