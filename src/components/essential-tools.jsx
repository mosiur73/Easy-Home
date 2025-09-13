import { CreditCard, BarChart3, Mail, FileText, User, MessageSquare, Handshake, Crown, Building2 } from "lucide-react"

export function EssentialTools() {
  const features = [
    {
      icon: CreditCard,
      title: "Payments",
      description: "Responsibly sourced and eco-friendly fabrics for a better tomorrow.",
      color: "bg-pink-50 text-pink-600",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Understand your growth with smart, built-in analytics.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Mail,
      title: "Newsletters",
      description: "Build your audience with engaging, branded newsletters.",
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      icon: FileText,
      title: "Pages",
      description: "Showcase your expertise with a personal profile that sells for you.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: User,
      title: "Contact",
      description: "Organize your contacts and turn them into your most valuable asset.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: MessageSquare,
      title: "Emails",
      description: "Showcase your expertise with a personal profile that sells for you.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Handshake,
      title: "Co-sell network",
      description: "Collaborate with others to sell more without you spend or extra effort.",
      color: "bg-amber-50 text-amber-600",
    },
  ]

  return (
    <section className="py-16 px-4 bg-[#FDF6E8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 relative">
          

          <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ESSENTIAL TOOLS
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Essential Tools
            <br />
            Zero Distractions
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Create diverse products on the platform and leverage our <br /> powerful tools to drive sales within and beyond
            GrowHubs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Regular Feature Cards */}
          {features.map((feature, index) => (
            <div key={index} className="bg-[#FFFFFF] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>

              <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors flex items-center gap-2">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}

          {/* Enterprise Plan Card */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-orange-600 rounded-2xl p-6 text-white lg:col-span-2">
            <div className="flex justify-between items-center gap-3 mb-4">
             
              <h3 className="text-2xl font-bold text-yellow-400">Enterprise plan</h3>
               <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
               
                <Building2 className="w-6 h-6 text-gray-900" />
              </div>
            </div>

            <p className="text-gray-200 mb-6 leading-relaxed text-lg">
              Full white-label platform hosted on a dedicated, auto-scaling server. Includes branding freedom, private
              content protection, and 24/7 service availability.
            </p>

            <button className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors flex items-center gap-2">
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
