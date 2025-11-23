import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Users, Briefcase, CreditCard, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  // Toggle products menu on click (for touch devices)
  const toggleProducts = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHoveredItem(prev => prev === 'products' ? null : 'products');
  };

  const products = [
    { 
      name: 'Employer of Record', 
      desc: 'Hire full-time employees anywhere without a local entity.', 
      icon: <Briefcase className="text-accent-500" size={24} />,
      href: '#products' 
    },
    { 
      name: 'Contractor Pay', 
      desc: 'Onboard and pay international contractors in minutes.', 
      icon: <Users className="text-brand-400" size={24} />,
      href: '#products'
    },
    { 
      name: 'Global Payroll', 
      desc: 'Consolidate multi-country payroll into one system.', 
      icon: <CreditCard className="text-green-500" size={24} />,
      href: '#products'
    },
    { 
      name: 'Visa & Mobility', 
      desc: 'Manage visas, immigration, and relocation seamlessly.', 
      icon: <ShieldCheck className="text-purple-500" size={24} />,
      href: '#products'
    },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-2' 
          : 'bg-brand-700 border-b border-white/10 py-4'
      }`}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); setIsOpen(false); }} className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-20 group">
            <div className={`p-1.5 rounded-lg transition-colors ${scrolled ? 'bg-brand-700 text-accent-400' : 'bg-white text-brand-700 group-hover:bg-accent-400 group-hover:text-brand-900'}`}>
              <Globe size={24} strokeWidth={2.5} />
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-brand-900' : 'text-white'}`}>
              GlobalWork
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center h-full">
            
            {/* Mega Menu Trigger */}
            <div 
              className="h-full flex items-center relative"
              onMouseEnter={() => setHoveredItem('products')}
            >
              <button 
                onClick={toggleProducts}
                className={`font-medium transition-colors text-sm flex items-center gap-1 outline-none ${
                  scrolled 
                    ? 'text-slate-700 hover:text-brand-700' 
                    : 'text-brand-50 hover:text-white'
                } ${hoveredItem === 'products' ? (scrolled ? 'text-brand-700' : 'text-white') : ''}`}
              >
                Products <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredItem === 'products' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <a 
              href="#pricing" 
              onMouseEnter={() => setHoveredItem(null)}
              className={`font-medium transition-colors text-sm ${scrolled ? 'text-slate-700 hover:text-brand-700' : 'text-brand-50 hover:text-white'}`}
            >
              Global Pricing
            </a>
            <a 
              href="#why-us" 
              onMouseEnter={() => setHoveredItem(null)}
              className={`font-medium transition-colors text-sm ${scrolled ? 'text-slate-700 hover:text-brand-700' : 'text-brand-50 hover:text-white'}`}
            >
              Why Us
            </a>
            <a 
              href="#resources" 
              onMouseEnter={() => setHoveredItem(null)}
              className={`font-medium transition-colors text-sm ${scrolled ? 'text-slate-700 hover:text-brand-700' : 'text-brand-50 hover:text-white'}`}
            >
              Resources
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 z-20">
            <a href="#" className={`font-medium text-sm transition-colors ${
              scrolled ? 'text-slate-900 hover:text-brand-600' : 'text-white hover:text-accent-300'
            }`}>
              Log in
            </a>
            <motion.button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-400 text-brand-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent-300 transition-all shadow-lg shadow-accent-400/30 border border-transparent cursor-pointer"
            >
              Request Demo
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center z-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 rounded-md hover:bg-white/10 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {hoveredItem === 'products' && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl overflow-hidden hidden md:block"
            onMouseEnter={() => setHoveredItem('products')}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-12 gap-8">
                {/* Featured Side */}
                <div className="col-span-4 bg-brand-50 rounded-2xl p-6 flex flex-col justify-between border border-brand-100">
                  <div>
                    <span className="text-brand-600 font-bold text-xs uppercase tracking-wider mb-2 block">Featured</span>
                    <h3 className="text-2xl font-bold text-brand-900 mb-3">Global EOR Platform</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      The fastest way to hire candidates in 180+ countries without setting up a legal entity. We handle payroll, benefits, and compliance.
                    </p>
                  </div>
                  <a href="#products" onClick={() => setHoveredItem(null)} className="text-brand-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Explore Platform <ArrowRight size={16} />
                  </a>
                </div>

                {/* Links Grid */}
                <div className="col-span-8 grid grid-cols-2 gap-6">
                  {products.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.href}
                      onClick={() => setHoveredItem(null)}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="shrink-0 mt-1 p-2 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:border-brand-200 group-hover:shadow-md transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-brand-900 font-bold text-base group-hover:text-brand-600 transition-colors flex items-center gap-2">
                          {item.name}
                          <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-600" />
                        </h4>
                        <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 absolute w-full overflow-hidden shadow-xl top-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              <div className="py-2">
                <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Products</p>
                {products.map((item, idx) => (
                  <a key={idx} href={item.href} onClick={handleMobileLinkClick} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-slate-100 pt-2">
                 <a href="#pricing" onClick={handleMobileLinkClick} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">Global Pricing</a>
                 <a href="#why-us" onClick={handleMobileLinkClick} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">Why GlobalWork</a>
                 <a href="#resources" onClick={handleMobileLinkClick} className="block px-3 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">Resources</a>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <a href="#" onClick={handleMobileLinkClick} className="block w-full text-center text-brand-900 font-bold py-3 hover:bg-slate-50 rounded-lg border border-slate-200">
                  Log in
                </a>
                <button onClick={() => { handleMobileLinkClick(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full bg-brand-700 text-white px-5 py-3 rounded-lg font-bold shadow-md hover:bg-brand-800">
                  Request Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;