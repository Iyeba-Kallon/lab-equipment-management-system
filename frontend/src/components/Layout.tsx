import React, { useState } from 'react';
import BookingModal from './BookingModal';
import {
    LayoutDashboard,
    Box,
    Calendar,
    Settings,
    Bell,
    User,
    LogOut,
    Menu,
    X,
    History,
    Activity,
    BarChart3,
    Wrench,
    QrCode
} from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isBookingModalOpen, closeBookingModal } = useModal();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
        { icon: <Box size={20} />, label: 'Inventory', path: '/inventory' },
        { icon: <Calendar size={20} />, label: 'Reservations', path: '/reservations' },
        { icon: <Wrench size={20} />, label: 'Calibration', path: '/calibration' },
        { icon: <BarChart3 size={20} />, label: 'Analytics', path: '/analytics' },
        { icon: <Activity size={20} />, label: 'Usage Logs', path: '/usage-logs' },
        { icon: <History size={20} />, label: 'Maintenance', path: '/maintenance' },
        { icon: <QrCode size={20} />, label: 'Scanner', path: '/scanner' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-500 font-['Outfit'] selection:bg-blue-500/10 selection:text-blue-600">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? 'w-72' : 'w-24'
                    } bg-white dark:bg-slate-900 border-r border-slate-200/60 dark:border-slate-800/60 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) fixed h-full z-50 shadow-xl shadow-slate-200/20 dark:shadow-none overflow-hidden`}
            >
                <div className="p-8 flex items-center justify-between">
                    {isSidebarOpen && (
                        <div className="flex items-center gap-3 group cursor-pointer animate-reveal">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
                                L
                            </div>
                            <span className="font-bold text-2xl tracking-tighter text-slate-800 dark:text-white">LabOps</span>
                        </div>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all border border-slate-100 dark:border-slate-800 shadow-sm text-slate-500 hover:text-blue-600 active:scale-95"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="mt-6 px-4 space-y-2 overflow-y-auto max-h-[calc(100vh-250px)] custom-scrollbar">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 translate-x-1'
                                : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-slate-400 font-medium hover:translate-x-1'
                                }`}
                        >
                            <div className={`transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${isSidebarOpen ? '' : 'mx-auto'}`}>
                                {item.icon}
                            </div>
                            {isSidebarOpen && <span className="text-sm tracking-wide font-semibold">{item.label}</span>}
                            {!isSidebarOpen && (
                                <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-[60] shadow-xl">
                                    {item.label}
                                </div>
                            )}
                            {isSidebarOpen && (
                                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight size={14} className="text-current opacity-50" />
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className="absolute bottom-8 w-full px-4 space-y-2">
                    <div className="h-px bg-slate-100 dark:bg-slate-800 mx-4 mb-4 opacity-50"></div>
                    <NavLink to="/settings" className={({ isActive }) => `w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                        <Settings size={20} className="group-hover:rotate-45 transition-transform" />
                        {isSidebarOpen && <span className="text-sm font-semibold">Settings</span>}
                    </NavLink>
                    <button className="w-full flex items-center gap-4 px-4 py-3.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-2xl transition-all duration-300 group">
                        <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                        {isSidebarOpen && <span className="text-sm font-semibold">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 ${isSidebarOpen ? 'ml-72' : 'ml-24'} transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)`}>
                {/* Navbar */}
                <header className="h-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between px-10 sticky top-0 z-40 transition-all duration-300">
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
                            {location.pathname.split('/').pop()?.charAt(0).toUpperCase()}{location.pathname.split('/').pop()?.slice(1) || 'Overview'}
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Session</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                            <button className="px-4 py-1.5 text-[10px] font-black uppercase tracking-wider bg-white dark:bg-slate-700 text-blue-600 rounded-lg shadow-sm transition-all">Quick Search</button>
                            <span className="px-3 text-[10px] font-bold text-slate-400">⌘K</span>
                        </div>

                        <div className="relative group">
                            <button
                                onClick={() => setNotificationsOpen(!notificationsOpen)}
                                className="p-2.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all relative active:scale-90 group-hover:text-blue-600 cursor-pointer"
                            >
                                <Bell size={20} className="group-hover:rotate-[15deg] transition-transform" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-bounce"></span>
                            </button>

                            {/* Notification Tray Placeholder */}
                            {notificationsOpen && (
                                <div className="absolute top-full right-0 mt-4 w-80 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-6 z-50 animate-reveal">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Alerts</h4>
                                            <span className="text-[10px] font-black text-blue-600 uppercase cursor-pointer hover:underline">Clear All</span>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex gap-4 items-start p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-2xl transition-all cursor-pointer group/notif">
                                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0 group-hover/notif:scale-150 transition-transform"></div>
                                                <div className="space-y-1">
                                                    <p className="text-xs font-bold text-slate-800 dark:text-white">Calibration Due: Tektronix DPO7000</p>
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">2 hours remaining</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/profile" className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800 group interactive-hover">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-black text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">Alpha Kallon</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Lead Researcher</p>
                            </div>
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden ring-2 ring-blue-500/0 group-hover:ring-blue-500/20 transition-all duration-300">
                                <User size={22} className="group-hover:scale-110 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8 max-w-7xl mx-auto page-fade">
                    {children}
                </div>

                <BookingModal
                    isOpen={isBookingModalOpen}
                    onClose={closeBookingModal}
                />
            </main>
        </div>
    );
};

const ArrowRight = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);


export default Layout;
