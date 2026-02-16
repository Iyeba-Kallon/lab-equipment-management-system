import React from 'react';
import {
    BarChart3,
    TrendingUp,
    Activity,
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
        { lab: 'Lab B', usage: 62, color: 'bg-emerald-500' },
        { lab: 'Lab C', usage: 45, color: 'bg-amber-500' },
        { lab: 'Lab D', usage: 38, color: 'bg-slate-500' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Analytics Dashboard</h1>
                    <p className="text-sm text-slate-500 font-medium mt-1">Real-time performance metrics and utilization reports</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
                        <Calendar size={14} />
                        Last 30 Days
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none">
                        <Download size={14} />
                        Export Data
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm group hover:scale-[1.02] transition-transform">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-3">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-3xl font-black text-slate-800 dark:text-white leading-none">{stat.value}</h3>
                            <div className={`flex items-center gap-0.5 text-[10px] font-bold px-2 py-1 rounded-full ${stat.trendingUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                                }`}>
                                {stat.trendingUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                {stat.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Placeholder */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden h-[400px]">
                    <div className="flex items-center justify-between mb-8 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center">
                                <TrendingUp size={20} />
                            </div>
                            <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight">Usage Trends</h3>
                        </div>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                            <span className="w-3 h-3 rounded-full bg-blue-200"></span>
                        </div>
                    </div>

                    {/* Visual Placeholder for a Chart */}
                    <div className="absolute inset-0 top-24 px-8 pb-8 flex items-end justify-between gap-4">
                        {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85, 40, 75].map((h, i) => (
                            <div key={i} className="flex-1 space-y-2 group">
                                <div
                                    className="w-full bg-blue-600 rounded-t-xl opacity-80 group-hover:opacity-100 transition-all duration-500 relative"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {h}%
                                    </div>
                                </div>
                                <div className="text-[8px] font-bold text-slate-400 text-center uppercase">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Breakdown Card */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-xl flex items-center justify-center">
                            <PieChartIcon size={20} />
                        </div>
                        <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight">Lab Breakdown</h3>
                    </div>

                    <div className="space-y-6 flex-1">
                        {usageByLab.map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-500">
                                    <span>{item.lab}</span>
                                    <span className="text-slate-800 dark:text-white">{item.usage}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.usage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-8 w-full py-4 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center gap-2 border border-transparent hover:border-slate-200">
                        View Secondary Metrics
                        <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
