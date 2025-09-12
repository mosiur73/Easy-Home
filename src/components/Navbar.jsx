import { Button } from "@/components/ui/button"
import { Heart, Home } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50   backdrop-blur">
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


// const properties = [
//   {
//     id: 1,
//     name: "Maple Grove Garden House",
//     price: 280,
//     location: "New York, USA",
//     beds: 4,
//     bathrooms: 4,
//     sqft: 450,
//     image: "/image.png",
//   },
//   {
//     id: 2,
//     name: "Sunset Towers Eklosbet",
//     price: 340,
//     location: "New York, USA",
//     beds: 4,
//     bathrooms: 4,
//     sqft: 450,
//     image: "/image1.png",
//   },
//   {
//     id: 3,
//     name: "Riverside Retreat",
//     price: 260,
//     location: "New York, USA",
//     beds: 4,
//     bathrooms: 4,
//     sqft: 450,
//     image: "/image2.png",
//   },
//   {
//     id: 4,
//     name: "Golden Meadows",
//     price: 280,
//     location: "New York, USA",
//     beds: 4,
//     bathrooms: 4,
//     sqft: 450,
//     image: "/image3.png",
//   },
//   {
//     id: 5,
//     name: "Ocean Sea Breeze",
//     price: 280,
//     location: "New York, USA",
//     beds: 4,
//     bathrooms: 4,
//     sqft: 450,
//     image: "/image4.png",
//   },
//   {
//     id: 6,
//     name: "The Urban Nest Lofts",
//     price: 280,
//     location: "New York, USA",
//     beds: 4,
//     bathrooms: 4,
//     sqft: 450,
//     image: "/image5.png",
//   },
// ]