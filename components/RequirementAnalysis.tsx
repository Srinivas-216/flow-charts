
import React from 'react';
// Added ShieldCheck to the imports
import { Sparkles, AlertCircle, TrendingUp, Heart, Globe, MessageCircle, Star, Zap, ShieldCheck } from 'lucide-react';

const RequirementAnalysis: React.FC = () => {
  const suggestions = [
    {
      title: "Audio-Driven Flow",
      description: "Smart voice prompts in local dialects to assist users with limited reading skills during the verification stages.",
      icon: MessageCircle,
      tag: "Accessibility",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Multilingual Engine",
      description: "Automatic content translation for profiles into regional scripts (Hindi, Tamil, etc.) for employer convenience.",
      icon: Globe,
      tag: "UX Local",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Verified Skill Badges",
      description: "Worker rating system based on verified historical performance, allowing top workers to stand out.",
      icon: Star,
      tag: "Trust Metric",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Employer Protection",
      description: "Panic button and location check-ins for high-risk positions like elderly care or nannies.",
      icon: Heart,
      tag: "Safety",
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "WhatsApp Bridge",
      description: "Headless bot that allows workers to update their status and receive job leads without leaving WhatsApp.",
      icon: Zap,
      tag: "Integration",
      color: "bg-sky-50 text-sky-600"
    },
    {
      title: "Premium Agent Visit",
      description: "Physical verification of address and character for elite profiles to provide extra security for employers.",
      icon: Sparkles,
      tag: "Premium",
      color: "bg-violet-50 text-violet-600"
    }
  ];

  return (
    <div className="space-y-16">
      <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold flex items-center gap-4 mb-6 tracking-tight">
            <AlertCircle className="text-indigo-400" size={40} />
            Growth Strategy
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            12thfailjobs.com isn't just a portal; it's a <span className="text-indigo-400 font-bold underline decoration-indigo-400/30 underline-offset-8">Trust Ecosystem</span>. 
            We identify market gaps in the blue-collar sector and bridge them with premium technology and verification.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {suggestions.map((item, i) => (
          <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 group flex flex-col h-full">
            <div className={`w-14 h-14 ${item.color} flex items-center justify-center mb-6 rounded-2xl transform group-hover:scale-110 transition-transform`}>
              <item.icon size={28} />
            </div>
            <div className="mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.tag}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">{item.title}</h3>
            <p className="text-slate-500 text-lg leading-relaxed flex-grow">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-100 p-12 rounded-[3rem] shadow-xl shadow-slate-100">
        <h3 className="text-3xl font-black mb-10 text-slate-900 tracking-tight flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white"><TrendingUp size={20} /></div>
          Revenue Models
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="font-bold text-xl text-slate-900 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500" /> Subscription Tiers
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
                <span className="font-bold block text-slate-900">Lite: ₹499/mo</span>
                <span className="text-sm text-slate-500">2 Job Postings + 20 Contact Unlocks</span>
              </div>
              <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm">
                <span className="font-bold block text-indigo-700">Pro: ₹1,999/mo</span>
                <span className="text-sm text-indigo-600">Unlimited Postings + Priority Verification</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-xl text-slate-900 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500" /> Platform USPs
            </h4>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 p-4">
                <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg"><Zap size={18} /></div>
                <div>
                  <span className="font-bold block text-slate-900">Zero Middleman</span>
                  <p className="text-sm text-slate-500">Direct hiring without agency overhead.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><ShieldCheck size={18} /></div>
                <div>
                  <span className="font-bold block text-slate-900">Encrypted KYC</span>
                  <p className="text-sm text-slate-500">Data protection for workers and employers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementAnalysis;
