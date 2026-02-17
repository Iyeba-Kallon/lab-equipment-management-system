import React, { useState } from 'react';
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
import { NavLink, Link } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-500 font-['Outfit']">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? 'w-72' : 'w-24'
                    } bg-white dark:bg-slate-900 border-r border-slate-200/60 dark:border-slate-800/60 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] fixed h-full z-50 shadow-xl shadow-slate-200/20 dark:shadow-none`}
            >
                <div className="p-8 flex items-center justify-between">
                    {isSidebarOpen && (
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
                                L
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-slate-800 dark:text-white">LabOps</span>
                        </div>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all border border-slate-100 dark:border-slate-800 shadow-sm text-slate-500 hover:text-blue-600"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="mt-6 px-4 space-y-2">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-slate-400 font-medium'
                                }`}
                        >
                            <div className={`transition-transform duration-300 group-hover:scale-110 ${isSidebarOpen ? '' : 'mx-auto'}`}>
                                {item.icon}
                            </div>
                            {isSidebarOpen && <span className="text-sm tracking-wide">{item.label}</span>}
                            {!isSidebarOpen && (
                                <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-[60]">
                                    {item.label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className="absolute bottom-8 w-full px-4 space-y-2">
                    <NavLink to="/profile" className={({ isActive }) => `w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 ${isActive ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                        <Settings size={20} />
                        {isSidebarOpen && <span className="text-sm font-medium">Settings</span>}
                    </NavLink>
                    <button className="w-full flex items-center gap-4 px-4 py-3.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-2xl transition-all duration-300 group">
                        <LogOut size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                        {isSidebarOpen && <span className="text-sm font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 ${isSidebarOpen ? 'ml-72' : 'ml-24'} transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]`}>
                {/* Navbar */}
                <header className="h-24 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between px-10 sticky top-0 z-40">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">Dashboard Overview</h2>
                        <p className="text-xs text-slate-500 font-medium">Welcome back, Admin</p>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="relative group">
                            <button className="p-3 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all relative group">
                                <Bell size={22} className="group-hover:rotate-12 transition-transform" />
                                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                            </button>
                        </div>

                        <Link to="/profile" className="flex items-center gap-4 pl-8 border-l border-slate-200 dark:border-slate-800 group">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">Alpha Kallon</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Physics Dept.</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 border-2 border-white dark:border-slate-800 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 overflow-hidden ring-4 ring-blue-500/5">
                                <User size={26} />
                            </div>
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-10 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
