import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import ComplianceAssistant from './components/ComplianceAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        {/* The Compliance Assistant is the "Star" feature showing Gemini capabilities */}
        <ComplianceAssistant />
        
        {/* CTA Section */}
        <section className="bg-primary-600 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to scale your team globally?</h2>
             <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
               Join thousands of fast-growing companies using GlobalWork to hire the best talent, regardless of location.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-slate-50 transition-colors">
                  Get Started Free
                </button>
                <button className="bg-primary-700 text-white font-bold py-4 px-8 rounded-full border border-primary-500 hover:bg-primary-800 transition-colors">
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