"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Iva Ryan",
    role: "Marketing manager at Adobe",
    rating: 4,
    tags: ["Content Creator", "Youtuber", "Growth Expert"],
    text: "I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!",
    earnings: "$2M",
    earnedFrom: "EARNED IN HELENUIL",
    image: "/Frame.png",
  },
  {
    name: "John Smith",
    role: "Founder at StartupX",
    rating: 5,
    tags: ["Entrepreneur", "Mentor"],
    text: "The growth we experienced after using this tool was unbelievable. Our conversion rate skyrocketed.",
    earnings: "$500K",
    earnedFrom: "EARNED IN STARTUPX",
    image: "/Frame.png",
  },
  {
    name: "Sophia Lee",
    role: "Influencer & Blogger",
    rating: 5,
    tags: ["Lifestyle", "Marketing"],
    text: "Super easy to use and extremely powerful. I recommend it to anyone serious about scaling online.",
    earnings: "$1.2M",
    earnedFrom: "EARNED IN BLOGSPOT",
    image: "/Frame.png",
  },
  {
    name: "Iva Ryan",
    role: "Marketing manager at Adobe",
    rating: 4,
    tags: ["Content Creator", "Youtuber", "Growth Expert"],
    text: "I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!",
    earnings: "$2M",
    earnedFrom: "EARNED IN HELENUIL",
    image: "/Frame.png",
  },
  {
    name: "John Smith",
    role: "Founder at StartupX",
    rating: 5,
    tags: ["Entrepreneur", "Mentor"],
    text: "The growth we experienced after using this tool was unbelievable. Our conversion rate skyrocketed.",
    earnings: "$500K",
    earnedFrom: "EARNED IN STARTUPX",
    image: "/Frame.png",
  },
  {
    name: "Sophia Lee",
    role: "Influencer & Blogger",
    rating: 5,
    tags: ["Lifestyle", "Marketing"],
    text: "Super easy to use and extremely powerful. I recommend it to anyone serious about scaling online.",
    earnings: "$1.2M",
    earnedFrom: "EARNED IN BLOGSPOT",
    image: "/Frame.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#2A0019] to-[#3C4C5AD4] text-white">
      {/* Header Text */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="px-4 py-1 rounded-full text-xs font-semibold bg-pink-600 uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Trusted by Creators <br /> & Proven by Results.
        </h2>
        <p className="mt-3 text-gray-300">
          See how others grow with Growhubs — real stories, real success.
        </p>
      </div>

     {/* Slider */}
<Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={20}           // কার্ডগুলোর মাঝে স্পেস
  slidesPerView={1.2}        // মধ্যের কার্ড পুরো এবং পাশের কার্ড আংশিক
  centeredSlides={true}       // মধ্যের কার্ডকে সেন্টার করা
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  className="max-w-5xl mx-auto"
>
  {testimonials.map((t, index) => (
    <SwiperSlide key={index}>
      <div className="flex flex-col md:flex-row bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden">
        {/* Left Image/Video */}
        <div className="relative w-full md:w-1/3">
          <img
            src={t.image}
            alt={t.name}
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              ▶
            </span>
          </button>
        </div>

        {/* Right Content */}
        <div className="p-6 flex-1">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < t.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {t.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full border text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Testimonial */}
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            {t.text}
          </p>

          {/* Earnings */}
          <p className="mt-4 text-2xl font-bold text-gray-900">
            {t.earnings}
          </p>
          <p className="text-sm text-gray-500">{t.earnedFrom}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>



      
    </section>
  );
}
