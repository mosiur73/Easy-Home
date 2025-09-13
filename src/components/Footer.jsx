import { Facebook, Twitter, Instagram, MessageCircle, AtSign, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1b0b1e] to-[#2a1230] text-white overflow-hidden">
      

      {/* Footer content */}
      <div className="relative z-10 px-6 py-12 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* About Us Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Property
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <a href="mailto:hello.abc@gmail.com" className="hover:text-white transition-colors duration-200">
                    hello.abc@gmail.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <a href="tel:+01233455607" className="hover:text-white transition-colors duration-200">
                    +01233455607
                  </a>
                </p>
              </div>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label="Threads"
                >
                  <AtSign className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <Music className="w-5 h-5" />
                </a>
              </div>
               <div className="text-gray-400 text-sm mt-10">© 2025 Havonik. All rights reserved.</div>

            </div>
          </div>
        </div>
        <div className="text-[5rem] md:text-[12rem] lg:text-[12rem] font-bold text-[#8A7384] text-center leading-none whitespace-nowrap">
          WiztecBD
        </div>
      </div>
    </footer>
  )
}
