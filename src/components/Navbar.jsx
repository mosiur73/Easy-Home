import { Button } from "@/components/ui/button"
import { Heart, Home } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-purple-700">WiztecBD</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            Buy
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            Rent
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            Sell
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            Agents
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            Blogs
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
            Contact Us
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-gray-700 hover:text-purple-700 font-medium">
            <Heart className="w-4 h-4 mr-2" />
            Favourite
          </Button>
          <Button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-2 rounded-full font-medium">
            Login Now
          </Button>
        </div>
      </div>
    </nav>
  )
}
