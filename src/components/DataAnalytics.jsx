import React from 'react';
import { 
  Database, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Layers, 
  TrendingUp, 
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { corporatePhotography } from '../data/photography';

export default function DataAnalytics({ onSelectService }) {
  const { dataAnalytics } = companyData;

  const dataIconMap = {
    'data-engineering': Database,
    'data-analytics': BarChart3,
    'bi': PieChart,
    'data-viz': LineChart,
    'data-warehousing': Layers,
    'predictive-analytics-data': TrendingUp,
    'reporting-automation': FileSpreadsheet,
  };

  return (
    <section id="data-analytics" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0284c7] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
            <span>SECTION 07 &bull; {dataAnalytics.category.toUpperCase()}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            {dataAnalytics.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {dataAnalytics.description}
          </p>
        </div>

        {/* Visual & Services Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Real Analytics Dashboard / Analyst Photo */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <div className="overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-sm">
                <img
                  src={corporatePhotography.dataAnalytics.url}
                  alt={corporatePhotography.dataAnalytics.alt}
                  className="w-full h-[360px] lg:h-[420px] object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-semibold text-slate-800">
                  Governed Data Quality & Lineage
                </div>
                <p className="text-slate-500 leading-relaxed">
                  We implement automated data validation tests, deduplication, schema migration controls, and end-to-end lineage tracking from ingestion through executive dashboards.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Snowflake</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">dbt</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Apache Airflow</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Power BI</span>
                </div>
              </div>
            </div>
          </div>

          {/* 7 Data Services */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dataAnalytics.services.map((service) => {
              const Icon = dataIconMap[service.id] || Database;
              return (
                <div
                  key={service.id}
                  onClick={() => onSelectService && onSelectService({ ...service, category: dataAnalytics.title })}
                  className="p-5 rounded-lg bg-[#f8fafc] border border-slate-200/90 hover:border-slate-300 hover:bg-white transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded bg-white border border-slate-200 text-[#0f172a] flex items-center justify-center mb-3 group-hover:border-[#0284c7]/40 group-hover:text-[#0284c7] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-[#0284c7] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#0284c7]">
                    <span>Data pipeline details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
