"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CoursePlatform() {
  const [activeTab, setActiveTab] = useState("Courses")

  const tabs = [
    { name: "Courses", icon: "🎓" },
    { name: "Communities", icon: "👥" },
    { name: "Coaching & Consulting", icon: "💼" },
    { name: "Merchandise", icon: "🛍️" },
    { name: "Podcasts", icon: "🎙️" },
    { name: "Events", icon: "📅" },
    { name: "Brokerage", icon: "🤝" },
  ]

  const companyLogos = [
    { name: "EYES", logo: "EYES" },
    { name: "K-ONET", logo: "K-ONET" },
    { name: "UIA", logo: "UIA" },
    { name: "PlannIT", logo: "PlannIT" },
    { name: "Company5", logo: "LOGO" },
    { name: "Company6", logo: "DEMO" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header with company logos */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-6 font-medium">TRUSTED BY +10000 CONSULTANTS & ORGANISATIONS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 bg-gray-200 py-4">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-gray-400  font-bold text-2xl">
                {company.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge className="bg-gradient-to-br from-[#FCC3FF] to-[#F75EFF] hover:bg-purple-600 text-black mb-6 px-4 py-2">
            DIVERSIFY REVENUE STREAM
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Maximise earnings with <span className="text-purple-600">limitless revenue streams.</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Create and sell courses, consulting services, and communities - with Zero marketing cost and a built-in
            sales network.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.name
                  ? "bg-[#2A0019] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

       {/* Feature Section */}
<div className="bg-gradient-to-r from-[#4C002D] to-[#2A001975] rounded-3xl rounded-bl-full rounded-tl-full rounded-br-3xl max-w-7xl mx-auto p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* Left Content */}
    <div className="p-4 sm:p-6 lg:p-12 text-white text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        Courses
      </h2>
      <p className="text-purple-100 mb-4 sm:mb-6 text-base sm:text-lg">
        Turn your knowledge into structured, sellable products.
      </p>

      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-purple-100 text-sm sm:text-base">
            Build online, drip, academic, or challenge-based courses with built-in tools
            for gamification, accountability, and engagement.
          </p>
        </div>
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-purple-100 text-sm sm:text-base">
            Every course is optimized to deliver value and generate recurring income.
          </p>
        </div>
      </div>

      <button className="px-6 py-3 rounded-full bg-white text-purple-700 font-medium hover:bg-purple-100 transition text-sm sm:text-base">
        Learn More
      </button>
    </div>

    {/* Right Image */}
    <div className="relative flex items-center justify-center">
      {/* Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="/image6.png"
          alt="Course Preview"
          className="rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] object-cover w-full h-64 sm:h-80 md:h-full"
        />

        {/* Overlay container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 px-2">
          {/* Subscription overlay */}
          <div className="bg-[#1882FB] shadow-lg rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 text-xs sm:text-sm">
            <span className="font-medium text-white">
              Subscribe for $5.00/mo
            </span>
          </div>

          {/* Course Info Card */}
          <div className="bg-white shadow-xl rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
              📚
            </div>
            <div>
              <p className="font-semibold text-xs sm:text-sm text-gray-800">
                Lady Dentaa Amoateng MBE
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                54 min • Oct 17, 2026
              </p>
            </div>
            <div className="ml-auto w-6 sm:w-7 h-6 sm:h-7 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] sm:text-xs">▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




      </div>
    </div>
  )
}
