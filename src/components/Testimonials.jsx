import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Software Engineer, Pune",
    text: "Finding my first home through DwellSmart was a dream. Their UI made browsing easy, and every listing felt authentic.",
    img: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "UX Designer, Bangalore",
    text: "Loved the interface and how transparent the agents were. The virtual tours saved me so much time!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    role: "Marketing Lead, Delhi NCR",
    text: "It felt like the Airbnb of home buying. Simple, sleek, and beautifully responsive. Kudos to the team!",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    name: "Kabir Khanna",
    role: "Entrepreneur, Mumbai",
    text: "Scheduling visits and managing shortlisted properties was so smooth. The user experience is top-notch!",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Ananya Patel",
    role: "Data Analyst, Ahmedabad",
    text: "I’ve used multiple platforms, but DwellSmart’s layout and trust factor are unmatched. Loved the pastel theme too!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Devraj Nair",
    role: "Consultant, Hyderabad",
    text: "It felt like having a personal real estate agent inside my screen. So intuitive and modern!",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-linear-to-b from-white to-pink-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Users Say
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto px-6"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: 0.1 }}
              className="bg-white shadow-xl rounded-2xl p-8 relative flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="w-6 h-6 text-pink-400 absolute top-5 left-5 opacity-60" />
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-pink-300"
              />
              <p className="text-gray-600 italic mb-4 leading-relaxed">
                “{t.text}”
              </p>
              <h4 className="font-semibold text-lg">{t.name}</h4>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
