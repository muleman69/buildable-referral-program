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
    "A no-obligation consultation about our referral partner program",
    "A detailed overview of our generous commission structure - up to 10% for 6 months",
    "An opportunity to discuss how you can turn your network into a revenue stream with minimal effort"
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
            className="h-24"
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
                Turn Your Network into Income with Buildable's Partner Program
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                Ready to earn substantial commissions without the heavy lifting? Our referral program rewards connectors who introduce quality software projects to our team, with payouts of up to 10% for six months on successfully landed projects.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold mb-4">What can I expect?</h2>
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
                <p className="text-sm text-gray-500 mt-6">No credit card required—just a free, personalized consultation.</p>
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
                        <option value="referral" className="bg-[#2d1b4d]">I want to refer clients</option>
                        <option value="learn" className="bg-[#2d1b4d]">Learn more about the program</option>
                        <option value="partner" className="bg-[#2d1b4d]">Become a referral partner</option>
                        <option value="other" className="bg-[#2d1b4d]">Other</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white pointer-events-none" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4945FF] text-white py-3 px-6 rounded-md font-medium hover:bg-[#4945FF]/90 transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    Next Step
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The world's leading credit unions trust Buildable to keep them compliant and efficient
            </h2>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8"
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-6 text-lg italic">
              "Partnering with Buildable has been a game-changer for my consulting business. Their team handles all the technical delivery while I focus on what I do best - building relationships. The commission structure is generous, and their support team is always there when I need them."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-gray-600">Principal Consultant, Digital Transformation Partners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default LandingPageA 