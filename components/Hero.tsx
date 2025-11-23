import React from 'react';
import { ArrowRight, CheckCircle, Globe2, ShieldCheck, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-52 lg:pb-36 overflow-hidden bg-brand-700 text-white">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-brand-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-[#4354b3] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[30%] left-[20%] w-[70vw] h-[70vw] bg-brand-800 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.07]"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-700 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent-300 text-sm font-semibold mb-8 shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400"></span>
              </span>
              Now compliant in 180+ countries
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 font-serif">
              Hire Globally. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 filter drop-shadow-sm">
                Comply Locally.
              </span>
            </h1>
            
            <p className="text-xl text-brand-100 mb-10 max-w-xl leading-relaxed font-light">
              The all-in-one platform to hire, pay, and manage your international team. We act as the Employer of Record so you can focus on growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-400 text-brand-900 rounded-full font-bold text-lg hover:bg-accent-300 transition-all shadow-[0_0_30px_rgba(255,199,58,0.3)] flex items-center justify-center gap-2"
              >
                Start Hiring Now <ArrowRight size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:border-white/60"
              >
                <Play size={18} fill="currentColor" /> Watch Demo
              </motion.button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-brand-100">
              <div className="flex items-center gap-2">
                <div className="bg-accent-400/10 p-1 rounded-full">
                   <CheckCircle size={16} className="text-accent-400" />
                </div>
                <span>Localized Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-accent-400/10 p-1 rounded-full">
                   <ShieldCheck size={16} className="text-accent-400" />
                </div>
                <span>100% IP Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-accent-400/10 p-1 rounded-full">
                   <Globe2 size={16} className="text-accent-400" />
                </div>
                <span>Pay in 150+ Currencies</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Abstract UI Representation */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block perspective-1000"
          >
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
              {/* Glass Reflection */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-30 pointer-events-none"></div>
              
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent-400 rounded-2xl flex items-center justify-center shadow-lg z-20 transform -rotate-6">
                <span className="font-black text-brand-900 text-3xl">A+</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-brand-500 border-2 border-accent-400 p-0.5">
                        <img src="https://ui-avatars.com/api/?name=Sarah+Doe&background=random" alt="User" className="rounded-full w-full h-full" />
                     </div>
                     <div>
                       <div className="h-3 w-32 bg-white/90 rounded mb-2"></div>
                       <div className="h-2 w-20 bg-accent-400 rounded"></div>
                     </div>
                   </div>
                   <div className="px-4 py-1.5 bg-green-500/20 text-green-300 rounded-full text-xs font-bold border border-green-500/30">ACTIVE</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                    {[1,2,3].map(i => (
                        <div key={i} className="bg-black/20 rounded-xl p-4 backdrop-blur-sm">
                             <div className="h-8 w-8 bg-brand-600 rounded-lg mb-3"></div>
                             <div className="h-2 w-full bg-white/20 rounded mb-2"></div>
                             <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                        </div>
                    ))}
                </div>

                <div className="h-32 bg-white/5 rounded-xl p-5 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                         <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="h-3 w-1/2 bg-white/40 rounded mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-white/10 rounded"></div>
                        <div className="h-2 w-full bg-white/10 rounded"></div>
                        <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="h-2 w-32 bg-white/30 rounded"></div>
                  <div className="h-10 w-10 bg-accent-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <ArrowRight size={20} className="text-brand-900" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4 max-w-xs border border-slate-100"
            >
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-brand-900 font-bold text-sm">Compliance Verified</p>
                <p className="text-slate-500 text-xs">Germany Labor Laws 🇩🇪</p>
              </div>
            </motion.div>
            
             <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-brand-800 p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4 border border-white/10 backdrop-blur-md"
            >
              <div className="bg-accent-400 p-2 rounded-lg text-brand-900">
                <span className="font-bold text-lg">$</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Payroll Processed</p>
                <p className="text-brand-200 text-xs">Next run: Tomorrow</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;