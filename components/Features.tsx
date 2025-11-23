import React from 'react';
import { Briefcase, CreditCard, Heart, Scale, Users, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "Global Payroll",
    description: "Pay your entire global team in their local currency with a single click. We handle tax deductions and filings automatically.",
    icon: <CreditCard className="text-white" size={24} />,
  },
  {
    title: "Ironclad Compliance",
    description: "Our local legal experts ensure every contract is fully compliant with local labor laws, protecting you from risks.",
    icon: <Scale className="text-white" size={24} />,
  },
  {
    title: "Benefits Administration",
    description: "Offer competitive local benefits packages including health insurance, pension, and equipment to attract top talent.",
    icon: <Heart className="text-white" size={24} />,
  },
  {
    title: "Onboarding in Minutes",
    description: "Generate locally compliant contracts and onboard new hires in minutes, not months. Zero paperwork for you.",
    icon: <Zap className="text-white" size={24} />,
  },
  {
    title: "Contractor Management",
    description: "Manage and pay international contractors with the same ease as full-time employees, all in one dashboard.",
    icon: <Users className="text-white" size={24} />,
  },
  {
    title: "EOR Services",
    description: "We act as the legal employer, handling all liability while you retain full management control of your team's day-to-day.",
    icon: <Briefcase className="text-white" size={24} />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="why-us">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.4 }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-3"
          >
            Why GlobalWork?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-brand-900 mb-6 font-serif"
          >
            The operating system for <br/> <span className="text-brand-700">global teams</span>
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-accent-400 mx-auto rounded-full"
          ></motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="relative group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl origin-left"></div>
              
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-700 rounded-2xl mb-6 shadow-lg shadow-brand-700/30 group-hover:bg-accent-400 group-hover:shadow-accent-400/40 transition-all duration-300 group-hover:rotate-6">
                {React.cloneElement(feature.icon as React.ReactElement, { className: "text-white group-hover:text-brand-900 transition-colors" })}
              </div>
              
              <h3 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-brand-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <div className="flex items-center text-brand-600 font-bold text-sm group-hover:text-accent-600 transition-colors">
                <span className="relative">
                  Learn more
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </span>
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;