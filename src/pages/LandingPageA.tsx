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
    "A no-obligation demo tailored to your credit union's needs",
    "A live look at Euriqa's AI-powered automation for compliance and document management",
    "An opportunity to ask questions and explore how AI can save your credit union time, reduce risks, and improve operational efficiency"
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
            src="https://ik.imagekit.io/buildable/Euriqa_AI_Logo_Transparent.png?updatedAt=1739249111622" 
            alt="Euriqa AI" 
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
                See What Euriqa AI Can Do for Your Credit Union...
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                And why Euriqa AI is the leading AI-powered compliance and document automation tool for credit unions. Book a demo and see how it can streamline compliance, automate document management, and improve member service.
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
                className="bg-[#022D41] rounded-lg p-8 text-white shadow-xl"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Request a Euriqa AI Enterprise Demo</h2>
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
                        <option value="" className="bg-[#022D41]">Select...</option>
                        {states.map((state) => (
                          <option key={state} value={state} className="bg-[#022D41]">{state}</option>
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
                        <option value="" className="bg-[#022D41]">Select...</option>
                        <option value="compliance" className="bg-[#022D41]">Compliance Automation</option>
                        <option value="document" className="bg-[#022D41]">Document Synchronization</option>
                        <option value="service" className="bg-[#022D41]">AI-Powered Member Service</option>
                        <option value="all" className="bg-[#022D41]">All of the Above</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white pointer-events-none" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00B2E3] text-white py-3 px-6 rounded-md font-medium hover:bg-[#00A0D1] transition-colors duration-200 shadow-sm hover:shadow-md"
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
              The world's leading credit unions trust Euriqa AI to keep them compliant and efficient
            </h2>
          </motion.div>

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center mb-16"
          >
            <img
              src="https://ik.imagekit.io/buildable/Credit%20Union%20Hero%20Image%20(2).png?updatedAt=1739567624357"
              alt="Forrit Credit Union"
              className="h-48 object-contain"
            />
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
              "Before implementing Euriqa, our team spent countless hours sifting through outdated manuals to find the right policies. Now, with Euriqa's intuitive platform, accessing the latest procedures is instantaneous, boosting our efficiency and morale."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-gray-900">John Delano</p>
                <p className="text-gray-600">Compliance Officer, Forrit</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default LandingPageA 