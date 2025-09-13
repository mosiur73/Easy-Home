"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Home, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-purple-700">WiztecBD</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Buy</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Rent</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Sell</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Agents</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Blogs</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Contact Us</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Favourite = Always visible */}
          <Button variant="ghost" className="text-gray-700 hover:text-purple-700 font-medium">
            <Heart className="w-4 h-4 mr-2" />
            Favourite
          </Button>

          {/* Login Now = Desktop only */}
            <Link href="/signin">
          <Button className="hidden md:inline-flex bg-purple-800 hover:bg-purple-900 text-white px-6 py-2 rounded-full font-medium">
            Login Now</Button>
          </Link>
          

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 right-0 w-1/2 h-fit flex flex-col items-start gap-4 px-6 py-4 bg-white border-t border-gray-200">
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium">Buy</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium">Rent</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium">Sell</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium">Agents</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium">Blogs</a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium">Contact Us</a>

          {/* Login button only in dropdown for mobile */}
          <Button className="bg-purple-800 hover:bg-purple-900 text-white rounded-full font-medium w-full mt-2">
             <Link href="/signin"></Link>Login Now
          </Button>
        </div>
      )}
    </nav>
  )
}
