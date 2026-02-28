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
        { title: 'Personal Information', icon: <User size={20} />, description: 'Update your display name and contact details' },
        { title: 'Security & Password', icon: <Shield size={20} />, description: 'Manage your password and account security' },
        { title: 'Notifications', icon: <Bell size={20} />, description: 'Choose how and when you receive alerts' },
        { title: 'Active Sessions', icon: <Smartphone size={20} />, description: 'Manage devices and current login sessions' },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8 page-fade">
            <div className="standard-card p-8 md:p-12 overflow-hidden relative">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-3xl bg-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                            {user?.username.charAt(0).toUpperCase()}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg">
                            <CheckCircle2 size={16} />
                        </div>
                    </div>

                    <div className="text-center md:text-left space-y-4 flex-1">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">{user?.username}</h1>
                            <p className="text-slate-500 font-medium">Research Technician</p>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400 font-medium">
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-blue-500" /> {user?.email}
                            </div>
                            <div className="flex items-center gap-2">
                                <Building2 size={16} className="text-blue-500" /> {user?.department}
                            </div>
                        </div>

                        <div className="pt-2">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider">
                                {user?.role} Access
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={logout}
                            className="flex items-center gap-2 px-6 py-2.5 bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white rounded-xl text-sm font-bold transition-all border border-rose-100"
                        >
                            <LogOut size={16} />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Account Settings</h2>
                    <div className="space-y-4">
                        {menuItems.map((item, i) => (
                            <button
                                key={i}
                                className="w-full text-left standard-card p-6 flex items-center justify-between hover:border-blue-500/30 transition-all group"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                        <p className="text-xs text-slate-500">{item.description}</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="standard-card p-6 space-y-6">
                        <h3 className="font-bold flex items-center gap-2">
                            <Shield size={18} className="text-blue-500" />
                            System Status
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-500 font-medium">Auth Status</span>
                                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded font-bold">VERIFIED</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-slate-500 font-medium">Last Login</span>
                                <span className="text-slate-900 dark:text-white font-bold">2 mins ago</span>
                            </div>
                            <hr className="border-slate-100 dark:border-slate-800" />
                            <button className="w-full btn-secondary py-2 text-xs">
                                Review Activity
                            </button>
                        </div>
                    </div>

                    <div className="p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl text-center space-y-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Version</p>
                        <p className="font-bold">v1.0.4-standard</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
