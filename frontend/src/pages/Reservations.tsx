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
    ArrowRight
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
            case 'Active': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800';
            case 'Upcoming': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
            case 'Completed': return 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400 border-slate-200 dark:border-slate-800';
            case 'Cancelled': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200 dark:border-gray-800';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Active': return <Clock size={14} />;
            case 'Upcoming': return <Calendar size={14} />;
            case 'Completed': return <CheckCircle2 size={14} />;
            case 'Cancelled': return <XCircle size={14} />;
            default: return <AlertCircle size={14} />;
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Reservations</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage and track equipment bookings</p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search bookings..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl outline-none focus:ring-2 focus:ring-blue-500 shadow-inner text-sm transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl font-bold shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 transition-all text-sm shrink-0">
                        <Plus size={18} />
                        New Booking
                    </button>
                </div>
            </div>

            {/* Tabs & Filters */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
                <div className="flex gap-8">
                    {['all', 'active', 'upcoming', 'history'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setFilter(t)}
                            className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${filter === t
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
                <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors pb-4">
                    <Filter size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Filter</span>
                </button>
            </div>

            {/* Reservations List */}
            <div className="grid grid-cols-1 gap-4">
                {reservations.map((res) => (
                    <div
                        key={res.id}
                        className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row justify-between gap-6">
                            <div className="flex gap-5">
                                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex flex-col items-center justify-center border border-slate-200 dark:border-slate-800 shadow-sm shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-tighter">FEB</span>
                                    <span className="text-xl font-black text-slate-800 dark:text-white leading-none mt-1">{res.start.split('-')[2].split(' ')[0]}</span>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{res.equipment}</h3>
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 border ${getStatusStyle(res.status)}`}>
                                            {getStatusIcon(res.status)}
                                            {res.status}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-500 flex items-center gap-4">
                                        <span className="flex items-center gap-1.5"><Clock size={14} /> {res.start.split(' ')[1]} - {res.end.split(' ')[1]}</span>
                                        <span className="flex items-center gap-1.5 font-bold text-blue-500/80"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {res.project}</span>
                                    </p>
                                    <p className="text-xs text-slate-400 font-medium">Reserved by <span className="text-slate-600 dark:text-slate-300 font-bold">{res.user}</span></p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 md:self-center border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 dark:border-slate-800">
                                {res.status === 'Upcoming' && (
                                    <>
                                        <button className="flex-1 md:flex-none text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 px-4 py-2 rounded-xl transition-all">Cancel</button>
                                        <button className="flex-1 md:flex-none text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-4 py-2 rounded-xl transition-all border border-slate-200 dark:border-slate-800">Reschedule</button>
                                    </>
                                )}
                                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State Mock */}
            {reservations.length === 0 && (
                <div className="py-20 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full text-slate-300">
                        <Calendar size={40} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">No reservations found</h3>
                        <p className="text-sm text-slate-500">Try adjusting your filters or make a new booking.</p>
                    </div>
                </div>
            )}

            <div className="pt-8 flex justify-center">
                <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all">
                    View Full Calendar View
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default Reservations;
