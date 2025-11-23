import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter: React.FC<{ to: number; suffix?: string; prefix?: string }> = ({ to, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = to;
      const duration = 2000; // 2 seconds
      const incrementTime = duration / (end / (end > 100 ? 50 : 1)); // speed adjustment

      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isInView, to]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const Stats: React.FC = () => {
  return (
    <section className="bg-brand-900 py-20 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
       <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
              <AnimatedCounter to={180} suffix="+" />
            </p>
            <p className="text-brand-200 font-medium text-sm uppercase tracking-wider">Countries</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
              <AnimatedCounter to={99} suffix="%" />
            </p>
            <p className="text-brand-200 font-medium text-sm uppercase tracking-wider">Satisfaction</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
              <AnimatedCounter to={500} prefix="$" suffix="M+" />
            </p>
            <p className="text-brand-200 font-medium text-sm uppercase tracking-wider">Processed</p>
          </div>
          <div className="p-4">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">24/7</p>
            <p className="text-brand-200 font-medium text-sm uppercase tracking-wider">Support</p>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/10">
           <p className="text-center text-brand-300 text-sm font-semibold uppercase tracking-wider mb-10">Trusted by modern teams worldwide</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {/* Logos styled with CSS text for demo purposes */}
              <h3 className="text-2xl font-bold text-white">Acme Corp</h3>
              <h3 className="text-2xl font-bold text-white italic font-serif">Starlight</h3>
              <h3 className="text-xl font-black text-white tracking-tighter border-2 border-white p-1">NEXUS</h3>
              <h3 className="text-2xl font-bold text-white">O<span className="text-accent-400">pen</span>Sys</h3>
              <h3 className="text-2xl font-light text-white tracking-[0.2em]">GLOBAL</h3>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;