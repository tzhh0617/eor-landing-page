import React from 'react';
import { Globe, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-6 text-brand-900">
              <div className="bg-brand-700 p-1.5 rounded-md text-white">
                <Globe size={20} />
              </div>
              <span className="font-bold text-xl">GlobalWork</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              The modern way to hire internationally. We handle legal entities, payroll, and benefits so you can focus on building your dream team.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-100 hover:text-brand-600 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-100 hover:text-brand-600 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-100 hover:text-brand-600 transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-brand-900 mb-6">Product</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Employer of Record</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Global Payroll</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Contractor Management</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brand-900 mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Country Guides</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Compliance Assistant</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brand-900 mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} GlobalWork Inc. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-slate-500">
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;