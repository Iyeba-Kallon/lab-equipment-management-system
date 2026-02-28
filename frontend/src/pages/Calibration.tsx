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
        <div className="space-y-8 page-fade">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Calibration & Maintenance</h1>
                <p className="text-slate-500 font-medium">Monitor equipment health and compliance status.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="standard-card p-6 border-l-4 border-emerald-500">
                    <div className="flex items-center gap-4 text-emerald-600 mb-2">
                        <ShieldCheck size={20} />
                        <span className="text-xs font-bold uppercase tracking-wider">Compliance</span>
                    </div>
                    <h3 className="text-3xl font-bold">92%</h3>
                    <p className="text-sm text-slate-500 mt-1">In-calibration equipment</p>
                </div>

                <div className="standard-card p-6 border-l-4 border-amber-500">
                    <div className="flex items-center gap-4 text-amber-600 mb-2">
                        <Wrench size={20} />
                        <span className="text-xs font-bold uppercase tracking-wider">Maintenance</span>
                    </div>
                    <h3 className="text-3xl font-bold">04</h3>
                    <p className="text-sm text-slate-500 mt-1">Pending repairs</p>
                </div>

                <div className="standard-card p-6 border-l-4 border-slate-900 dark:border-slate-100">
                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 mb-2">
                        <History size={20} />
                        <span className="text-xs font-bold uppercase tracking-wider">Completed</span>
                    </div>
                    <h3 className="text-3xl font-bold">12</h3>
                    <p className="text-sm text-slate-500 mt-1">Actions this month</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calibration Queue */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="standard-card">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h2 className="font-bold">Calibration Queue</h2>
                            <button className="text-blue-600 text-sm font-semibold hover:underline">View Schedule</button>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {calibrationQueue.map((item) => (
                                <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.priority === 'Critical' ? 'bg-red-50 text-red-600' :
                                                item.priority === 'High' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                                            }`}>
                                            <ShieldCheck size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white">{item.equipment}</h4>
                                            <p className="text-xs text-slate-500">Next Due: {item.nextDue}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${item.status === 'Overdue' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'
                                            }`}>
                                            {item.status}
                                        </span>
                                        <ChevronRight size={18} className="text-slate-300" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-2xl text-white flex justify-between items-center">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Technical Support</h3>
                            <p className="text-slate-400 text-sm">Submit a maintenance ticket for specialized assistance.</p>
                            <button className="mt-4 px-6 py-2 bg-white text-slate-900 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
                                Open Ticket
                            </button>
                        </div>
                        <Wrench size={64} className="opacity-10" />
                    </div>
                </div>

                {/* Maintenance Logs */}
                <div className="standard-card p-6 space-y-6">
                    <h3 className="font-bold flex items-center gap-2">
                        <History size={18} className="text-slate-400" />
                        Recent Activity
                    </h3>
                    <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 dark:before:bg-slate-800">
                        {maintenanceLogs.map((log) => (
                            <div key={log.id} className="relative pl-8">
                                <div className="absolute left-0 top-1 w-6 h-6 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={12} className="text-blue-500" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{log.date}</p>
                                    <h4 className="text-sm font-bold">{log.equipment}</h4>
                                    <p className="text-xs text-slate-500">{log.task}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full btn-secondary py-2.5 text-xs">
                        Download Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calibration;
