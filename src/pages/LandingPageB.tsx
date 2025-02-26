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
    state: '',
    helpType: ''
  })

  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const features = [
    {
      icon: "💰",
      title: "Lucrative, Long-Term Earnings",
      description: "10% recurring commissions for six months on every project you refer. The bigger the project, the more you earn."
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
      <header className="bg-white shadow-sm">
        <div className="max-w-[1800px] mx-auto px-8 py-2 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <img 
              src="https://ik.imagekit.io/buildable/Buildable-portrait-color-sq@0.5x.png?updatedAt=1739864048603" 
              alt="Buildable" 
              className="h-36"
            />
          </div>
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
                    Introduce businesses to Buildable's custom software solutions, and earn up to{' '}
                    <span className="inline-flex items-center font-semibold text-[#4945FF] px-1">
                      <span className="text-2xl md:text-3xl">10%</span>
                    </span>{' '}
                    of monthly invoices for{' '}
                    <span className="font-semibold text-[#1a1f36]">six months</span>
                    {' '}— no technical expertise or project management required.
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
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Generous Commission Structure</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Earn up to 10% of monthly invoices for six months</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Zero Technical Requirements</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Just make the introduction, we handle everything else</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Transparent Tracking</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Clear reporting on project status and commission calculations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Professional Support</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Dedicated partner manager ensures smooth handoffs</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-['Raleway']">Oregon-Based Development</h4>
                      <p className="text-white/80 text-lg font-['Lato'] font-normal">Clients work directly with our US-based engineering team</p>
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

                <div className="mt-auto">
                  <blockquote className="relative p-6 bg-white/5 rounded-xl border-l-4 border-white/30">
                    <p className="text-white/90 text-lg italic leading-relaxed mb-4 font-['Lato'] font-normal">
                      "Buildable's program is a no-brainer. One introduction turned into a $28,000 commission in just three months — the team is professional, and great to work with."
                    </p>
                    <footer className="text-white/70 font-['Lato'] font-normal">
                      – Michael T., Industry Consultant & Buildable Partner Since 2023
                    </footer>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#F9F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-green-200 to-transparent"></div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8 font-['Raleway']">Simple</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-light">3</span>
                <span className="text-2xl">steps</span>
                <span className="text-gray-400 ml-2">®</span>
              </div>
              <p className="text-gray-600 text-lg font-['Lato'] font-normal">
                Our streamlined referral process requires minimal effort from partners
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-left relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-200 to-transparent"></div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8 font-['Raleway']">Powerful</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-light">$27K</span>
                <span className="text-gray-400 ml-2">↗</span>
              </div>
              <p className="text-gray-600 text-lg font-['Lato'] font-normal">
                Average commission earned by our top referral partners in 2024
              </p>
              <p className="text-gray-600 text-lg font-['Lato'] font-normal mt-4">
                Our tiered structure rewards active partners, with higher commissions and exclusive benefits for those who consistently bring value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-left relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-200 to-transparent"></div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8 font-['Raleway']">Personal</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-light">89</span>
                <span className="text-2xl">%</span>
                <span className="text-gray-400 ml-2">☺</span>
              </div>
              <p className="text-gray-600 text-lg font-['Lato'] font-normal">
                Of referral partners have made multiple successful introductions
              </p>
              <p className="text-gray-600 text-lg font-['Lato'] font-normal mt-4">
                Top partners enjoy recognition, exclusive events, and direct access to Buildable leadership.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-32 mb-16"
          >
            <p className="text-xl text-gray-600 mb-6 font-['Lato'] font-normal">
              Ready to start earning commissions? Join our partner program today.
            </p>
            <a href="#" className="text-blue-600 text-lg font-medium hover:text-blue-700 inline-flex items-center font-['Lato'] font-normal">
              Learn more about the program
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                <p className="text-3xl font-light text-gray-900 mb-8 leading-relaxed font-['Lato'] font-normal">
                  "Partnering with Buildable has been a game-changer for my consulting business. Their team handles all the technical delivery while I focus on what I do best - building relationships. The commission structure is generous, and their support team is always there when I need them."
                </p>
                <footer>
                  <div className="flex items-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900 font-['Raleway']">Sarah Chen</div>
                      <div className="text-gray-600 font-['Lato']">Principal Consultant</div>
                      <div className="text-gray-600 font-['Lato']">Digital Transformation Partners</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="relative inline-block py-10 px-8 rounded-xl bg-gradient-to-b from-[#4945FF]/5 to-white">
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
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-8 mb-16 font-['Lato'] font-normal px-4">
              Join top-tier professionals as a trusted Buildable advocate.
            </p>
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
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">🎙️</span>
                      </div>
                      <span className="text-2xl text-white/90 font-['Lato'] font-normal">Podcast Hosts</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">👨‍💼</span>
                      </div>
                      <span className="text-2xl text-white/90 font-['Lato'] font-normal">Corporate Coaches</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <span className="text-2xl text-white/90 font-['Lato'] font-normal">Industry Influencers</span>
                    </li>
                  </ul>
                  <p className="text-white/80 text-lg font-['Lato'] mt-6">
                    We welcome unconventional partners who can connect us with unique, high-value opportunities.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-2xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto font-['Lato'] font-normal">
                  Don't let valuable opportunities slip away. Partner with Buildable and turn your connections into commissions while ensuring your network gets access to world-class software development services.
                </p>
              </div>
            </div>
          </div>

          {/* New Section: Building a Community of Advocates */}
          <div className="py-20 bg-[#F9F9FB] rounded-3xl my-20 max-w-6xl mx-auto">
            <div className="max-w-5xl mx-auto px-8">
              <h3 className="text-4xl font-bold text-center text-[#1a1f36] mb-10 font-['Raleway']">
                Building a Community of Advocates
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl leading-relaxed text-gray-700 font-['Lato'] font-normal mb-6">
                    Beyond referrals, we're building a network of advocates who champion Buildable. As a partner, you'll join an exclusive community, gain recognition, and access unique opportunities to grow your influence and earnings.
                  </p>
                  
                  {/* Modern visual element that replaces the old purple box */}
                  <div className="flex items-center space-x-4 mt-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4945FF] to-[#2d1b4d] flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gradient-to-r from-[#4945FF] to-[#2d1b4d] rounded-full"></div>
                      <p className="text-[#4945FF] font-semibold mt-2 font-['Lato']">Join our exclusive network today</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Updated image container with new aspect ratio */}
                  <div className="rounded-xl overflow-hidden bg-white shadow-lg" style={{ aspectRatio: '4/3' }}>
                    <div className="relative w-full h-full">
                      {/* New image with proper error handling */}
                      <img 
                        src="https://ik.imagekit.io/buildable/Buildable_Advocates.png?updatedAt=1740600881590" 
                        alt="Buildable Advocates Network" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80";
                        }}
                      />
                      
                      {/* Updated subtle caption overlay */}
                      <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 max-w-[60%] border border-[#4945FF]/20 shadow-sm">
                        <p className="text-[#4945FF] text-sm font-medium font-['Raleway']">
                          Advocates Drive Growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
              <button className="px-8 py-4 bg-[#4945FF] text-white rounded-md text-lg font-['Lato'] font-normal hover:bg-[#4945FF]/90 transition-colors">
                Partner with Buildable today and start earning
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#1d2333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-2xl font-light text-gray-400">
            FOOTER
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPageB 