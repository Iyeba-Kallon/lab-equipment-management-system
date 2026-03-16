import React from 'react';
import {
    Box,
    Calendar,
    AlertCircle,
    Users,
    CheckCircle2,
    Clock,
    Activity,
    ArrowRight,
    TrendingUp,
    Shield,
    Zap
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
    const { openBookingModal } = useModal();
    const stats = [
        { label: 'Infrastructure', value: '124', icon: <Shield size={22} className="text-blue-500" />, trend: '+12%', color: 'from-blue-500 to-indigo-600', sub: 'Units Online' },
        { label: 'Active Syncs', value: '18', icon: <Zap size={22} className="text-emerald-500" />, trend: '+5%', color: 'from-emerald-500 to-teal-600', sub: 'Reservations' },
        { label: 'Alert Level', value: 'Low', icon: <AlertCircle size={22} className="text-orange-500" />, trend: 'Stable', color: 'from-orange-500 to-amber-600', sub: 'Maintenance' },
        { label: 'Personnel', value: '32', icon: <Users size={22} className="text-purple-500" />, trend: 'Active', color: 'from-purple-500 to-fuchsia-600', sub: 'Authenticated' },
    ];

    const recentActivity = [
        { user: 'Sarah Chen', action: 'reserved Oscilloscope DPO7000', time: '2 hours ago', status: 'Approved', icon: <Calendar size={16} className="text-blue-500" /> },
        { user: 'Mike Ross', action: 'returned Power Supply HP-E3631A', time: '4 hours ago', status: 'Completed', icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
        { user: 'Engineering Lab', action: 'scheduled maintenance for Spectrum Analyzer', time: 'Yesterday', status: 'Pending', icon: <Clock size={16} className="text-orange-500" /> },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
        >
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="space-y-3">
                    <motion.div variants={item} className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-primary" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">System Intelligence</span>
                    </motion.div>
                    <motion.h1 variants={item} className="text-5xl font-black text-slate-800 dark:text-white tracking-tighter">
                        Command Central
                    </motion.h1>
                    <motion.p variants={item} className="text-slate-500 font-bold max-w-lg leading-relaxed">
                        Orchestrating laboratory resources and infrastructure telemetry in real-time.
                    </motion.p>
                </div>
                <motion.div variants={item} className="flex items-center gap-4">
                    <button className="btn-secondary group">
                        Telemetry Export
                    </button>
                    <button
                        onClick={openBookingModal}
                        className="btn-primary flex items-center gap-3 group"
                    >
                        Initialize Protocol
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div 
                        key={index} 
                        variants={item}
                        className="premium-card p-8 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 -mr-12 -mt-12 rounded-full blur-2xl"></div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6">
                                {stat.icon}
                            </div>
                            <span className="text-[9px] font-black text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-widest transition-all group-hover:bg-primary group-hover:text-white">
                                {stat.trend}
                            </span>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
                            <div className="flex items-baseline gap-2">
                                <p className="text-4xl font-black text-slate-800 dark:text-white tracking-tighter">{stat.value}</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{stat.sub}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Infrastructure Load Visualization */}
                <motion.div variants={item} className="lg:col-span-2 premium-card p-10 relative overflow-hidden flex flex-col group/chart shadow-glass">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6 relative z-10">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Infrastructure Pulse</h3>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Average Load Intensity per Sector</p>
                        </div>
                        <div className="flex bg-slate-100 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200/50 dark:border-white/5">
                            {['24h', '7d', '30d'].map((period, i) => (
                                <button key={period} className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${i === 1 ? 'bg-white dark:bg-slate-700 text-primary shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}>
                                    {period}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Bar Chart */}
                    <div className="h-96 flex items-end justify-between gap-4 px-4 relative z-10 mt-4">
                        {[40, 75, 45, 95, 65, 85, 55].map((val, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-6 group/bar cursor-pointer h-full justify-end">
                                <div className="w-full relative flex items-end justify-center h-full">
                                    <div className="w-full bg-slate-50 dark:bg-white/5 rounded-3xl absolute inset-0 border border-slate-100 dark:border-white/5 group-hover/bar:bg-white dark:group-hover/bar:bg-white/10 transition-colors duration-500"></div>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${val}%` }}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="w-full bg-gradient-to-t from-blue-600 via-indigo-600 to-primary rounded-3xl relative shadow-lg group-hover/bar:scale-x-105 transition-transform duration-500"
                                    >
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent)] opacity-50"></div>
                                        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-[10px] font-black opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0">
                                            {val}%
                                        </div>
                                    </motion.div>

                                    {/* Glass Tooltip */}
                                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 glass-floating border border-primary/20 text-slate-800 dark:text-white text-[10px] font-black px-6 py-3 rounded-2xl opacity-0 scale-90 group-hover/bar:opacity-100 group-hover/bar:scale-100 transition-all duration-300 whitespace-nowrap z-20 shadow-2xl pointer-events-none translate-y-4 group-hover/bar:translate-y-0">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="uppercase tracking-[0.2em]">{['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i]}</span>
                                            <span className="text-primary text-xs font-black">{val}% Utilization</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-slate-400 group-hover/bar:text-primary transition-colors uppercase tracking-[0.2em]">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="flex items-center gap-10">
                            {[
                                { label: 'Mainframe', color: 'bg-blue-500' },
                                { label: 'Quantum Clusters', color: 'bg-indigo-300 dark:bg-indigo-900' }
                            ].map((tag, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <span className={`w-3 h-3 rounded-full ${tag.color} shadow-sm group-hover/chart:scale-150 transition-transform duration-500`}></span>
                                    <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{tag.label}</span>
                                </div>
                            ))}
                        </div>
                        <button className="text-primary font-black text-[10px] uppercase tracking-[0.3em] hover:text-indigo-600 transition-all flex items-center gap-3 group/btn">
                            Detailed Intelligence Report <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Event Log / Recent Activity */}
                <motion.div variants={item} className="premium-card p-10 flex flex-col bg-slate-900 dark:bg-black/40 relative overflow-hidden group/events shadow-premium">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] -mr-40 -mt-40 pointer-events-none transition-all duration-700 group-hover/events:scale-150 opacity-50"></div>

                    <div className="flex items-center justify-between mb-12 relative z-10">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-black text-white tracking-tight">Event Stream</h3>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Real-time status feed</p>
                        </div>
                        <div className="p-3.5 bg-white/5 rounded-2xl border border-white/5 text-slate-400 group-hover/events:text-primary transition-all duration-500 group-hover/events:rotate-[15deg]">
                            <Activity size={24} />
                        </div>
                    </div>

                    <div className="space-y-12 flex-1 relative z-10">
                        {recentActivity.map((act, i) => (
                            <div key={i} className="flex gap-8 group/item cursor-pointer relative">
                                {i !== recentActivity.length - 1 && (
                                    <div className="absolute left-7 top-14 bottom-[-48px] w-px bg-white/5 group-hover/item:bg-primary/30 transition-colors"></div>
                                )}
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 group-hover/item:border-primary/40 transition-all duration-500 group-hover/item:scale-110 shadow-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary opacity-0 group-hover/item:opacity-20 blur-xl"></div>
                                    <div className="relative z-10">{act.icon}</div>
                                </div>
                                <div className="space-y-2 pt-2">
                                    <p className="text-sm text-slate-400 font-bold leading-relaxed group-hover/item:text-slate-100 transition-colors">
                                        <span className="text-white font-black">{act.user}</span> {act.action}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{act.time}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${act.status === 'Completed' ? 'text-emerald-400' :
                                            act.status === 'Pending' ? 'text-orange-400' : 'text-primary'
                                            }`}>{act.status}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:bg-white/5 rounded-3xl transition-all border border-white/5 hover:border-white/10 shadow-2xl active:scale-[0.98] group flex items-center justify-center gap-4">
                        Comprehensive History
                        <ArrowRight size={18} className="opacity-50 group-hover:translate-x-2 group-hover:opacity-100 transition-all" />
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Dashboard;

