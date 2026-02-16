import React from 'react';
import {
    Wrench,
    ShieldCheck,
    ChevronRight,
    CheckCircle2,
    History
} from 'lucide-react';

const Calibration: React.FC = () => {

    const calibrationQueue = [
        { id: 1, equipment: 'Oscilloscope DPO7000', lastCal: '2025-10-15', nextDue: '2026-02-28', status: 'Upcoming', priority: 'High' },
        { id: 2, equipment: 'DC Power Supply E3631A', lastCal: '2025-08-20', nextDue: '2026-03-15', status: 'Scheduled', priority: 'Medium' },
        { id: 3, equipment: 'Spectrum Analyzer FSV30', lastCal: '2025-02-01', nextDue: '2026-02-15', status: 'Overdue', priority: 'Critical' },
    ];

    const maintenanceLogs = [
        { id: 101, equipment: 'Digital Multimeter 87V', task: 'Internal battery replacement', date: '2026-02-10', technician: 'Alice Smith', cost: '$25.00' },
        { id: 102, equipment: 'Function Generator', task: 'Connector port repair', date: '2026-01-25', technician: 'Bob Jones', cost: '$45.00' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-600 text-white p-8 rounded-3xl shadow-xl shadow-emerald-200 dark:shadow-none relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                    <ShieldCheck size={48} className="opacity-20 mb-4" />
                    <h3 className="text-4xl font-black">92%</h3>
                    <p className="font-bold opacity-80 uppercase tracking-widest text-xs mt-1">Calibration Compliance</p>
                </div>

                <div className="bg-amber-500 text-white p-8 rounded-3xl shadow-xl shadow-amber-200 dark:shadow-none relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                    <Wrench size={48} className="opacity-20 mb-4" />
                    <h3 className="text-4xl font-black">04</h3>
                    <p className="font-bold opacity-80 uppercase tracking-widest text-xs mt-1">Pending Repairs</p>
                </div>

                <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-3xl shadow-xl shadow-slate-200 dark:shadow-none relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                    <History size={48} className="opacity-20 mb-4" />
                    <h3 className="text-4xl font-black">12</h3>
                    <p className="font-bold opacity-80 uppercase tracking-widest text-xs mt-1">Completed this month</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calibration Queue */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Calibration Queue</h2>
                            <button className="text-blue-600 text-xs font-bold uppercase hover:underline">View All</button>
                        </div>

                        <div className="space-y-4">
                            {calibrationQueue.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${item.priority === 'Critical' ? 'bg-red-500 shadow-red-200' :
                                            item.priority === 'High' ? 'bg-amber-500 shadow-amber-200' : 'bg-blue-500 shadow-blue-200'
                                            }`}>
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors uppercase text-xs tracking-wider">{item.equipment}</h4>
                                            <p className="text-xs text-slate-500 font-medium">Next Due: <span className="text-slate-700 dark:text-slate-300 font-bold">{item.nextDue}</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="hidden md:block text-right">
                                            <p className={`text-[10px] font-black uppercase tracking-widest ${item.status === 'Overdue' ? 'text-red-500' : 'text-slate-400'
                                                }`}>{item.status}</p>
                                            <p className="text-xs font-bold text-slate-500">Priority: {item.priority}</p>
                                        </div>
                                        <button className="p-2 bg-white dark:bg-slate-900 text-slate-400 hover:text-blue-600 rounded-lg shadow-sm">
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl shadow-blue-200 dark:shadow-none flex items-center justify-between overflow-hidden relative">
                        <div className="space-y-2 relative z-10">
                            <h3 className="text-2xl font-black tracking-tight">Need technical support?</h3>
                            <p className="font-medium opacity-80">Our specialized technicians are ready to assist you.</p>
                            <button className="mt-4 px-6 py-2.5 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                                Open Maintenance Ticket
                            </button>
                        </div>
                        <Wrench size={120} className="absolute -right-8 -bottom-8 opacity-10 rotate-12" />
                    </div>
                </div>

                {/* Recent Maintenance Logs */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm h-full">
                        <div className="flex items-center gap-3 mb-8">
                            <History size={24} className="text-slate-400" />
                            <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Recent Logs</h2>
                        </div>

                        <div className="space-y-8 relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800"></div>

                            {maintenanceLogs.map((log) => (
                                <div key={log.id} className="relative pl-12">
                                    <div className="absolute left-1 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-sm flex items-center justify-center">
                                        <CheckCircle2 size={10} className="text-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1">{log.date}</p>
                                        <h4 className="font-bold text-slate-800 dark:text-white text-sm">{log.equipment}</h4>
                                        <p className="text-xs text-slate-500 leading-snug">{log.task}</p>
                                        <p className="text-[10px] font-medium text-slate-400 mt-2">Tec: {log.technician} • Cost: {log.cost}</p>
                                    </div>
                                </div>
                            ))}

                            <button className="w-full mt-8 py-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl text-xs font-bold hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                                Download Monthly Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calibration;
