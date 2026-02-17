import React from 'react';
import {
    User,
    Settings,
    Shield,
    Bell,
    Smartphone,
    ChevronRight,
    LogOut,
    Building2,
    Mail,
    CheckCircle2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
    const { user, logout } = useAuth();

    const menuItems = [
        { title: 'Identity & Biometrics', icon: <User size={20} />, description: 'Update photographic records and personal metadata' },
        { title: 'Cryptographic Security', icon: <Shield size={20} />, description: 'Rotate access keys and define multi-factor protocols' },
        { title: 'Signal Configuration', icon: <Bell size={20} />, description: 'Define alert thresholds and communication channels' },
        { title: 'Endpoint Management', icon: <Smartphone size={20} />, description: 'Audit active workstation sessions and authorized devices' },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 font-['Outfit']">
            {/* Profile Header */}
            <div className="bg-white dark:bg-slate-900/50 rounded-[3rem] p-12 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/10 dark:shadow-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-blue-600/10 transition-colors duration-1000"></div>
                <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="relative group/avatar">
                        <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-5xl font-black shadow-2xl shadow-blue-500/30 group-hover/avatar:scale-105 group-hover/avatar:rotate-3 transition-all duration-500">
                            {user?.username.charAt(0).toUpperCase()}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 border-4 border-white dark:border-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <CheckCircle2 size={18} />
                        </div>
                    </div>

                    <div className="text-center lg:text-left space-y-4">
                        <div className="space-y-1">
                            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase">{user?.username}</h1>
                            <p className="text-slate-500 dark:text-slate-400 font-bold text-lg uppercase tracking-wider">Senior Research Fellow</p>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                            <div className="flex items-center gap-3 text-sm text-slate-400 font-bold uppercase tracking-widest">
                                <Mail size={16} className="text-blue-500" /> {user?.email}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-400 font-bold uppercase tracking-widest">
                                <Building2 size={16} className="text-blue-500" /> {user?.department}
                            </div>
                        </div>

                        <div className="pt-2">
                            <span className="px-4 py-1.5 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">
                                {user?.role} clearance
                            </span>
                        </div>
                    </div>

                    <div className="lg:ml-auto flex gap-4">
                        <button className="px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.05] active:scale-95 transition-all shadow-2xl">
                            Synchronize
                        </button>
                        <button
                            onClick={logout}
                            className="p-4 bg-rose-50 dark:bg-rose-950/20 text-rose-600 rounded-2xl hover:bg-rose-500 hover:text-white transition-all border border-rose-100 dark:border-rose-900/50 group"
                        >
                            <LogOut size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Settings Menu */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-6">User Directives</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {menuItems.map((item, i) => (
                            <button
                                key={i}
                                className="w-full text-left bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex items-center justify-between hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group"
                            >
                                <div className="flex items-center gap-8">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.description}</p>
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-blue-600 group-hover:translate-x-2 transition-all">
                                    <ChevronRight size={24} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / System Info */}
                <div className="space-y-8">
                    <div className="premium-card bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600"></div>
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity"></div>

                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-12 h-12 bg-white/10 text-blue-400 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight">Access Node</h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Network Status</span>
                                <span className="text-[10px] font-black bg-blue-500 px-3 py-1 rounded-lg shadow-lg shadow-blue-500/20">CONNECTED</span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center px-2">
                                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Lab Auth</span>
                                    <span className="text-[10px] font-black text-emerald-400">GRANTED</span>
                                </div>
                                <div className="flex justify-between items-center px-2">
                                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Protocol V4</span>
                                    <span className="text-[10px] font-black text-amber-500">PENDING</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all backdrop-blur-sm shadow-xl mt-4">
                                Elevation Request
                            </button>
                        </div>
                    </div>

                    <div className="p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] text-center space-y-4 group hover:border-blue-500/30 transition-colors">
                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-[1.5rem] flex items-center justify-center mx-auto text-slate-300 group-hover:rotate-12 transition-transform">
                            <Settings size={32} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Build Signature</h4>
                            <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">v1.0.4-gold</p>
                        </div>
                        <p className="text-[9px] text-slate-400 uppercase font-black tracking-[0.3em] pt-4">Quantum Core Framework</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
