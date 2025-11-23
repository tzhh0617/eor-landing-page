import React from 'react';
import { Briefcase, CreditCard, Heart, Scale, Users, Zap } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    title: "Global Payroll",
    description: "Pay your entire global team in their local currency with a single click. We handle tax deductions and filings automatically.",
    icon: <CreditCard className="text-white" size={24} />,
  },
  {
    title: "Ironclad Compliance",
    description: "Our local legal experts ensure every contract is fully compliant with local labor laws, protecting you from misclassification risks.",
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

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Why GlobalWork?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to build a global team
          </p>
          <p className="mt-4 text-lg text-slate-600">
            We simplify the complex world of international employment so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary-100 shadow-sm hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl origin-left"></div>
              <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-xl mb-6 shadow-lg shadow-slate-900/20 group-hover:bg-primary-600 group-hover:shadow-primary-600/30 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;