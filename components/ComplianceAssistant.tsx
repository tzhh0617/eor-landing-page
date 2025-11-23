import React, { useState } from 'react';
import { Search, Loader2, CheckCircle2, AlertCircle, Info, ArrowRight, Sparkles, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCountryComplianceInfo } from '../services/geminiService';
import { CountryInfo, LoadingState } from '../types';

const ComplianceAssistant: React.FC = () => {
  const [country, setCountry] = useState('');
  const [info, setInfo] = useState<CountryInfo | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!country.trim()) return;

    setStatus(LoadingState.LOADING);
    setError(null);
    setInfo(null);

    try {
      const data = await getCountryComplianceInfo(country);
      setInfo(data);
      setStatus(LoadingState.SUCCESS);
    } catch (err) {
      console.error(err);
      setStatus(LoadingState.ERROR);
      setError("Failed to fetch compliance data. Please check the API key or try again.");
    }
  };

  return (
    <section className="py-24 bg-white relative" id="compliance-ai">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wide mb-6 border border-brand-100 shadow-sm">
                <Sparkles size={12} className="text-accent-500 fill-accent-500" />
                Powered by Gemini 2.5
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Instant Compliance Intelligence. <br />
                <span className="text-brand-600">Zero Guesswork.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Don't let local labor laws slow you down. Our AI-powered assistant gives you immediate insights into employer taxes, benefits, and termination rules for any country in the world.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Instant employer cost estimates', 'Statutory benefit requirements', 'Termination & probation rules', 'Real-time currency data'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={20} className="text-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="text-brand-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View Full Compliance Guide <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative"
            >
               {/* Decorative top bar */}
               <div className="h-2 w-full bg-gradient-to-r from-brand-600 via-brand-500 to-accent-400"></div>

              <div className="p-6 md:p-8 bg-slate-50">
                <form onSubmit={handleSearch} className="relative flex items-center">
                  <Search className="absolute left-4 text-slate-400" size={20} />
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter a country (e.g., France)..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-lg transition-all shadow-sm"
                  />
                  <button
                    type="submit"
                    disabled={status === LoadingState.LOADING || !country.trim()}
                    className="absolute right-2 top-2 bottom-2 bg-brand-700 text-white px-6 rounded-lg font-medium hover:bg-brand-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shadow-md"
                  >
                    {status === LoadingState.LOADING ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </button>
                </form>
              </div>

              <div className="min-h-[300px] bg-white p-6 md:p-8">
                {status === LoadingState.IDLE && (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-50 mt-10">
                    <Globe size={48} className="text-slate-300 mb-4" />
                    <p className="text-slate-500">Enter a country above to analyze hiring requirements.</p>
                  </div>
                )}

                {status === LoadingState.ERROR && (
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100 flex items-start gap-3 text-red-700">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <AnimatePresence mode='wait'>
                {info && status === LoadingState.SUCCESS && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{info.countryName}</h3>
                        <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Report Generated</span>
                      </div>
                      <span className="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-sm font-medium border border-brand-100">
                        {info.currency}
                      </span>
                    </div>

                    <div className="grid gap-4">
                      <div className="bg-brand-50/50 p-4 rounded-xl border border-brand-100">
                         <div className="flex items-start gap-3">
                            <div className="bg-brand-100 p-2 rounded-full text-brand-600 mt-1">
                              <Info size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-brand-900">Employer Taxes</p>
                              <p className="text-brand-800 text-sm mt-1 leading-snug">
                                ~<span className="font-bold">{info.employerTaxRange}</span> on top of gross salary.
                              </p>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mandatory Benefits</p>
                        <div className="flex flex-wrap gap-2">
                          {info.mandatoryBenefits.map((benefit, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2">
                         <div className="border border-slate-100 rounded-lg p-3">
                            <p className="text-xs text-slate-500 mb-1">Probation</p>
                            <p className="font-semibold text-slate-900 text-sm">{info.probationPeriod}</p>
                         </div>
                         <div className="border border-slate-100 rounded-lg p-3">
                            <p className="text-xs text-slate-500 mb-1">Notice Period</p>
                            <p className="font-semibold text-slate-900 text-sm">{info.terminationNotice}</p>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceAssistant;