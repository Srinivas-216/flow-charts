
import React from 'react';
import { Database, Table, Key, Link as LinkIcon } from 'lucide-react';

const SchemaViz: React.FC = () => {
  const tables = [
    {
      name: 'profiles',
      tag: 'Job Seekers',
      columns: [
        { name: 'id', type: 'uuid (PK)', primary: true },
        { name: 'phone', type: 'text' },
        { name: 'full_name', type: 'text' },
        { name: 'job_type', type: 'profession_enum' },
        { name: 'selfie_url', type: 'text' },
        { name: 'aadhaar_doc', type: 'jsonb' },
        { name: 'verification_status', type: 'status_enum' },
        { name: 'salary_pref', type: 'numeric' },
        { name: 'geo_location', type: 'point' },
      ]
    },
    {
      name: 'employers',
      tag: 'Hiring Side',
      columns: [
        { name: 'id', type: 'uuid (PK)', primary: true },
        { name: 'org_name', type: 'text' },
        { name: 'subscription_id', type: 'uuid (FK)' },
        { name: 'active_credits', type: 'int4' },
        { name: 'kyc_verified', type: 'bool' },
      ]
    },
    {
      name: 'job_postings',
      tag: 'Marketplace',
      columns: [
        { name: 'id', type: 'uuid (PK)', primary: true },
        { name: 'employer_id', type: 'uuid (FK)' },
        { name: 'role_type', type: 'text' },
        { name: 'compensation', type: 'text' },
        { name: 'live_status', type: 'enum' },
      ]
    },
    {
      name: 'subscriptions',
      tag: 'Revenue',
      columns: [
        { name: 'id', type: 'uuid (PK)', primary: true },
        { name: 'plan_name', type: 'text' },
        { name: 'monthly_rate', type: 'decimal' },
        { name: 'unlock_limit', type: 'int' },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {tables.map((table) => (
        <div key={table.name} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-300 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-100/50">
          <div className="bg-slate-50 border-b border-slate-200 p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg border border-slate-200 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors">
                <Table size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-mono tracking-tight">{table.name}</h4>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{table.tag}</p>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div className="p-5 space-y-3">
            {table.columns.map((col) => (
              <div key={col.name} className="flex justify-between items-center group/row">
                <div className="flex items-center gap-3">
                  {col.primary ? (
                    <Key size={14} className="text-amber-500" />
                  ) : (
                    <div className="w-[14px] h-[14px] border border-slate-200 rounded-sm" />
                  )}
                  <span className="text-sm font-semibold text-slate-700 group-hover/row:text-indigo-600 transition-colors">{col.name}</span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{col.type}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Visual Relationship Diagram Info */}
      <div className="md:col-span-2 border-2 border-dashed border-slate-200 p-12 rounded-3xl bg-white flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6">
          <LinkIcon size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Technical Architecture</h3>
        <p className="text-slate-500 max-w-lg text-lg leading-relaxed">
          Powered by PostgreSQL RLS (Row Level Security), the system ensures strict data isolation. Moderators access a special view to verify KYC documents via an internal agent application.
        </p>
      </div>
    </div>
  );
};

export default SchemaViz;
