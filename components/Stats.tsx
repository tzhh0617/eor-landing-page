import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">180+</p>
            <p className="text-slate-400 font-medium">Countries Covered</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">99%</p>
            <p className="text-slate-400 font-medium">Customer Satisfaction</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">$500M</p>
            <p className="text-slate-400 font-medium">Payroll Processed</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</p>
            <p className="text-slate-400 font-medium">Expert Support</p>
          </div>
        </div>
        
        <div className="mt-16 pt-10 border-t border-slate-800">
           <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8">Trusted by modern teams worldwide</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for logos - using text for simplicity but styled to look like logos */}
              <h3 className="text-2xl font-bold text-white">Acme Corp</h3>
              <h3 className="text-2xl font-bold text-white italic font-serif">Starlight</h3>
              <h3 className="text-xl font-black text-white tracking-tighter border-2 border-white p-1">NEXUS</h3>
              <h3 className="text-2xl font-bold text-white">O<span className="text-primary-500">pen</span>Sys</h3>
              <h3 className="text-2xl font-light text-white tracking-[0.2em]">GLOBAL</h3>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;