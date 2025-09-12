"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, RotateCcw, Menu, X } from "lucide-react"

const properties = [
  {
    id: 1,
    name: "Maple Grove Garden House",
    price: 280,
    location: "New York, USA",
    beds: 4,
    bathrooms: 4,
    sqft: 450,
   image: "/image.png",
    gallery: [
      "/image.png",
      "/image1.png",
      "/image2.png",
      "/image3.png",
      "/image4.png",
      "/image5.png",
    ],
  },
  {
    id: 2,
    name: "Sunset Towers Eklosbet",
    price: 340,
    location: "New York, USA",
    beds: 4,
    bathrooms: 4,
    sqft: 450,
    image: "/image1.png",
    gallery: [
      "/image1.png",
      "/image.png",
      "/image2.png",
      "/image3.png",
      "/image4.png",
      "/image5.png",
    ],
  },
  {
    id: 3,
    name: "Riverside Retreat",
    price: 260,
    location: "New York, USA",
    beds: 4,
    bathrooms: 4,
    sqft: 450,
    image: "/image2.png",
    gallery: [
      "/image2.png",
      "/image.png",
      "/image1.png",
      "/image3.png",
      "/image4.png",
      "/image5.png",
    ],
  },
  {
    id: 4,
    name: "Golden Meadows",
    price: 280,
    location: "New York, USA",
    beds: 4,
    bathrooms: 4,
    sqft: 450,
    image: "/image3.png",
    gallery: [
        "/image3.png",
       "/image.png",
      "/image1.png",
      "/image2.png",
      "/image4.png",
      "/image5.png",
    ],
  },
  {
    id: 5,
    name: "Ocean Sea Breeze",
    price: 280,
    location: "New York, USA",
    beds: 4,
    bathrooms: 4,
    sqft: 450,
    image: "/image4.png",
    gallery: [
        "/image4.png",
       "/image.png",
      "/image1.png",
      "/image2.png",
      "/image3.png",
      "/image5.png",
    ],
  },
  {
    id: 6,
    name: "The Urban Nest Lofts",
    price: 280,
    location: "New York, USA",
    beds: 4,
    bathrooms: 4,
    sqft: 450,
    image: "/image5.png",
    gallery: [
       "/image5.png",
      "/image1.png",
      "/image2.png",
      "/image3.png",
      "/image4.png",
      "/image.png",
    ],
  },
]

export function PropertyListing() {
  const [budgetRange, setBudgetRange] = useState([300, 670000])
  const [selectedSuburbs, setSelectedSuburbs] = useState([])
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState(["Town House", "Villa", "Acreage"])
  const [selectedAmenities, setSelectedAmenities] = useState(["Pet-friendly", "Private Pool"])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const suburbs = ["Eshelby Drive, Cranbrook", "2-6 Eshelby Dr, Cammeraville", "99/3 Eshelby Drive Cammeraville"]

  const propertyTypes = ["House", "Land", "Apartment", "Town House", "Villa", "Acreage"]

  const amenities = ["Pet-friendly", "Parking", "Private Pool", "Private Pool"]

  const openPropertyModal = (property) => {
    setSelectedProperty(property)
    setSelectedImageIndex(0)
  }

  const closePropertyModal = () => {
    setSelectedProperty(null)
    setSelectedImageIndex(0)
  }

  const handleSuburbChange = (suburb, checked) => {
    if (checked) {
      setSelectedSuburbs([...selectedSuburbs, suburb])
    } else {
      setSelectedSuburbs(selectedSuburbs.filter((s) => s !== suburb))
    }
  }

  const handlePropertyTypeChange = (type, checked) => {
    if (checked) {
      setSelectedPropertyTypes([...selectedPropertyTypes, type])
    } else {
      setSelectedPropertyTypes(selectedPropertyTypes.filter((t) => t !== type))
    }
  }

  const handleAmenityChange = (amenity, checked) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenity])
    } else {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity))
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden bg-white shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {selectedProperty && (
        <div className="fixed inset-0  bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
                onClick={closePropertyModal}
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="p-6">
                <div className="mb-4">
                  <img
                    src={selectedProperty.gallery[selectedImageIndex] || "/placeholder.svg"}
                    alt={selectedProperty.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2">
                  {selectedProperty.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index ? "border-purple-600" : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${selectedProperty.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white border-r border-gray-200 p-4 lg:p-6 
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex items-center justify-between mb-6 pt-12 lg:pt-0">
          <h2 className="text-lg font-semibold text-gray-900">Property Preference</h2>
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
            <RotateCcw className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Reset Filter</span>
          </Button>
        </div>

        <div className="mb-6 lg:mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Rent Budget</h3>
            <Button variant="ghost" size="sm" className="p-0 h-auto">
              <span className="text-gray-400">−</span>
            </Button>
          </div>
          <div className="space-y-4">
            <Slider
              value={budgetRange}
              onValueChange={setBudgetRange}
              max={670000}
              min={300}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Minimum</span>
              <span>Maximum</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">${budgetRange[0]}</span>
              <span className="text-sm font-medium">${budgetRange[1]}</span>
            </div>
          </div>
        </div>

        <div className="mb-6 lg:mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Suburb</h3>
            <Button variant="ghost" size="sm" className="p-0 h-auto">
              <span className="text-gray-400">−</span>
            </Button>
          </div>
          <div className="space-y-3">
            {suburbs.map((suburb) => (
              <div key={suburb} className="flex items-center space-x-2">
                <Checkbox
                  id={suburb}
                  checked={selectedSuburbs.includes(suburb)}
                  onCheckedChange={(checked) => handleSuburbChange(suburb, checked)}
                />
                <label htmlFor={suburb} className="text-sm text-gray-700 cursor-pointer leading-tight">
                  {suburb}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 lg:mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Property Type</h3>
            <Button variant="ghost" size="sm" className="p-0 h-auto">
              <span className="text-gray-400">−</span>
            </Button>
          </div>
          <div className="space-y-3">
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={selectedPropertyTypes.includes(type)}
                  onCheckedChange={(checked) => handlePropertyTypeChange(type, checked)}
                />
                <label htmlFor={type} className="text-sm text-gray-700 cursor-pointer">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 lg:mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Amenities</h3>
            <Button variant="ghost" size="sm" className="p-0 h-auto">
              <span className="text-gray-400">−</span>
            </Button>
          </div>
          <div className="space-y-3">
            {amenities.map((amenity, index) => (
              <div key={`${amenity}-${index}`} className="flex items-center space-x-2">
                <Checkbox
                  id={`${amenity}-${index}`}
                  checked={selectedAmenities.includes(amenity)}
                  onCheckedChange={(checked) => handleAmenityChange(amenity, checked)}
                />
                <label htmlFor={`${amenity}-${index}`} className="text-sm text-gray-700 cursor-pointer">
                  {amenity}
                </label>
              </div>
            ))}
          </div>
          <Button variant="link" className="text-purple-600 p-0 h-auto mt-2 text-sm">
            see more
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 lg:p-6 lg:ml-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pt-16 lg:pt-0 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">Property</h1>
            <span className="text-gray-500 text-sm lg:text-base">— Showing result: (12)</span>
          </div>
          <Select defaultValue="low-to-high">
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low-to-high">Sort by: Low to High</SelectItem>
              <SelectItem value="high-to-low">Sort by: High to Low</SelectItem>
              <SelectItem value="newest">Sort by: Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-6 mb-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openPropertyModal(property)}
            >
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
              </div>
              <CardContent className="p-3 lg:p-4">
                <div className="flex flex-wrap items-center gap-2 mb-2 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded"></span>
                    <span>Bed: {property.beds}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded"></span>
                    <span>Bath: {property.bathrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded"></span>
                    <span>{property.sqft}sqft</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base leading-tight">{property.name}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-lg font-bold text-gray-900">${property.price}</span>
                  <span className="text-xs sm:text-sm text-gray-500">/week — {property.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button variant="ghost" className="flex items-center space-x-2 w-full sm:w-auto">
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto">
            <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700 min-w-[32px]">
              1
            </Button>
            <Button variant="ghost" size="sm" className="min-w-[32px]">
              2
            </Button>
            <Button variant="ghost" size="sm" className="min-w-[32px]">
              3
            </Button>
            <span className="text-gray-400 hidden sm:inline">...</span>
            <Button variant="ghost" size="sm" className="min-w-[32px] hidden sm:inline-flex">
              8
            </Button>
            <Button variant="ghost" size="sm" className="min-w-[32px] hidden sm:inline-flex">
              9
            </Button>
            <Button variant="ghost" size="sm" className="min-w-[32px]">
              10
            </Button>
          </div>

          <Button variant="ghost" className="flex items-center space-x-2 w-full sm:w-auto">
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
