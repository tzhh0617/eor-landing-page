import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import ComplianceAssistant from './components/ComplianceAssistant';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <ComplianceAssistant />
        <Pricing />
        
        {/* Final CTA Section */}
        <section className="bg-brand-700 py-24 relative overflow-hidden">
           {/* Abstract shapes */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-600 rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent-500 rounded-full opacity-20 blur-3xl"></div>
           </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your team globally?</h2>
             <p className="text-brand-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
               Join thousands of fast-growing companies using GlobalWork to hire the best talent, regardless of borders.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-accent-400 text-brand-900 font-bold py-4 px-10 rounded-full shadow-xl shadow-accent-500/20 hover:bg-accent-500 hover:scale-105 transition-all flex items-center justify-center gap-2">
                  Get Started Free <ArrowRight size={20} />
                </button>
                <button className="bg-transparent text-white border border-white/30 font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;