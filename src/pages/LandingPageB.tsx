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
      icon: "🔍",
      title: "Instant Policy Retrieval",
      description: "Get answers to compliance and operational questions in seconds."
    },
    {
      icon: "🏦",
      title: "Collaborative Knowledge Sharing",
      description: "Securely share policies and best practices across your credit union."
    },
    {
      icon: "📑",
      title: "Audit-Ready Documentation",
      description: "Stay compliant with AI-generated reports and audit trails."
    },
    {
      icon: "🤖",
      title: "AI-Powered Vendor Management",
      description: "Easily track, score, and manage vendors with real-time AI insights."
    }
  ]

  const stats = [
    {
      value: "90%",
      label: "Faster Policy Retrieval",
      description: "Employees find the right info instantly."
    },
    {
      value: "AI",
      label: "AI-Powered Document Search",
      description: "AI auto-tags and organizes policies."
    },
    {
      value: "24/7",
      label: "Always Up-to-Date Regulations",
      description: "Compliance updates are seamless."
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-[100]">
        <div className="max-w-[1800px] mx-auto px-8 py-4 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <img 
              src="https://ik.imagekit.io/buildable/Euriqa_AI_Logo_Transparent.png?updatedAt=1739249111622" 
              alt="Euriqa AI" 
              className="h-24"
            />
            <Button 
              size="lg" 
              className="bg-[#4945FF] hover:bg-[#4945FF]/90 text-white px-8 py-2 text-base font-medium"
            >
              Get a Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <BackgroundBeamsWithCollision className="min-h-screen pt-96 bg-white relative z-[1]">
        <div className="container relative z-[2] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-16">
            {/* Hero Text */}
            <div className="flex flex-col justify-center space-y-8 text-center max-w-5xl mx-auto">
              <div className="space-y-6">
                <Badge
                  className="animate-appear [animation-delay:0.3s] [animation-fill-mode:backwards] mx-auto text-white"
                  variant="secondary"
                >
                  Introducing Euriqa
                </Badge>
                <h1 className="text-[84px] leading-[1.1] font-extrabold text-[#1a1f36] tracking-tight animate-appear [animation-delay:0.4s] [animation-fill-mode:backwards] relative">
                  The future of credit union operations is{" "}
                  <span className="relative inline-block">
                    here
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path 
                        d="M0,3 C15,3 15,9 30,9 C45,9 45,3 60,3 C75,3 75,9 90,9 L100,9" 
                        stroke="url(#gradient)" 
                        strokeWidth="4" 
                        fill="none"
                        className="path"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#9333EA" />
                          <stop offset="50%" stopColor="#EC4899" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h1>
                <p className="max-w-[800px] text-gray-600 text-xl animate-appear [animation-delay:0.5s] [animation-fill-mode:backwards] mx-auto">
                  Empower your team with AI-driven insights while maintaining complete control. Cut response times by 56% and boost member satisfaction.
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full max-w-[1400px] animate-appear-zoom [animation-delay:0.6s] [animation-fill-mode:backwards]">
              <img
                alt="Hero"
                className="w-full h-auto object-cover rounded-lg"
                src="https://ik.imagekit.io/buildable/Credit%20Union%20Hero%20Image%20(5).png?updatedAt=1739740312526"
              />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Features Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-32"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            AI-powered operations with a human touch
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Euriqa streamlines internal operations, reduces response times, and ensures compliance—all while keeping your team in control.
          </p>
          <button className="px-8 py-4 bg-[#4945FF] text-white rounded-md font-medium hover:bg-[#4945FF]/90 transition-colors text-lg">
            Get a Demo
          </button>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Power your team box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1f36] to-[#2d3352] p-12 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-3xl font-semibold text-[#E2E1FF]">Power your team</h3>
                <svg className="w-6 h-6 text-[#E2E1FF] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="relative h-[700px] rounded-lg overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/buildable/Euriqa%20(1).png?updatedAt=1739603664200" 
                  alt="Team Dashboard" 
                  className="w-full h-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Empower customers box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2d1b4d] to-[#492c7f] p-12 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-3xl font-semibold text-[#f8d8ff]">Empower customers</h3>
                <svg className="w-6 h-6 text-[#f8d8ff] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="relative h-[700px] rounded-lg overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/buildable/Euriqa.png?updatedAt=1739602606970" 
                  alt="Customer Interface" 
                  className="w-full h-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                />
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
                <span className="text-6xl font-light">15</span>
                <span className="text-2xl">min</span>
                <span className="text-gray-400 ml-2">®</span>
              </div>
              <p className="text-gray-600 text-lg">
                Send a first reply in less than an hour, become a power user in a day.
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
                <span className="text-6xl font-light">56</span>
                <span className="text-2xl">%</span>
                <span className="text-gray-400 ml-2">↗</span>
              </div>
              <p className="text-gray-600 text-lg">
                Respond to 56% more customer messages in the first year.
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
                <span className="text-6xl font-light">25</span>
                <span className="text-2xl">%</span>
                <span className="text-gray-400 ml-2">☺</span>
              </div>
              <p className="text-gray-600 text-lg">
                Our customers' CSAT scores are 25% higher than the industry average.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-32 mb-16"
          >
            <p className="text-xl text-gray-600 mb-6">
              The best way to get to know Euriqa is to start a free trial.
            </p>
            <a href="#" className="text-blue-600 text-lg font-medium hover:text-blue-700 inline-flex items-center">
              Get a sneak peek
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
                  src="https://ik.imagekit.io/buildable/Credit%20Union%20Hero%20Image%20(2).png?updatedAt=1739567624357" 
                  alt="Forrit Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="w-2/3">
              <blockquote>
                <p className="text-3xl font-light text-gray-900 mb-8 leading-relaxed">
                  "Before implementing Euriqa, our team spent countless hours sifting through outdated manuals to find the right policies. Now, with Euriqa's intuitive platform, accessing the latest procedures is instantaneous, boosting our efficiency and morale."
                </p>
                <footer>
                  <div className="flex items-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">John Delano</div>
                      <div className="text-gray-600">Compliance Officer</div>
                      <div className="text-gray-600">Forrit Credit Union</div>
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
              AI-powered efficiency.
              <br />
              Human oversight.
              <br />
              Full compliance<span className="relative inline-block">.</span>
            </h2>
          </div>

          {/* Content Reveal Section */}
          <div className="relative max-w-3xl mx-auto mb-16 mt-32">
            <div className={`relative overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px]' : 'max-h-[300px]'}`}>
              <div className="text-left space-y-10 text-xl text-gray-600">
                <p className="text-3xl font-light leading-relaxed">
                  AI may be transforming financial services, but our founding belief remains unchanged: Great member service is essential for credit union success.
                </p>
                <p className="leading-relaxed">
                  Delivering exceptional member service means putting your team and members first. That's why Euriqa will never be just "AI-first." We're invested in AI tools that enhance the member experience by helping credit union teams work more efficiently and serve members better.
                </p>
                <p className="font-medium text-gray-900 text-2xl">
                  AI isn't a magic solution for credit union operations.
                </p>
                <p className="leading-relaxed">
                  Despite the headlines about AI replacing human workers, your credit union staff are more vital than ever to your institution's success. We build tools that empower your team to do their best work, which means more than just adding AI capabilities.
                </p>
                <p className="leading-relaxed">
                  It means ensuring your team never misses an opportunity to provide that personal touch when members need it most. Completely automating these human connections may reduce costs initially, but it will impact member relationships and loyalty over time.
                </p>
                <p className="font-medium text-gray-900 text-2xl">
                  The credit union difference is timeless.
                </p>
                <p className="leading-relaxed">
                  We're not caught up in the AI hype cycle. We're more committed than ever to supporting credit unions and their teams in maintaining the personal relationships that make credit unions special.
                </p>
                <p className="leading-relaxed">
                  In an era of rapid technological change, it's crucial to work with a partner who understands and values the credit union difference. We believe in enhancing—not replacing—the human connections that make credit unions unique. If you believe in preserving these relationships while embracing innovation, you've found the right partner.
                </p>
              </div>
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
              )}
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative -bottom-6 mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-[#4945FF] shadow-lg hover:bg-[#4945FF]/90 transition-all duration-200 group"
            >
              <ChevronDownIcon 
                className={`w-7 h-7 text-white transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* GET STARTED Section */}
          <BackgroundBeamsWithCollision className="w-screen relative -mx-4 sm:-mx-6 lg:-mx-8 -mb-32">
            <div className="relative z-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-black mb-8">
                See how Euriqa can transform your credit union's efficiency today.
              </h2>
              <div className="flex justify-center">
                <button className="px-8 py-4 bg-[#4945FF] text-white rounded-md text-lg font-medium hover:bg-[#4945FF]/90 transition-colors">
                  Get a Demo
                </button>
              </div>
            </div>
          </BackgroundBeamsWithCollision>
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
              <span className="text-gray-400">© 2025 Euriqa</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPageB 