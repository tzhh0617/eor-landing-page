import React, { useState } from 'react';
import { Search, Loader2, CheckCircle2, AlertCircle, Info, ArrowRight } from 'lucide-react';
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
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="compliance-ai">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-200 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wide mb-4 border border-primary-100">
            Powered by Gemini 2.5
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Instant Global Compliance Check
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Thinking of hiring in a new country? Ask our AI assistant to get an immediate snapshot of employer costs, benefits, and regulations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-6 md:p-8 bg-gradient-to-br from-white to-slate-50">
              <form onSubmit={handleSearch} className="relative flex items-center">
                <Search className="absolute left-4 text-slate-400" size={20} />
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter a country (e.g., Germany, Brazil, Japan)..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-lg transition-all"
                />
                <button
                  type="submit"
                  disabled={status === LoadingState.LOADING || !country.trim()}
                  className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-6 rounded-lg font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  {status === LoadingState.LOADING ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <span>Check</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {status === LoadingState.ERROR && (
              <div className="p-6 bg-red-50 border-t border-red-100 flex items-center gap-3 text-red-700">
                <AlertCircle size={20} />
                <p>{error}</p>
              </div>
            )}

            {info && status === LoadingState.SUCCESS && (
              <div className="border-t border-slate-100">
                <div className="p-6 md:p-8 grid gap-8 md:grid-cols-2">
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        {info.countryName} <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded">{info.currency}</span>
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">Compliance Snapshot</p>
                    </div>

                    <div className="bg-primary-50 p-4 rounded-xl border border-primary-100">
                      <div className="flex items-start gap-3">
                        <Info className="text-primary-600 mt-0.5" size={20} />
                        <div>
                          <p className="font-semibold text-primary-900">Estimated Employer Cost</p>
                          <p className="text-primary-700 text-sm mt-1">
                            Expect to pay <span className="font-bold">{info.employerTaxRange}</span> on top of gross salary for social security and taxes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-green-500" />
                        Mandatory Benefits
                      </h4>
                      <ul className="space-y-2">
                        {info.mandatoryBenefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2 pl-6 relative">
                            <span className="absolute left-1.5 top-2 w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase font-semibold">Probation</p>
                        <p className="font-medium text-slate-900 mt-1">{info.probationPeriod}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-xs text-slate-500 uppercase font-semibold">Notice Period</p>
                        <p className="font-medium text-slate-900 mt-1">{info.terminationNotice}</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-500">
                    * This data is generated by AI for informational purposes. Consult with our legal experts for binding advice.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceAssistant;