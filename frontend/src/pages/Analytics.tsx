import React from 'react';
import {
    TrendingUp,
    ArrowUpRight,
    ArrowDownRight,
    PieChart as PieChartIcon,
    Download,
    Calendar
} from 'lucide-react';

const Analytics: React.FC = () => {
    const stats = [
        { label: 'Total Utilization', value: '78%', change: '+12%', trendingUp: true },
        { label: 'Avg. Response Time', value: '4.2h', change: '-18%', trendingUp: true },
        { label: 'Equipment ROI', value: '$24.5k', change: '+5%', trendingUp: true },
        { label: 'Downtime Rate', value: '2.1%', change: '+0.4%', trendingUp: false },
    ];

    const usageByLab = [
        { lab: 'Lab A', usage: 85, color: 'bg-blue-600' },
        { lab: 'Lab B', usage: 62, color: 'bg-indigo-500' },
        { lab: 'Lab C', usage: 45, color: 'bg-emerald-500' },
        { lab: 'Lab D', usage: 38, color: 'bg-slate-500' },
    ];

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 font-['Outfit']">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 bg-white dark:bg-slate-900/50 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl group-hover:bg-emerald-600/10 transition-colors duration-1000"></div>

                <div className="space-y-4 relative z-10">
                    <div className="inline-flex px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-100 dark:border-emerald-800">Intelligence Unit</div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">System Analytics</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Cross-departmental utilization and efficiency metrics.</p>
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto relative z-10">
                    <button className="flex-1 lg:flex-none px-6 py-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                        <Calendar size={18} className="text-blue-600" />
                        Fiscal Quarter Q1
                    </button>
                    <button className="flex-1 lg:flex-none px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl">
                        <Download size={18} />
                        Export Audit
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="premium-card bg-white dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 group hover:shadow-2xl transition-all duration-500">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-6 group-hover:text-blue-600 transition-colors uppercase">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-none tracking-tight">{stat.value}</h3>
                            <div className={`flex items-center gap-1.5 text-[10px] font-black px-3 py-1.5 rounded-lg border ${stat.trendingUp ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 border-emerald-100 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 border-rose-100 dark:border-rose-800'
                                }`}>
                                {stat.trendingUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Chart Placeholder */}
                <div className="lg:col-span-2 premium-card bg-white dark:bg-slate-900/50 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden h-[450px] shadow-sm">
                    <div className="flex items-center justify-between mb-12 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 dark:border-blue-800">
                                <TrendingUp size={24} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Equipment Velocity</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Aggregate usage time by month</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100 dark:border-slate-700">2026 Season</div>
                        </div>
                    </div>

                    {/* Visual Placeholder for a Chart */}
                    <div className="absolute inset-0 top-32 px-10 pb-12 flex items-end justify-between gap-6">
                        {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85, 40, 75].map((h, i) => (
                            <div key={i} className="flex-1 space-y-4 group flex flex-col items-center">
                                <div className="absolute -top-10 bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap shadow-xl">
                                    {h}% CAP
                                </div>
                                <div
                                    className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-[1rem] opacity-70 group-hover:opacity-100 transition-all duration-700 relative shadow-lg group-hover:shadow-blue-500/30 group-hover:-translate-y-1"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute inset-x-2 top-2 h-1/2 bg-white/20 rounded-full blur-md"></div>
                                </div>
                                <div className="text-[10px] font-black text-slate-300 group-hover:text-slate-600 dark:group-hover:text-white text-center uppercase tracking-tighter transition-colors">{['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][i]}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Breakdown Card */}
                <div className="premium-card bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col group">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>

                    <div className="flex items-center gap-4 mb-12 relative z-10">
                        <div className="w-12 h-12 bg-white/10 text-blue-400 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                            <PieChartIcon size={24} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-black uppercase tracking-tight">Lab Intensity</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Facility allocation share</p>
                        </div>
                    </div>

                    <div className="space-y-8 flex-1 relative z-10">
                        {usageByLab.map((item, i) => (
                            <div key={i} className="space-y-3 group/item">
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/item:text-white transition-colors">
                                    <span>{item.lab}</span>
                                    <span className="text-white bg-white/10 px-2 py-0.5 rounded-md">{item.usage}%</span>
                                </div>
                                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                                    <div className={`h-full ${item.color} rounded-full relative group-hover/item:shadow-lg transition-all`} style={{ width: `${item.usage}%` }}>
                                        <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-12 w-full py-5 bg-white/5 hover:bg-white text-white hover:text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 border border-white/10 hover:shadow-2xl relative z-10">
                        Deep Diver Analytics
                        <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
