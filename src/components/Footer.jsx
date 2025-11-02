import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <img
            src="./src/assets/logo/dwellsmart-light.svg"
            alt="DwellSmart"
            className="h-10 mb-4 invert brightness-0"
          />
          <p className="text-sm leading-relaxed text-ivory/70">
            DwellSmart helps you find, explore, and buy your dream home with ease —
            a smarter way to dwell, one click at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg text-gold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Buy", "Explore", "Contact", "About"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-gold transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg text-gold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" /> R2, Rishihood University
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" /> support@dwellsmart.in
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" /> +91 8178199707
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-lg text-gold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-ivory/70 hover:text-gold transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Divider Line */}
      <div className="border-t border-ivory/20 mt-10 pt-6 text-center text-sm text-ivory/60">
        © 2025 DwellSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
