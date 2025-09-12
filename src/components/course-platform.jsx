// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"

// export function CoursePlatform() {
//   const [activeTab, setActiveTab] = useState("Courses")

//   const tabs = [
//     { name: "Courses", icon: "🎓" },
//     { name: "Communities", icon: "👥" },
//     { name: "Coaching & Consulting", icon: "💼" },
//     { name: "Merchandise", icon: "🛍️" },
//     { name: "Podcasts", icon: "🎙️" },
//     { name: "Events", icon: "📅" },
//     { name: "Brokerage", icon: "🤝" },
//   ]

//   const companyLogos = [
//     { name: "EYES", logo: "EYES" },
//     { name: "K-ONET", logo: "K-ONET" },
//     { name: "UIA", logo: "UIA" },
//     { name: "PlannIT", logo: "PlannIT" },
//     { name: "Company5", logo: "LOGO" },
//     { name: "Company6", logo: "DEMO" },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
//       {/* Header with company logos */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center mb-8">
//           <p className="text-sm text-gray-600 mb-6 font-medium">TRUSTED BY +10000 CONSULTANTS & ORGANISATIONS</p>
//           <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
//             {companyLogos.map((company, index) => (
//               <div key={index} className="text-gray-400 font-bold text-lg">
//                 {company.logo}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Hero Section */}
//         <div className="text-center max-w-4xl mx-auto mb-12">
//           <Badge className="bg-purple-500 hover:bg-purple-600 text-white mb-6 px-4 py-2">
//             DIVERSIFY REVENUE STREAM
//           </Badge>

//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Maximise earnings with <span className="text-purple-600">limitless revenue streams.</span>
//           </h1>

//           <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
//             Create and sell courses, consulting services, and communities - with Zero marketing cost and a built-in
//             sales network.
//           </p>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {tabs.map((tab) => (
//             <button
//               key={tab.name}
//               onClick={() => setActiveTab(tab.name)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                 activeTab === tab.name
//                   ? "bg-purple-600 text-white shadow-lg"
//                   : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
//               }`}
//             >
//               <span>{tab.icon}</span>
//               {tab.name}
//             </button>
//           ))}
//         </div>

//         {/* Feature Section */}
//         <div className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
//           <div className="grid lg:grid-cols-2 gap-8 items-center">
//             {/* Left Content */}
//             <div className="p-8 lg:p-12 text-white">
//               <h2 className="text-3xl font-bold mb-6">Courses</h2>
//               <p className="text-purple-100 mb-6 text-lg">Turn your knowledge into structured, sellable products.</p>

//               <div className="space-y-4 mb-8">
//                 <div className="flex items-start gap-3">
//                   <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
//                   <p className="text-purple-100">
//                     Build online, drip, academic, or challenge-based courses with built-in tools for gamification,
//                     accountability, and engagement.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
//                   <p className="text-purple-100">
//                     Every course is optimized to deliver value and generate recurring income.
//                   </p>
//                 </div>
//               </div>

//               <Button
//                 variant="outline"
//                 className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
//               >
//                 Learn More
//               </Button>
//             </div>

//             {/* Right Image */}
//             <div className="relative p-8 lg:p-12">
//               <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                 <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 relative">
//                   {/* Video call interface mockup */}
//                   <div className="absolute inset-4 bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="w-20 h-20 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
//                         <span className="text-2xl">👨‍💼</span>
//                       </div>
//                       <p className="text-sm text-gray-600 font-medium">Professional Instructor</p>
//                     </div>
//                   </div>

//                   {/* Subscription overlay */}
//                   <div className="absolute bottom-4 right-4">
//                     <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
//                       Subscribe for $5.50/mo
//                     </div>
//                   </div>
//                 </div>

//                 {/* Course info */}
//                 <div className="p-4 border-t">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                       <span className="text-xs">📚</span>
//                     </div>
//                     <div>
//                       <p className="font-medium text-sm">Lady Dentist Announcing MBE</p>
//                       <p className="text-xs text-gray-500">5 lessons • 2hr 15min</p>
//                     </div>
//                     <div className="ml-auto">
//                       <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
//                         <span className="text-white text-xs">▶</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
