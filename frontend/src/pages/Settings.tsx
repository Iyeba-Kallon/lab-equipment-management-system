import React, { useState } from 'react';
import {
    User,
    Bell,
    Shield,
    Monitor,
    Save,
    ChevronRight,
    Globe,
    Lock
} from 'lucide-react';

const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile Settings', icon: <User size={18} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
        { id: 'security', label: 'Security', icon: <Shield size={18} /> },
        { id: 'appearance', label: 'Appearance', icon: <Monitor size={18} /> },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8 page-fade">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
                    <p className="text-slate-500 mt-1">Manage your account preferences and site configuration.</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Tabs */}
                <div className="md:col-span-4 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="md:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
                    {activeTab === 'profile' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold">Profile Information</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Username</label>
                                    <input type="text" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none" defaultValue="Alpha Kallon" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                                    <input type="email" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none" defaultValue="alpha@labops.com" />
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Biography</label>
                                    <textarea rows={4} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none" defaultValue="Senior Research Fellow at LabOps Systems." />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold">Notification Preferences</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Booking Confirmation', desc: 'Receive email when a booking is confirmed' },
                                    { label: 'System Alerts', desc: 'Notify on critical equipment failures' },
                                    { label: 'Maintenance Reminders', desc: 'Reminders for scheduled calibrations' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                                        <div>
                                            <p className="font-semibold text-sm">{item.label}</p>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                        <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold">Security & Access</h3>
                            <div className="space-y-4">
                                <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <Lock className="text-slate-400" size={20} />
                                        <div className="text-left">
                                            <p className="font-semibold text-sm">Change Password</p>
                                            <p className="text-xs text-slate-500">Update your account credentials</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={18} className="text-slate-400" />
                                </button>
                                <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <Globe className="text-slate-400" size={20} />
                                        <div className="text-left">
                                            <p className="font-semibold text-sm">Session Management</p>
                                            <p className="text-xs text-slate-500">Log out from other active devices</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={18} className="text-slate-400" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
