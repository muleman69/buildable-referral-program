import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'

function LandingPageA() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    state: '',
    helpType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const features = [
    "10% recurring commissions for six months on every project you refer. The bigger the project, the more you earn.",
    "You bring the connection; we handle scoping, development, and delivery. No technical skills needed.",
    "Track referred projects and commissions 24/7 through your partner dashboard. No guesswork, just clarity."
  ]

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <img 
            src="https://ik.imagekit.io/buildable/Buildable-portrait-color-sq@0.5x.png?updatedAt=1739864048603" 
            alt="Buildable" 
            className="h-36"
          />
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="pt-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-gray-900 mb-6"
              >
                Turn Connections into Cash with Buildable's Referral Program
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                Introduce businesses to Buildable's custom software solutions, and earn up to 10% of monthly invoices for six months — no technical expertise or project management required. Just connect, and we handle the rest.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold mb-4">The Buildable Advantage</h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6">
                        <CheckIcon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-6">Stop leaving money on the table. Your network is worth more than LinkedIn connections.</p>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-40">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-[#2d1b4d] rounded-lg p-8 text-white shadow-xl"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Request Program Details</h2>
                  <p className="text-sm opacity-80">Step 1 of 2</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Business Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium mb-1">
                      State <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="state"
                        required
                        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white appearance-none"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      >
                        <option value="" className="bg-[#2d1b4d]">Select...</option>
                        {states.map((state) => (
                          <option key={state} value={state} className="bg-[#2d1b4d]">{state}</option>
                        ))}
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="helpType" className="block text-sm font-medium mb-1">
                      How can we help you? <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="helpType"
                        required
                        className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white appearance-none"
                        value={formData.helpType}
                        onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                      >
                        <option value="" className="bg-[#2d1b4d]">Select...</option>
                        <option value="compensation" className="bg-[#2d1b4d]">Learn about the referral program compensation</option>
                        <option value="clients" className="bg-[#2d1b4d]">Discuss potential clients in my network</option>
                        <option value="process" className="bg-[#2d1b4d]">Understand the referral process</option>
                        <option value="partnership" className="bg-[#2d1b4d]">Explore partnership opportunities</option>
                        <option value="other" className="bg-[#2d1b4d]">Other (please specify)</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white pointer-events-none" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4945FF] text-white py-3 px-6 rounded-md font-medium hover:bg-[#4945FF]/90 transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    Request Program Details
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-green-200 to-transparent"></div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8">Simple Process</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-light">3</span>
                <span className="text-2xl">Steps</span>
              </div>
              <p className="text-gray-600 text-lg">
                Refer, relax, and earn — our system is designed for your convenience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-left relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-200 to-transparent"></div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8">Powerful Earnings</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-light">$27K</span>
                <span className="text-gray-400 ml-2">↗</span>
              </div>
              <p className="text-gray-600 text-lg">
                Top partners earn life-changing income by referring just 2-3 projects yearly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-left relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-200 to-transparent"></div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8">Proven Results</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-light">89</span>
                <span className="text-2xl">%</span>
              </div>
              <p className="text-gray-600 text-lg">
                Partners keep coming back because the program works.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-12 items-center"
          >
            <div className="w-1/3">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-400 to-orange-500 flex items-center justify-center p-8">
                <img 
                  src="https://ik.imagekit.io/buildable/AI%20Brand%20Agent%20Profile%20Image%20(4).png?updatedAt=1739872336229" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            
            <div className="w-2/3">
              <blockquote>
                <p className="text-3xl font-light text-gray-900 mb-8 leading-relaxed">
                  "Buildable turned my network into a revenue engine. Their team delivers tailored software solutions, so I've built a deeper trust with my existing clients and earn commissions. In 2024 alone, I earned $83,000 — all while focusing on my core business."
                </p>
                <footer>
                  <div className="flex items-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">Sarah Chen</div>
                      <div className="text-gray-600">Industry Consultant</div>
                      <div className="text-gray-600">Digital Transformation Partners</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Audience Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12">Ideal For Visionaries Who Connect:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Consultants</h3>
              <p>Monetize your client relationships without added workload.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Agency Owners</h3>
              <p>Offer software development as a white-label service.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Industry Leaders</h3>
              <p>Capitalize on your niche network.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Advisors</h3>
              <p>Turn your recommendations into revenue.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-4xl font-bold mb-6">Stop Leaving Money on the Table</h2>
          <p className="text-xl text-gray-600 mb-8">
            Your network is worth more than LinkedIn connections. Partner with Buildable to unlock its full financial potential — while delivering elite software solutions to your contacts.
          </p>
          <button className="bg-[#4945FF] text-white py-4 px-8 rounded-md font-medium hover:bg-[#4945FF]/90 transition-colors duration-200 text-lg">
            Start Earning with Buildable's Partner Program Today
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Terms & Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Accessibility</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Do Not Sell</a>
            </div>
            <div className="text-gray-600">
              © 2025 Buildable
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPageA 