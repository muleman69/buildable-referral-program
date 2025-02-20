import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Glow } from '../components/ui/glow'
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern'
import { GlowEffect } from '../components/ui/glow-effect'
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision'

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
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-[100]">
        <div className="max-w-[1800px] mx-auto px-8 py-2 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <img 
              src="https://ik.imagekit.io/buildable/Buildable-portrait-color-sq@0.5x.png?updatedAt=1739864048603" 
              alt="Buildable" 
              className="h-36"
            />
            <Button 
              size="lg" 
              className="bg-[#4945FF] hover:bg-[#4945FF]/90 text-white px-8 py-2 text-base font-medium"
            >
              Request Program Details
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="min-h-screen pt-48 bg-white relative z-[1]">
        <div className="absolute inset-0 z-0">
          <img
            alt="Hero Background"
            className="w-full h-full object-cover opacity-10"
            src="https://ik.imagekit.io/buildable/Credit%20Union%20Hero%20Image%20(6).png?updatedAt=1739869859389"
          />
        </div>
        <div className="container relative z-[2] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-12 mt-24">
            {/* Hero Text */}
            <div className="flex flex-col justify-center space-y-8 text-center max-w-5xl mx-auto">
              <div className="space-y-6">
                <Badge
                  className="animate-appear [animation-delay:0.3s] [animation-fill-mode:backwards] mx-auto text-white"
                  variant="secondary"
                >
                  Buildable Referral Program
                </Badge>
                <h1 className="text-[84px] leading-[1.1] font-extrabold text-[#1a1f36] tracking-tight animate-appear [animation-delay:0.4s] [animation-fill-mode:backwards] relative">
                  Turn Connections into Cash with Buildable's Referral Program
                </h1>
                <p className="max-w-[800px] text-gray-600 text-xl animate-appear [animation-delay:0.5s] [animation-fill-mode:backwards] mx-auto">
                  Introduce businesses to Buildable's custom software solutions, and earn up to 10% of monthly invoices for six months — no technical expertise or project management required. Just connect, and we handle the rest.
                </p>
              </div>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#4945FF] hover:bg-[#4945FF]/90 text-white px-8 py-4 text-lg font-medium"
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
                <h3 className="text-4xl font-bold text-white mb-8">The Buildable Advantage</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Generous Commission Structure</h4>
                      <p className="text-white/80 text-lg">Earn up to 10% of monthly invoices for six months</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Zero Technical Requirements</h4>
                      <p className="text-white/80 text-lg">Just make the introduction, we handle everything else</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Transparent Tracking</h4>
                      <p className="text-white/80 text-lg">Clear reporting on project status and commission calculations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Professional Support</h4>
                      <p className="text-white/80 text-lg">Dedicated partner manager ensures smooth handoffs</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Oregon-Based Development</h4>
                      <p className="text-white/80 text-lg">Clients work directly with our US-based engineering team</p>
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
                <h3 className="text-4xl font-bold text-white mb-12">How It Works</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Partner Registration</h4>
                      <p className="text-white/80 text-lg">Complete our quick application process</p>
                    </div>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Make Introductions</h4>
                      <p className="text-white/80 text-lg">Connect us with businesses needing software solutions</p>
                    </div>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Earn Commissions</h4>
                      <p className="text-white/80 text-lg">Receive payments when projects launch and bills are paid</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <blockquote className="relative p-6 bg-white/5 rounded-xl border-l-4 border-white/30">
                    <p className="text-white/90 text-lg italic leading-relaxed mb-4">
                      "Buildable's program is a no-brainer. One introduction turned into a $28,000 commission in just three months — the team is professional, and great to work with."
                    </p>
                    <footer className="text-white/70">
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
              <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8">Simple</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-light">3</span>
                <span className="text-2xl">steps</span>
                <span className="text-gray-400 ml-2">®</span>
              </div>
              <p className="text-gray-600 text-lg">
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
              <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8">Powerful</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-light">$27K</span>
                <span className="text-gray-400 ml-2">↗</span>
              </div>
              <p className="text-gray-600 text-lg">
                Average commission earned by our top referral partners in 2024
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-left relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-200 to-transparent"></div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8">Personal</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-light">89</span>
                <span className="text-2xl">%</span>
                <span className="text-gray-400 ml-2">☺</span>
              </div>
              <p className="text-gray-600 text-lg">
                Of referral partners have made multiple successful introductions
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-32 mb-16"
          >
            <p className="text-xl text-gray-600 mb-6">
              Ready to start earning commissions? Join our partner program today.
            </p>
            <a href="#" className="text-blue-600 text-lg font-medium hover:text-blue-700 inline-flex items-center">
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
                <p className="text-3xl font-light text-gray-900 mb-8 leading-relaxed">
                  "Partnering with Buildable has been a game-changer for my consulting business. Their team handles all the technical delivery while I focus on what I do best - building relationships. The commission structure is generous, and their support team is always there when I need them."
                </p>
                <footer>
                  <div className="flex items-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">Sarah Chen</div>
                      <div className="text-gray-600">Principal Consultant</div>
                      <div className="text-gray-600">Digital Transformation Partners</div>
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
          <div className="relative inline-block">
            <h2 className="text-[96px] leading-[1.1] font-extrabold text-[#1a1f36] tracking-tight mb-8">
              Your Network.
              <br />
              Our Expertise.
              <br />
              Shared Success<span className="relative inline-block">.</span>
            </h2>
          </div>

          {/* Final CTA Section */}
          <div className="relative max-w-5xl mx-auto mb-16 mt-32 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#2d1b4d] to-[#492c7f] p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-8">Transform Your Network</h3>
                  <p className="text-2xl text-white/90 leading-relaxed">
                    Ready to transform your professional network into a revenue stream? Join Buildable's Partner Program and start earning substantial commissions for connecting us with businesses that need custom software solutions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-4xl font-bold text-white mb-8">Perfect For</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">👔</span>
                      </div>
                      <span className="text-2xl text-white/90">Business Consultants</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <span className="text-2xl text-white/90">Agency Owners</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">💡</span>
                      </div>
                      <span className="text-2xl text-white/90">Industry Experts</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-2xl">🤝</span>
                      </div>
                      <span className="text-2xl text-white/90">Professional Service Providers</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-16 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <p className="text-2xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
                  Don't let valuable opportunities slip away. Partner with Buildable and turn your connections into commissions while ensuring your network gets access to world-class software development services.
                </p>
              </div>
            </div>
          </div>

          {/* GET STARTED Section */}
          <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-black mb-8">
              Start earning with Buildable's Partner Program today.
            </h2>
            <div className="flex justify-center">
              <button className="px-8 py-4 bg-[#4945FF] text-white rounded-md text-lg font-medium hover:bg-[#4945FF]/90 transition-colors">
                Request Program Details
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#1d2333] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Do Not Sell</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Developers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Docs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400">© 2024 Buildable</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPageB 