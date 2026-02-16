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
    Wrench
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

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
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300">
            {/* Sidebar */}
            <aside
                className={`${isSidebarOpen ? 'w-64' : 'w-20'
                    } bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 fixed h-full z-50`}
            >
                <div className="p-6 flex items-center justify-between">
                    {isSidebarOpen && (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">L</div>
                            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">LabOps</span>
                        </div>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-100 dark:border-slate-800 shadow-sm"
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="mt-4 px-3 space-y-1">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none'
                                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 font-medium'
                                }`}
                        >
                            {item.icon}
                            {isSidebarOpen && <span>{item.label}</span>}
                        </NavLink>
                    ))}
                </nav>

                <div className="absolute bottom-6 w-full px-3 space-y-1">
                    <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all duration-200">
                        <Settings size={20} />
                        {isSidebarOpen && <span className="font-medium">Settings</span>}
                    </button>
                    <button className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all duration-200">
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
                {/* Navbar */}
                <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-40">
                    <h2 className="text-xl font-semibold text-slate-800 dark:text-white whitespace-nowrap">Dashboard Overview</h2>

                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <button className="p-2.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all relative">
                                <Bell size={22} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                        </div>

                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-slate-800 dark:text-white">Admin User</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 underline decoration-slate-400 underline-offset-3">Physics Dept.</p>
                            </div>
                            <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 border-2 border-white dark:border-slate-800 ring-2 ring-blue-500/20 shadow-sm overflow-hidden">
                                <User size={24} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
