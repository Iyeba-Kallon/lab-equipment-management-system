```javascript
import React, { useState } from 'react';
import {
    Calendar,
    Clock,
    CheckCircle2,
    AlertCircle,
    XCircle,
    MoreVertical,
    Plus,
    Search,
    Filter,
    ArrowRight,
    User
} from 'lucide-react';

const Reservations: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const reservations = [
        {
            id: 1,
            equipment: 'Oscilloscope DPO7000',
            user: 'Sarah Chen',
            start: '2026-02-16 09:00',
            end: '2026-02-16 12:00',
            status: 'Active',
            project: 'High-Speed Signal Analysis'
        },
        {
            id: 2,
            equipment: 'DC Power Supply',
            user: 'You',
            start: '2026-02-17 14:00',
            end: '2026-02-17 17:00',
            status: 'Upcoming',
            project: 'Circuit Prototyping'
        },
        {
            id: 3,
            equipment: 'Spectrum Analyzer',
            user: 'Mike Ross',
            start: '2026-02-15 10:00',
            end: '2026-02-15 16:00',
            status: 'Completed',
            project: 'RF Testing'
        },
        {
            id: 4,
            equipment: 'Digital Multimeter',
            user: 'Sarah Chen',
            start: '2026-02-14 08:00',
            end: '2026-02-14 10:00',
            status: 'Cancelled',
            project: 'General Maintenance'
        },
    ];

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-blue-600 text-white shadow-lg shadow-blue-500/20';
            case 'Upcoming': return 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20';
            case 'Completed': return 'bg-slate-500 text-white';
            case 'Cancelled': return 'bg-rose-500 text-white shadow-lg shadow-rose-500/20';
            default: return 'bg-slate-200 text-slate-600';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Active': return <Clock size={12} />;
            case 'Upcoming': return <Calendar size={12} />;
            case 'Completed': return <CheckCircle2 size={12} />;
            case 'Cancelled': return <XCircle size={12} />;
            default: return <AlertCircle size={12} />;
        }
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 font-['Outfit']">
            {/* Header & Actions */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 bg-white dark:bg-slate-900/50 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors duration-1000"></div>

                <div className="space-y-4 relative z-10">
                    <div className="inline-flex px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100 dark:border-blue-800">Operational Log</div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Reservations</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Detailed history and upcoming equipment allocations.</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto relative z-10">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Find a reservation..."
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-blue-500/30 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/5 font-bold text-sm transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black shadow-2xl hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all text-xs uppercase tracking-widest shrink-0">
                        <Plus size={20} />
                        New Booking
                    </button>
                </div>
            </div>

            {/* Tabs & Filters */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6">
                <div className="flex gap-10">
                    {['all', 'active', 'upcoming', 'history'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setFilter(t)}
                            className={`pb - 5 text - [11px] font - black uppercase tracking - [0.2em] transition - all border - b - 2 relative shrink - 0 ${
    filter === t
    ? 'border-blue-600 text-blue-600'
    : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-white'
} `}
                        >
                            {t}
                            {filter === t && (
                                <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 rounded-t-xl -z-10 animate-in fade-in duration-500"></div>
                            )}
                        </button>
                    ))}
                </div>
                <button className="hidden sm:flex items-center gap-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pb-5">
                    <Filter size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Advanced Filter</span>
                </button>
            </div>

            {/* Reservations List */}
            <div className="grid grid-cols-1 gap-6">
                {reservations.map((res) => (
                    <div
                        key={res.id}
                        className="premium-card group bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 hover:border-blue-500/30 transition-all duration-500"
                    >
                        <div className="flex flex-col lg:flex-row justify-between gap-10">
                            <div className="flex gap-8">
                                <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800/50 rounded-3xl flex flex-col items-center justify-center border border-slate-100 dark:border-slate-800 shadow-sm shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-3 group-hover:scale-110">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">FEB</span>
                                    <span className="text-3xl font-black leading-none mt-1">{res.start.split('-')[2].split(' ')[0]}</span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors tracking-tight">{res.equipment}</h3>
                                        <span className={`px - 3 py - 1 rounded - lg text - [9px] font - black uppercase tracking - widest flex items - center gap - 2 ${ getStatusStyle(res.status) } `}>
                                            {getStatusIcon(res.status)}
                                            {res.status}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                                        <span className="flex items-center gap-3"><Clock size={16} className="text-blue-500" /> {res.start.split(' ')[1]} - {res.end.split(' ')[1]}</span>
                                        <span className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span> {res.project}</span>
                                        <span className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                                            <User size={14} className="text-slate-400" /> {res.user}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 lg:self-center border-t lg:border-t-0 pt-6 lg:pt-0 border-slate-100 dark:border-slate-800">
                                {res.status === 'Upcoming' && (
                                    <>
                                        <button className="flex-1 lg:flex-none text-xs font-black uppercase tracking-widest text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 px-6 py-3 rounded-xl transition-all">Cancel</button>
                                        <button className="flex-1 lg:flex-none text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 px-6 py-3 rounded-xl transition-all border border-slate-100 dark:border-slate-700">Reschedule</button>
                                    </>
                                )}
                                <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-100">
                                    <MoreVertical size={22} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State Mock */}
            {reservations.length === 0 && (
                <div className="py-24 text-center space-y-8 bg-slate-50 dark:bg-slate-900/30 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-white dark:bg-slate-800 rounded-[2.5rem] text-slate-200 shadow-sm border border-slate-100 dark:border-slate-800">
                        <Calendar size={48} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">No records found</h3>
                        <p className="text-slate-500 font-medium text-lg">There are no reservations matching your current search parameters.</p>
                    </div>
                </div>
            )}

            <div className="pt-10 flex flex-col items-center gap-6">
                <div className="h-px w-24 bg-slate-100 dark:bg-slate-800"></div>
                <button className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-blue-600 hover:gap-5 transition-all group">
                    View Enterprise Calendar
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default Reservations;
