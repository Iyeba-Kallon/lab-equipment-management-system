import React from 'react';
import {
    Box,
    Calendar,
    AlertCircle,
    Users,
    CheckCircle2,
    Clock,
    Activity
} from 'lucide-react';

const Dashboard: React.FC = () => {
    const stats = [
        { label: 'Total Equipment', value: '124', icon: <Box className="text-blue-600" />, trend: '+12%', color: 'from-blue-500/10 to-blue-600/5', iconBg: 'bg-blue-100 dark:bg-blue-900/30' },
        { label: 'Active Bookings', value: '18', icon: <Calendar className="text-emerald-600" />, trend: '+5%', color: 'from-emerald-500/10 to-emerald-600/5', iconBg: 'bg-emerald-100 dark:bg-emerald-900/30' },
        { label: 'Pending Calibration', value: '4', icon: <AlertCircle className="text-orange-600" />, trend: 'Due soon', color: 'from-orange-500/10 to-orange-600/5', iconBg: 'bg-orange-100 dark:bg-orange-900/30' },
        { label: 'Total Users', value: '32', icon: <Users className="text-purple-600" />, trend: '+2 new', color: 'from-purple-500/10 to-purple-600/5', iconBg: 'bg-purple-100 dark:bg-purple-900/30' },
    ];

    const recentActivity = [
        { user: 'Sarah Chen', action: 'reserved Oscilloscope DPO7000', time: '2 hours ago', status: 'Approved', icon: <Calendar size={16} className="text-blue-500" /> },
        { user: 'Mike Ross', action: 'returned Power Supply HP-E3631A', time: '4 hours ago', status: 'Completed', icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
        { user: 'Engineering Lab', action: 'scheduled maintenance for Spectrum Analyzer', time: 'Yesterday', status: 'Pending', icon: <Clock size={16} className="text-orange-500" /> },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">System Status</h1>
                    <p className="text-slate-500 mt-1 font-medium">Real-time overview of your laboratory assets.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
                        Export Report
                    </button>
                    <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/25">
                        New Reservation
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="premium-card p-6 rounded-[2rem] group cursor-pointer relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700`}></div>

                        <div className="flex justify-between items-start mb-6 relative">
                            <div className={`p-4 rounded-2xl ${stat.iconBg} group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-sm`}>
                                {stat.icon}
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${index === 2 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <div className="relative">
                            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-bold tracking-wide uppercase">{stat.label}</h3>
                            <p className="text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tabular-nums">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Analytics Chart Area */}
                <div className="lg:col-span-2 premium-card rounded-[2.5rem] p-8 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Equipment Utilization</h3>
                            <p className="text-sm text-slate-500 font-medium">Average usage metrics over time</p>
                        </div>
                        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                            {['7d', '30d', '90d'].map((period) => (
                                <button key={period} className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${period === '7d' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}>
                                    {period}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Styled Bar Chart Visualization */}
                    <div className="h-72 flex items-end justify-between gap-4 px-2">
                        {[40, 75, 45, 95, 65, 85, 55].map((val, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                                <div className="w-full relative flex items-end justify-center">
                                    <div className="w-full bg-blue-50 dark:bg-blue-900/10 rounded-2xl absolute inset-0"></div>
                                    <div
                                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl relative transition-all duration-1000 ease-out group-hover:from-blue-500 group-hover:to-blue-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer"
                                        style={{ height: `${val}%` }}
                                    >
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 glass-morphism text-slate-800 dark:text-white text-[11px] font-bold px-3 py-1.5 rounded-xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 whitespace-nowrap shadow-xl z-10 border-blue-100 dark:border-blue-800">
                                            {val}% Load
                                        </div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="text-slate-500 font-medium">Core Equipment</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-200 dark:bg-blue-800"></div>
                                <span className="text-slate-500 font-medium">Accessories</span>
                            </div>
                        </div>
                        <button className="text-blue-600 font-bold hover:underline flex items-center gap-1 group">
                            Detailed Analytics <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="premium-card rounded-[2.5rem] p-8 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Recent Activity</h3>
                        <Activity size={20} className="text-slate-400" />
                    </div>
                    <div className="space-y-8 flex-1">
                        {recentActivity.map((act, i) => (
                            <div key={i} className="flex gap-5 group cursor-pointer relative">
                                {i !== recentActivity.length - 1 && (
                                    <div className="absolute left-6 top-10 bottom-[-32px] w-px bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors"></div>
                                )}
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-all duration-500 group-hover:scale-110 shadow-sm">
                                    {act.icon}
                                </div>
                                <div className="space-y-1.5 pt-1">
                                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                        <span className="text-slate-900 dark:text-white font-bold">{act.user}</span> {act.action}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{act.time}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                        <span className={`text-[11px] font-bold uppercase tracking-wider ${act.status === 'Completed' ? 'text-emerald-500' :
                                            act.status === 'Pending' ? 'text-orange-500' : 'text-blue-500'
                                            }`}>{act.status}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-10 py-4 text-sm font-bold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-2xl transition-all border border-blue-100 dark:border-blue-900/30 shadow-sm active:scale-[0.98]">
                        Full History
                    </button>
                </div>
            </div>
        </div>
    );
};

const ArrowRight = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default Dashboard;
