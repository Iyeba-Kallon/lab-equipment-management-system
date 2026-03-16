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
    QrCode,
    Search,
    ChevronRight
} from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { motion, AnimatePresence } from 'framer-motion';

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
        <div className="min-h-screen flex bg-slate-50 dark:bg-[#07090e] transition-colors duration-500 font-['Outfit'] selection:bg-primary/10 selection:text-primary">
            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? 288 : 96 }}
                className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-2xl border-r border-white/40 dark:border-white/5 fixed h-full z-50 shadow-premium overflow-hidden flex flex-col"
            >
                <div className="p-8 flex items-center justify-between">
                    <AnimatePresence mode="wait">
                        {isSidebarOpen && (
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex items-center gap-3 group cursor-pointer"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
                                    L
                                </div>
                                <span className="font-black text-2xl tracking-tighter text-slate-800 dark:text-white">LabOps</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2.5 hover:bg-white dark:hover:bg-white/5 rounded-xl transition-all border border-slate-100 dark:border-white/5 shadow-sm text-slate-500 hover:text-primary active:scale-95"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="mt-6 px-4 space-y-2 overflow-y-auto flex-1 custom-scrollbar">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative ${isActive
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 translate-x-1'
                                : 'text-slate-500 hover:bg-white/50 dark:hover:bg-white/5 dark:text-slate-400 font-bold hover:translate-x-1'
                                }`}
                        >
                            <div className={`transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${isSidebarOpen ? '' : 'mx-auto'}`}>
                                {item.icon}
                            </div>
                            {isSidebarOpen && <span className="text-sm tracking-wide font-black">{item.label}</span>}
                            {!isSidebarOpen && (
                                <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-[60] shadow-xl">
                                    {item.label}
                                </div>
                            )}
                            {isSidebarOpen && (
                                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ChevronRight size={14} className="text-current opacity-50" />
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 space-y-2 mt-auto">
                    <div className="h-px bg-slate-100 dark:bg-white/5 mx-4 mb-4"></div>
                    <NavLink to="/settings" className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:bg-white/50 dark:hover:bg-white/5'}`}>
                        <Settings size={20} className="group-hover:rotate-45 transition-transform" />
                        {isSidebarOpen && <span className="text-sm font-black">Settings</span>}
                    </NavLink>
                    <button className="w-full flex items-center gap-4 px-4 py-3.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-2xl transition-all duration-300 group">
                        <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                        {isSidebarOpen && <span className="text-sm font-black">Logout</span>}
                    </button>
                </div>
            </motion.aside>

            {/* Main Content */}
            <motion.main 
                animate={{ marginLeft: isSidebarOpen ? 288 : 96 }}
                className="flex-1 transition-all duration-500 overflow-hidden"
            >
                {/* Navbar */}
                <header className="h-24 bg-white/40 dark:bg-slate-900/20 backdrop-blur-xl border-b border-white/40 dark:border-white/5 flex items-center justify-between px-10 sticky top-0 z-40">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">
                            {location.pathname.split('/').pop()?.charAt(0).toUpperCase()}{location.pathname.split('/').pop()?.slice(1) || 'Overview'}
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Active Research Hive</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center bg-white/50 dark:bg-white/5 px-4 py-2 rounded-2xl border border-slate-200/50 dark:border-white/5 group focus-within:ring-2 ring-primary/20 transition-all">
                            <Search size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Universal Search..." 
                                className="bg-transparent border-none focus:ring-0 text-sm font-bold ml-3 w-48 placeholder:text-slate-400"
                            />
                            <span className="text-[10px] font-black text-slate-400 bg-white dark:bg-white/5 px-2 py-1 rounded-lg ml-3">⌘K</span>
                        </div>

                        <div className="relative group">
                            <button
                                onClick={() => setNotificationsOpen(!notificationsOpen)}
                                className="p-3 text-slate-500 hover:bg-white dark:hover:bg-white/5 rounded-2xl transition-all relative active:scale-90 group-hover:text-primary"
                            >
                                <Bell size={20} className="group-hover:rotate-[15deg] transition-transform" />
                                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                            </button>

                            <AnimatePresence>
                                {notificationsOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full right-0 mt-4 w-96 glass-floating p-8 z-50 overflow-hidden"
                                    >
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-4">
                                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Protocol Alerts</h4>
                                                <button className="text-[10px] font-black text-primary uppercase cursor-pointer hover:underline tracking-widest">Acknowledge All</button>
                                            </div>
                                            <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                                                {[1, 2].map((i) => (
                                                    <div key={i} className="flex gap-4 items-start p-4 hover:bg-white/50 dark:hover:bg-white/5 rounded-[1.5rem] transition-all cursor-pointer group/notif border border-transparent hover:border-slate-100 dark:hover:border-white/5">
                                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                                            <Activity size={18} className="text-blue-500" />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-sm font-black text-slate-800 dark:text-white group-hover/notif:text-primary transition-colors">Calibration Sync Required</p>
                                                            <p className="text-xs text-slate-500 font-bold leading-relaxed">Tektronix DPO7000 requires precision adjustment within 48 hours.</p>
                                                            <p className="text-[10px] text-slate-400 font-black uppercase mt-2 tracking-tighter">14 mins ago</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/profile" className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-white/10 group">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-black text-slate-800 dark:text-white group-hover:text-primary transition-colors">Lead Researcher</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">Alpha Kallon</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-white/5 dark:to-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden group-hover:scale-105 transition-all duration-300">
                                <User size={24} className="group-hover:text-primary transition-colors" />
                            </div>
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8 lg:p-12 max-w-[1600px] mx-auto min-h-[calc(100vh-6rem)]">
                    {children}
                </div>

                <BookingModal
                    isOpen={isBookingModalOpen}
                    onClose={closeBookingModal}
                />
            </motion.main>
        </div>
    );
};

export default Layout;

