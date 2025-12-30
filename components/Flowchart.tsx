
import React from 'react';
import { 
  Smartphone, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  UserPlus, 
  FileCheck, 
  ShieldCheck, 
  Search, 
  IndianRupee, 
  Lock,
  Eye,
  Camera,
  Layers,
  ChevronRight
} from 'lucide-react';
import { FlowType, FlowStep } from '../types';

interface FlowchartProps {
  type: FlowType;
}

const Flowchart: React.FC<FlowchartProps> = ({ type }) => {
  const getSteps = (): FlowStep[] => {
    switch (type) {
      case FlowType.JOB_SEEKER:
        return [
          {
            id: 'js1',
            title: 'Mobile OTP Auth',
            description: 'Low-friction entry using mobile verification.',
            icon: 'Smartphone',
            details: ['Supabase Auth', 'SMS Integration', 'Auto-login']
          },
          {
            id: 'js2',
            title: 'Card-Based Profiles',
            description: 'Select your profession from interactive cards.',
            icon: 'Layers',
            details: ['Visual Job Tiles', 'Highlight Selection', 'Profile Wizard']
          },
          {
            id: 'js3',
            title: 'Visual Identity',
            description: 'Capture basic info and a live selfie.',
            icon: 'Camera',
            details: ['Bio-data', 'Live Selfie', 'Location Tagging']
          },
          {
            id: 'js4',
            title: 'Identity Verification',
            description: 'Secure Aadhaar check for high platform trust.',
            icon: 'ShieldCheck',
            details: ['Doc Scan', 'Encrypted Storage', 'Verified Badge']
          },
          {
            id: 'js5',
            title: 'Skills & Expectations',
            description: 'Set your salary expectations and experience.',
            icon: 'FileCheck',
            details: ['Work History', 'Salary Bracket', 'Language Skills']
          }
        ];
      case FlowType.EMPLOYER:
        return [
          {
            id: 'em1',
            title: 'Business Onboarding',
            description: 'Quick setup for individuals or companies.',
            icon: 'UserPlus',
            details: ['GST/KYC check', 'Contact Setup', 'Hiring Goals']
          },
          {
            id: 'em2',
            title: 'Tiered Subscriptions',
            description: 'Choose a hiring volume that fits.',
            icon: 'IndianRupee',
            details: ['Credits System', 'Razorpay Checkout', 'Tax Invoicing']
          },
          {
            id: 'em3',
            title: 'Job Deployment',
            description: 'Post specific needs for blue-collar talent.',
            icon: 'FileCheck',
            details: ['Map Placement', 'Salary Filter', 'Requirement Tags']
          },
          {
            id: 'em4',
            title: 'Candidate Discovery',
            description: 'Directly search our verified pool.',
            icon: 'Search',
            details: ['Phone Unlocking', 'Experience Tiers', 'Location Proximity']
          },
          {
            id: 'em5',
            title: 'Active Hiring',
            description: 'Connect and confirm hiring.',
            icon: 'CheckCircle2',
            details: ['Direct Call', 'Hire Log', 'Community Rating']
          }
        ];
      case FlowType.ADMIN_MODERATOR:
        return [
          {
            id: 'ad1',
            title: 'Control Center',
            description: 'Overview of platform health and traffic.',
            icon: 'Eye',
            details: ['Real-time Monitoring', 'Alert Queue', 'Traffic Heatmap']
          },
          {
            id: 'ad2',
            title: 'Compliance Review',
            description: 'Verify sensitive documents manually.',
            icon: 'ShieldCheck',
            details: ['Aadhaar QC', 'Selfie Check', 'Spam Removal']
          },
          {
            id: 'ad3',
            title: 'Posting Audit',
            description: 'Audit employer job posts for quality.',
            icon: 'FileCheck',
            details: ['Rate Validation', 'Safety Check', 'Post Boosting']
          },
          {
            id: 'ad4',
            title: 'Financial Ledger',
            description: 'Monitor all subscription revenue.',
            icon: 'IndianRupee',
            details: ['Revenue Analysis', 'Payouts', 'Tax Compliance']
          },
          {
            id: 'ad5',
            title: 'Governance',
            description: 'Manage roles and security protocols.',
            icon: 'Lock',
            details: ['Role Based Access', 'Audit Logs', 'API Security']
          }
        ];
    }
  };

  const steps = getSteps();

  const IconMap: any = {
    Smartphone, UserPlus, ShieldCheck, FileCheck, CheckCircle2, 
    IndianRupee, Search, Eye, Lock, Camera, Layers
  };

  return (
    <div className="flex flex-col gap-10 relative">
      {steps.map((step, index) => {
        const Icon = IconMap[step.icon] || Smartphone;
        return (
          <div key={step.id} className="relative group">
            {/* Connection Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-10 top-20 w-0.5 h-16 bg-slate-100 group-hover:bg-indigo-100 transition-colors z-0 hidden md:block" />
            )}
            
            <div className="flex flex-col md:flex-row gap-8 relative z-10">
              {/* Icon Bubble */}
              <div className="w-20 h-20 rounded-3xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:shadow-xl group-hover:shadow-indigo-200 group-hover:rotate-6">
                <Icon size={32} className="text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold text-xs">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{step.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-indigo-500 bg-indigo-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <ChevronRight size={14} /> Step {index + 1}
                  </div>
                </div>
                <p className="text-slate-500 text-lg mb-6 leading-relaxed">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.details?.map((detail, i) => (
                    <span key={i} className="text-sm font-semibold text-slate-600 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl flex items-center gap-2 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-default">
                      <CheckCircle2 size={16} className="text-indigo-500" /> {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Flowchart;
