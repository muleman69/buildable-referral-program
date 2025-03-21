import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Glow } from '../components/ui/glow'
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern'
import { GlowEffect } from '../components/ui/glow-effect'
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision'
import EarningsCalculator from '../components/calculator/EarningsCalculator'

function LandingPageB() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    website: '',
    linkedin: ''
  })
  
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setShowForm(false)
  }

  const features = [
    {
      icon: "💰",
      title: "Lucrative, Long-Term Earnings",
      description: "Earn generous commissions on every project you refer. The bigger the project, the more you earn."
    },
    {
      icon: "🤝",
      title: "Zero Effort, Maximum Impact",
      description: "You bring the connection; we handle scoping, development, and delivery. No technical skills needed."
    },
    {
      icon: "📊",
      title: "Real-Time Transparency",
      description: "Track referred projects and commissions 24/7 through your partner dashboard. No guesswork, just clarity."
    }
  ]

  const stats = [
    {
      value: "3",
      label: "Simple Process",
      description: "Refer, relax, and earn — our system is designed for your convenience."
    },
    {
      value: "$27K",
      label: "Powerful Earnings",
      description: "Top partners earn life-changing income by referring just 2-3 projects yearly."
    },
    {
      value: "89%",
      label: "Proven Results",
      description: "Partners keep coming back because the program works."
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="bg-white w-full">
        <div className="max-w-[1800px] mx-auto">
          <img 
            src="https://ik.imagekit.io/buildable/Buildable_Header.png?updatedAt=1740622781014" 
            alt="Buildable Header" 
            className="w-full"
          />
        </div>
      </header>

      {/* Hero Section */}
      <div className="py-24 md:py-32 bg-white relative z-[1]">
        <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-white/30">
          <img
            alt="Hero Background"
            className="w-full h-full object-cover opacity-15"
            src="https://ik.imagekit.io/buildable/Credit%20Union%20Hero%20Image%20(6).png?updatedAt=1739869859389"
          />
        </div>
        <div className="container relative z-[2] mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center">
            {/* Hero Text */}
            <div className="flex flex-col justify-center space-y-14 text-center max-w-5xl mx-auto px-4 md:px-6">
              <div className="space-y-10">
                <Badge
                  className="animate-appear [animation-delay:0.3s] [animation-fill-mode:backwards] mx-auto text-white font-medium px-4 py-2 text-base"
                  variant="secondary"
                >
                  Buildable Referral Program
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.2] font-bold text-[#1a1f36] tracking-tight animate-appear [animation-delay:0.4s] [animation-fill-mode:backwards] relative drop-shadow-sm font-['Raleway']">
                  Turn Connections into Cash with Buildable's Referral Program
                </h1>
                
                {/* Enhanced Subheadline */}
                <div className="max-w-[800px] mx-auto animate-appear [animation-delay:0.5s] [animation-fill-mode:backwards]">
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="absolute h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                  </div>
                  
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-['Lato'] font-normal">
                    Introduce businesses to Buildable's custom software solutions, and earn generous commissions
                    {' '}
                    <span className="inline-flex items-center font-semibold text-[#4945FF] px-1">
                      <span className="text-2xl md:text-3xl">on every project</span>
                    </span>
                    {' '}
                    — no technical expertise or project management required.
                  </p>
                  
                  <p className="mt-5 text-lg md:text-xl font-medium text-gray-800 font-['Lato']">
                    Just connect, and we handle the rest.
                  </p>
                  
                  <div className="flex justify-center mt-6">
                    <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#4945FF]/40 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Button 
                  size="lg" 
                  className="bg-[#4945FF] hover:bg-[#3835db] active:bg-[#2f2cb6] transition-colors text-white px-8 py-5 text-lg font-medium rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 duration-200"
                  onClick={() => setShowForm(true)}
                >
                  REQUEST PROGRAM DETAILS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Buildable Advantage */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1f36] to-[#2d3352] p-8 group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full">
                <h3 className="text-4xl font-bold text-white mb-8 font-['Raleway']">The Buildable Advantage</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Dedicated U.S. Based Development & UX Team</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Access our elite software and UX specialists dedicated to supporting your referrals.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">🧠</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Expert Advisory & Consultations</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Enjoy exclusive consultations and discovery sessions with industry-leading experts.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">📰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Monthly Insights Newsletter</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Stay ahead with tailored market insights and insider strategies delivered monthly.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">💸</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Investor Pitch Opportunities</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Collaborate with us to develop impactful proposals to secure investor funding.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Generous Referral Rewards</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Earn lucrative referral commissions or share directly in project revenue.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2d1b4d] to-[#492c7f] p-8 group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col">
                <h3 className="text-4xl font-bold text-white mb-12 font-['Raleway']">How It Works</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Partner Registration</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Complete our quick application process</p>
                    </div>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Make Introductions</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Connect us with businesses needing software solutions</p>
                    </div>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Earn Commissions</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Receive payments when projects launch and bills are paid</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Exclusive Conference Room Access</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Leverage our professional physical meeting spaces for high-impact client interactions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Premium Virtual Meeting Platform</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Use our sophisticated online meeting platform for seamless remote collaborations.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">💸</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Passive Referral Earnings</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Simply connect your network—then effortlessly earn tier-based referral commissions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Strategic Networking Invitations</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Gain exclusive access to webinars and high-value in-person networking opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Network, Our Expertise, Shared Success Section */}
      <section className="pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="relative inline-block py-10 px-8">
            <h2 className="text-[80px] sm:text-[60px] md:text-[80px] leading-[1.3] font-bold text-[#1a1f36] tracking-tight mb-8 font-['Raleway']">
              Your Network
              <br />
              Our Expertise
              <br />
              <span className="relative inline-block">
                Shared Success
                <span className="absolute -bottom-4 left-0 right-0 h-[3px] bg-[#1a1f36] w-[110%] mx-auto"></span>
              </span>
            </h2>
          </div>

          {/* Final CTA Section */}
          <div className="relative max-w-5xl mx-auto mb-16 mt-32 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#2d1b4d] to-[#492c7f] p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-8 font-['Raleway']">Transform Your Network</h3>
                  <div className="space-y-6">
                    <p className="text-2xl text-white/90 leading-relaxed font-['Lato'] font-normal">
                      Ready to transform your professional network into a revenue stream?
                    </p>
                    <p className="text-2xl text-white/90 leading-relaxed font-['Lato'] font-normal">
                      Join Buildable's Partner Program and start earning substantial commissions for connecting us with businesses that need custom software solutions.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-4xl font-bold text-white mb-8 font-['Raleway']">Perfect For</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">👔</span>
                      </div>
                      <span className="text-2xl text-white/90 font-['Lato'] font-normal">Business Consultants</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <span className="text-2xl text-white/90 font-['Lato'] font-normal">Agency Owners</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">💡</span>
                      </div>
                      <span className="text-2xl text-white/90 font-['Lato'] font-normal">Industry Experts</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">🤝</span>
                      </div>
                      <span className="text-2xl text-white/90 font-['Lato'] font-normal">Professional Service Providers</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-16 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-2xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto font-['Lato'] font-normal">
                  Don't let valuable opportunities slip away. Partner with Buildable and turn your connections into commissions while ensuring your network gets access to world-class software development services.
                </p>
              </div>
            </div>
          </div>

          {/* Earnings Calculator Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
            <h3 className="text-4xl font-bold text-center text-[#1a1f36] mb-12 font-['Raleway']">
              Calculate Your Potential Earnings
            </h3>
            <EarningsCalculator />
          </div>

          {/* GET STARTED Section */}
          <div id="get-started" className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-black mb-8 font-['Raleway']">
              Start earning with Buildable's Partner Program today.
            </h2>
            <div className="flex justify-center">
              <button 
                className="px-8 py-4 bg-[#4945FF] text-white rounded-md text-lg font-['Lato'] font-normal hover:bg-[#4945FF]/90 transition-colors"
                onClick={() => setShowForm(true)}
              >
                Request Program Details
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" 
              onClick={() => setShowForm(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold text-center mb-6 font-['Raleway']">Request Program Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4945FF] focus:border-[#4945FF]" 
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4945FF] focus:border-[#4945FF]" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4945FF] focus:border-[#4945FF]" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input 
                  type="url" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4945FF] focus:border-[#4945FF]" 
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                <input 
                  type="url" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4945FF] focus:border-[#4945FF]" 
                  value={formData.linkedin}
                  onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                  required
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-[#4945FF] text-white font-medium rounded-md hover:bg-[#3835db] transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white w-full">
        <div className="max-w-[1800px] mx-auto">
          <img 
            src="https://ik.imagekit.io/buildable/Buildable_Footer.png?updatedAt=1740622621077" 
            alt="Buildable Footer" 
            className="w-full"
          />
        </div>
      </footer>
    </div>
  )
}

export default LandingPageB 