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
        { label: 'Total Equipment', value: '124', icon: <Box className="text-blue-600" />, trend: '+12%', color: 'from-blue-500/20 to-indigo-600/5', iconBg: 'bg-blue-100 dark:bg-blue-900/30' },
        { label: 'Active Bookings', value: '18', icon: <Calendar className="text-emerald-600" />, trend: '+5%', color: 'from-emerald-500/20 to-teal-600/5', iconBg: 'bg-emerald-100 dark:bg-emerald-900/30' },
        { label: 'Pending Calibration', value: '4', icon: <AlertCircle className="text-orange-600" />, trend: 'Due soon', color: 'from-orange-500/20 to-amber-600/5', iconBg: 'bg-orange-100 dark:bg-orange-900/30' },
        { label: 'Total Users', value: '32', icon: <Users className="text-purple-600" />, trend: '+2 new', color: 'from-purple-500/20 to-fuchsia-600/5', iconBg: 'bg-purple-100 dark:bg-purple-900/30' },
    ];

    const recentActivity = [
        { user: 'Sarah Chen', action: 'reserved Oscilloscope DPO7000', time: '2 hours ago', status: 'Approved', icon: <Calendar size={16} className="text-blue-500" /> },
        { user: 'Mike Ross', action: 'returned Power Supply HP-E3631A', time: '4 hours ago', status: 'Completed', icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
        { user: 'Engineering Lab', action: 'scheduled maintenance for Spectrum Analyzer', time: 'Yesterday', status: 'Pending', icon: <Clock size={16} className="text-orange-500" /> },
    ];

    return (
        <div className="space-y-12 page-reveal">
            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/50 dark:border-slate-800/50 pb-8">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">System Intelligence</h1>
                    <p className="text-slate-500 font-semibold text-lg">Real-time telemetry and resource management.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-95">
                        Export Dataset
                    </button>
                    <button className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-500/25 active:scale-95 group flex items-center gap-2">
                        Execute Booking
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="premium-card p-8 rounded-[2.5rem] group cursor-pointer relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50 hover:border-blue-500/30 transition-all duration-500 interactive-hover">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700`}></div>

                        <div className="flex justify-between items-start mb-8 relative">
                            <div className={`p-4 rounded-2xl ${stat.iconBg} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-white/20 dark:border-slate-800`}>
                                {stat.icon}
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${index === 2 ? 'bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800/50' : 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/50'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <div className="relative space-y-1">
                            <h3 className="text-slate-400 dark:text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase">{stat.label}</h3>
                            <p className="text-4xl font-black text-slate-900 dark:text-white tabular-nums tracking-tighter">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Analytics Chart Area */}
                <div className="lg:col-span-2 premium-card rounded-[3rem] p-10 relative overflow-hidden flex flex-col">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Infrastructure Load</h3>
                            <p className="text-sm text-slate-500 font-semibold">Average utilization metrics across core departments</p>
                        </div>
                        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 whitespace-nowrap overflow-x-auto">
                            {['7 Days', '30 Days', '90 Days'].map((period, i) => (
                                <button key={period} className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${i === 0 ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}>
                                    {period}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Styled Bar Chart Visualization */}
                    <div className="h-80 flex items-end justify-between gap-6 px-4">
                        {[40, 75, 45, 95, 65, 85, 55].map((val, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4 group cursor-pointer h-full justify-end">
                                <div className="w-full relative flex items-end justify-center group-hover:h-[110%] transition-all duration-500 h-full">
                                    <div className="w-full bg-slate-50 dark:bg-slate-800/20 rounded-[1.25rem] absolute inset-0 border border-slate-100 dark:border-slate-800/50 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors"></div>
                                    <div
                                        className="w-full bg-gradient-to-t from-blue-600 via-blue-500 to-indigo-400 rounded-[1.25rem] relative transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] group-hover:scale-y-[1.02] shadow-sm overflow-hidden"
                                        style={{ height: `${val}%` }}
                                    >
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:20px_20px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            {val}%
                                        </div>
                                    </div>

                                    {/* Tooltip */}
                                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 glass-morphism text-slate-800 dark:text-white text-[10px] font-black px-4 py-2 rounded-2xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 whitespace-nowrap shadow-2xl z-10 border-blue-500/20 pointer-events-none translate-y-2 group-hover:translate-y-0">
                                        <div className="flex flex-col items-center">
                                            <span>{['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i]}</span>
                                            <span className="text-blue-600">{val}% Load Intensity</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-[0.2em]">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-blue-500 shadow-sm"></span>
                                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Core Instrumentation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-indigo-200 dark:bg-indigo-900 shadow-sm"></span>
                                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Auxiliary Units</span>
                            </div>
                        </div>
                        <button className="text-blue-600 font-black text-[11px] uppercase tracking-widest hover:text-blue-700 transition-all flex items-center gap-2 group border-b-2 border-blue-500/10 hover:border-blue-500 pb-1">
                            Telemetry Report <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="premium-card rounded-[3rem] p-10 flex flex-col bg-slate-900 dark:bg-slate-900 dark:border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32"></div>

                    <div className="flex items-center justify-between mb-10 relative">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-black text-white tracking-tight">Event Log</h3>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Real-time status updates</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-slate-400 group-hover:text-blue-400 transition-colors">
                            <Activity size={20} />
                        </div>
                    </div>

                    <div className="space-y-10 flex-1 relative">
                        {recentActivity.map((act, i) => (
                            <div key={i} className="flex gap-6 group/item cursor-pointer relative">
                                {i !== recentActivity.length - 1 && (
                                    <div className="absolute left-[22px] top-12 bottom-[-40px] w-px bg-white/5 group-hover/item:bg-blue-500/20 transition-colors"></div>
                                )}
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/30 transition-all duration-500 group-hover/item:scale-110 shadow-2xl">
                                    {act.icon}
                                </div>
                                <div className="space-y-2 pt-1">
                                    <p className="text-sm text-slate-400 font-semibold leading-relaxed group-hover/item:text-slate-200 transition-colors">
                                        <span className="text-white font-black">{act.user}</span> {act.action}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{act.time}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${act.status === 'Completed' ? 'text-emerald-400' :
                                            act.status === 'Pending' ? 'text-orange-400' : 'text-blue-400'
                                            }`}>{act.status}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white hover:bg-white/5 rounded-[1.5rem] transition-all border border-white/5 hover:border-white/10 shadow-2xl active:scale-[0.98] group flex items-center justify-center gap-2">
                        System History
                        <ArrowRight size={14} className="opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ArrowRight = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default Dashboard;
