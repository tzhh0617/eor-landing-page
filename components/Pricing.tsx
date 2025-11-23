import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Contractor",
      description: "Manage and pay contractors in 180+ countries.",
      price: isAnnual ? 29 : 49,
      features: [
        "Contract generation",
        "Local currency payments",
        "Tax form collection",
        "IP Protection",
        "Standard support"
      ],
      cta: "Start Free",
      highlight: false
    },
    {
      name: "EOR Employee",
      description: "Hire full-time employees without an entity.",
      price: isAnnual ? 599 : 699,
      features: [
        "Full legal employment",
        "Benefits administration",
        "Tax filing & compliance",
        "Equipment management",
        "Visa & immigration support",
        "Dedicated account manager"
      ],
      cta: "Book a Demo",
      highlight: true
    },
    {
      name: "Global Payroll",
      description: "Consolidate payroll for your own entities.",
      price: "Custom",
      features: [
        "Unified payroll dashboard",
        "Global gross-to-net",
        "Single monthly invoice",
        "Treasury management",
        "Custom ERP integrations",
        "24/7 Priority support"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-white relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-2">Simple Pricing</h2>
          <p className="text-4xl font-bold tracking-tight text-brand-900 font-serif mb-4">
            Transparent pricing for global teams
          </p>
          <p className="text-lg text-slate-600">
            No hidden fees. Cancel anytime. Scale as you grow.
          </p>

          <div className="mt-10 flex justify-center items-center gap-4 bg-slate-50 p-1.5 rounded-full inline-flex border border-slate-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!isAnnual ? 'bg-white text-brand-900 shadow-sm' : 'text-slate-500 hover:text-brand-700'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isAnnual ? 'bg-brand-700 text-white shadow-md' : 'text-slate-500 hover:text-brand-700'}`}
            >
              Yearly <span className="bg-accent-400 text-brand-900 text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wide">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative p-8 rounded-3xl flex flex-col h-full transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-brand-900 border-2 border-accent-400 shadow-2xl shadow-brand-900/20 text-white' 
                  : 'bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-brand-200 text-brand-900'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-400 text-brand-900 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1 shadow-lg">
                  <Sparkles size={12} /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-brand-900'}`}>{plan.name}</h3>
                <p className={`text-sm mt-2 min-h-[40px] ${plan.highlight ? 'text-brand-200' : 'text-slate-500'}`}>{plan.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-current border-opacity-10">
                <div className="flex items-baseline">
                  {typeof plan.price === 'number' && <span className="text-3xl font-bold">$</span>}
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  {typeof plan.price === 'number' && <span className={`ml-2 ${plan.highlight ? 'text-brand-300' : 'text-slate-500'}`}>/month</span>}
                </div>
                {typeof plan.price === 'number' && isAnnual && (
                  <p className={`text-xs font-bold mt-2 ${plan.highlight ? 'text-accent-400' : 'text-green-600'}`}>Billed annually</p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <div className={`mt-0.5 p-0.5 rounded-full ${plan.highlight ? 'bg-accent-400 text-brand-900' : 'bg-brand-100 text-brand-700'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={plan.highlight ? 'text-brand-100' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all transform active:scale-95 ${
                plan.highlight 
                  ? 'bg-accent-400 text-brand-900 hover:bg-accent-300 hover:shadow-[0_0_20px_rgba(255,199,58,0.4)]' 
                  : 'bg-brand-50 text-brand-700 hover:bg-brand-700 hover:text-white hover:shadow-lg'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;