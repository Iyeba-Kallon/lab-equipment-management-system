import React from 'react';
import {
    Box,
    Calendar,
    AlertCircle,
    ArrowUpRight,
    Users,
    CheckCircle2,
    Clock
} from 'lucide-react';

const Dashboard: React.FC = () => {
    const stats = [
        { label: 'Total Equipment', value: '124', icon: <Box className="text-blue-600" />, trend: '+12%', color: 'bg-blue-50 dark:bg-blue-950/30' },
        { label: 'Active Bookings', value: '18', icon: <Calendar className="text-emerald-600" />, trend: '+5%', color: 'bg-emerald-50 dark:bg-emerald-950/30' },
        { label: 'Pending Calibration', value: '4', icon: <AlertCircle className="text-amber-600" />, trend: 'Due soon', color: 'bg-amber-50 dark:bg-amber-950/30' },
        { label: 'Total Users', value: '32', icon: <Users className="text-purple-600" />, trend: '+2', color: 'bg-purple-50 dark:bg-purple-950/30' },
    ];

    const recentActivity = [
        { user: 'Sarah Chen', action: 'reserved Oscilloscope DPO7000', time: '2 hours ago', status: 'Approved', icon: <Calendar size={16} /> },
        { user: 'Mike Ross', action: 'returned Power Supply HP-E3631A', time: '4 hours ago', status: 'Completed', icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
        { user: 'Engineering Lab', action: 'scheduled maintenance for Spectrum Analyzer', time: 'Yesterday', status: 'Pending', icon: <Clock size={16} className="text-amber-500" /> },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${stat.color} group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${index === 2 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</h3>
                        <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Analytics Chart Area */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Equipment Utilization</h3>
                            <p className="text-sm text-slate-500">Average usage across all categories</p>
                        </div>
                        <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-3 py-1.5 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                        </select>
                    </div>

                    {/* Placeholder for Chart */}
                    <div className="h-64 flex items-end gap-3 px-4">
                        {[40, 70, 45, 90, 65, 80, 55].map((val, i) => (
                            <div key={i} className="flex-1 bg-blue-100 dark:bg-blue-900/20 rounded-t-lg relative group transition-all duration-500 hover:bg-blue-600 cursor-pointer" style={{ height: `${val}%` }}>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {val}% Usage
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-medium px-2">
                        <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {recentActivity.map((act, i) => (
                            <div key={i} className="flex gap-4 group cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                                    {act.icon}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-tight">
                                        <span className="text-blue-600 font-semibold">{act.user}</span> {act.action}
                                    </p>
                                    <p className="text-xs text-slate-500">{act.time} • <span className="text-emerald-500 font-medium">{act.status}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl transition-all border border-blue-100 dark:border-blue-900/50">
                        View All Activity
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
