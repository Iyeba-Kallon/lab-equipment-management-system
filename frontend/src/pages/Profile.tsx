import React from 'react';
import {
    User,
    Settings,
    Shield,
    Bell,
    Lock,
    Smartphone,
    ChevronRight,
    LogOut,
    Building2,
    Mail
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
    const { user, logout } = useAuth();

    const menuItems = [
        { title: 'Personal Information', icon: <User size={20} />, description: 'Update your photo and personal details' },
        { title: 'Security & Password', icon: <Lock size={20} />, description: 'Manage your password and 2FA settings' },
        { title: 'Notification Settings', icon: <Bell size={20} />, description: 'Choose what alerts you want to receive' },
        { title: 'Device Management', icon: <Smartphone size={20} />, description: 'View and manage your active sessions' },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Profile Header */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="w-24 h-24 rounded-3xl bg-blue-600 flex items-center justify-center text-white text-4xl font-black shadow-xl shadow-blue-200 dark:shadow-none">
                        {user?.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-center md:text-left space-y-2">
                        <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight">{user?.username}</h1>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <span className="flex items-center gap-2 text-sm text-slate-500 font-bold">
                                <Mail size={16} /> {user?.email}
                            </span>
                            <span className="flex items-center gap-2 text-sm text-slate-500 font-bold">
                                <Building2 size={16} /> {user?.department}
                            </span>
                        </div>
                        <div className="pt-2">
                            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 dark:border-blue-800/50">
                                {user?.role} Access
                            </span>
                        </div>
                    </div>
                    <div className="md:ml-auto flex gap-3">
                        <button className="px-6 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-lg">
                            Edit Profile
                        </button>
                        <button
                            onClick={logout}
                            className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors border border-red-100"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Settings Menu */}
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Account Settings</h2>
                    <div className="space-y-3">
                        {menuItems.map((item, i) => (
                            <button
                                key={i}
                                className="w-full text-left bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none transition-all group"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">{item.title}</h4>
                                        <p className="text-xs text-slate-500 font-medium">{item.description}</p>
                                    </div>
                                </div>
                                <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / System Info */}
                <div className="space-y-6">
                    <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 relative overflow-hidden shadow-xl shadow-blue-200/20 transition-transform hover:-rotate-1">
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
                        <div className="flex items-center gap-3">
                            <Shield size={24} className="text-blue-400" />
                            <h3 className="text-lg font-black uppercase tracking-tight">System Access</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400 font-bold uppercase tracking-widest">Lab Access</span>
                                <span className="font-black">AUTHORIZED</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-400 font-bold uppercase tracking-widest">Admin Panel</span>
                                <span className="font-black text-red-400">RESTRICTED</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold transition-all backdrop-blur-sm">
                                Request Admin Rights
                            </button>
                        </div>
                    </div>

                    <div className="p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl text-center space-y-2">
                        <Settings size={32} className="mx-auto text-slate-300 mb-2" />
                        <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight">Version</h4>
                        <p className="text-xs text-slate-500 font-bold">1.0.4-stable</p>
                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest pt-2">LabOps Framework</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
