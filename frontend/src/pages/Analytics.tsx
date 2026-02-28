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
        { lab: 'Lab B', usage: 62, color: 'bg-sky-500' },
        { lab: 'Lab C', usage: 45, color: 'bg-emerald-500' },
        { lab: 'Lab D', usage: 38, color: 'bg-slate-500' },
    ];

    return (
        <div className="space-y-8 page-fade">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">System Analytics</h1>
                    <p className="text-slate-500 font-medium">Utilization and efficiency metrics across all laboratories.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="btn-secondary flex items-center gap-2 py-2">
                        <Calendar size={16} />
                        <span>Q1 2026</span>
                    </button>
                    <button className="btn-primary flex items-center gap-2 py-2 text-sm">
                        <Download size={16} />
                        <span>Export Data</span>
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="standard-card p-6">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                            <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${stat.trendingUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                                }`}>
                                {stat.trendingUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {stat.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Area */}
                <div className="lg:col-span-2 standard-card p-8 min-h-[400px]">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-bold flex items-center gap-2">
                            <TrendingUp size={18} className="text-blue-500" />
                            Utilization Trends
                        </h3>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Rolling 12 Months</div>
                    </div>

                    <div className="h-64 flex items-end justify-between gap-4 mt-12">
                        {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85, 40, 75].map((h, i) => (
                            <div key={i} className="flex-1 group flex flex-col items-center gap-3">
                                <div
                                    className="w-full bg-blue-100 dark:bg-slate-800 rounded-t-md relative overflow-hidden group-hover:bg-blue-600 transition-colors"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                    {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lab Breakdown */}
                <div className="standard-card p-8 space-y-8">
                    <h3 className="font-bold flex items-center gap-2">
                        <PieChartIcon size={18} className="text-blue-500" />
                        Distribution by Lab
                    </h3>
                    <div className="space-y-6">
                        {usageByLab.map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                    <span className="text-slate-500">{item.lab}</span>
                                    <span className="text-slate-900 dark:text-white">{item.usage}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${item.color} rounded-full`}
                                        style={{ width: `${item.usage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full btn-secondary py-3 text-xs">
                        View Detailed Reports
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
