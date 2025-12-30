
import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from 'lucide-react';
import Flowchart from './components/Flowchart';
import SchemaViz from './components/SchemaViz';
import RequirementAnalysis from './components/RequirementAnalysis';
import { FlowType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flows' | 'schema' | 'analysis'>('flows');
  const [activeFlow, setActiveFlow] = useState<FlowType>(FlowType.JOB_SEEKER);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-indigo-600 text-white p-2 rounded-xl font-bold text-xl shadow-lg shadow-indigo-200 transition-transform group-hover:scale-105">
              12th
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              failjobs<span className="text-indigo-600">.com</span>
              <span className="text-[10px] uppercase font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full ml-2 align-middle">
                Architecture
              </span>
            </h1>
          </div>
          <nav className="flex p-1 bg-slate-100 rounded-xl">
            <button 
              onClick={() => setActiveTab('flows')}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${activeTab === 'flows' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              System Flows
            </button>
            <button 
              onClick={() => setActiveTab('schema')}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${activeTab === 'schema' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              DB Schema
            </button>
            <button 
              onClick={() => setActiveTab('analysis')}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${activeTab === 'analysis' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Suggestions
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {activeTab === 'flows' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => setActiveFlow(FlowType.JOB_SEEKER)}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform ${activeFlow === FlowType.JOB_SEEKER ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 -translate-y-1' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'}`}
              >
                <User size={20} className={activeFlow === FlowType.JOB_SEEKER ? 'text-indigo-200' : 'text-slate-400'} /> Job Seeker
              </button>
              <button 
                onClick={() => setActiveFlow(FlowType.EMPLOYER)}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform ${activeFlow === FlowType.EMPLOYER ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 -translate-y-1' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'}`}
              >
                <Briefcase size={20} className={activeFlow === FlowType.EMPLOYER ? 'text-indigo-200' : 'text-slate-400'} /> Employer
              </button>
              <button 
                onClick={() => setActiveFlow(FlowType.ADMIN_MODERATOR)}
                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform ${activeFlow === FlowType.ADMIN_MODERATOR ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 -translate-y-1' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'}`}
              >
                <ShieldCheck size={20} className={activeFlow === FlowType.ADMIN_MODERATOR ? 'text-indigo-200' : 'text-slate-400'} /> Admin / Agent
              </button>
            </div>
            
            <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-2xl shadow-slate-200/50">
               <Flowchart type={activeFlow} />
            </div>
          </div>
        )}

        {activeTab === 'schema' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl font-extrabold mb-10 flex items-center gap-4 text-slate-900">
              <div className="bg-indigo-100 p-3 rounded-2xl"><Layers className="text-indigo-600" /></div>
              Supabase Structure
            </h2>
            <SchemaViz />
          </div>
        )}

        {activeTab === 'analysis' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <RequirementAnalysis />
          </div>
        )}

      </main>

      {/* Footer Meta Info */}
      <footer className="bg-slate-900 text-white mt-12 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-500 text-white p-1.5 rounded-lg font-bold">12th</div>
              <h3 className="text-2xl font-extrabold">failjobs.com</h3>
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
              Empowering India's blue-collar workforce through a secure, modern, and transparent hiring ecosystem.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-slate-100 uppercase tracking-widest text-xs">Technology</span>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <span>React & Tailwind CSS</span>
              <span>Supabase Backend</span>
              <span>Razorpay Payments</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-slate-100 uppercase tracking-widest text-xs">Legal</span>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Mission & Vision</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm text-center">
          &copy; 2024 12thfailjobs.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
