import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    Filter,
    Plus,
    LayoutGrid,
    List,
    MoreVertical,
    ExternalLink,
    MapPin,
    ArrowRight
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

const mockEquipment = [
    { id: 1, name: 'Oscilloscope DPO7000', category: 'Oscilloscope', manufacturer: 'Tektronix', model: 'DPO7024', status: 'Available', location: 'Lab A, Bench 4', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'DC Power Supply', category: 'Power Supply', manufacturer: 'Keysight', model: 'E3631A', status: 'In Use', location: 'Lab B, Bench 1', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Spectrum Analyzer', category: 'Analyzer', manufacturer: 'Rohde & Schwarz', model: 'FSV30', status: 'Calibration', location: 'Service Center', image: 'https://images.unsplash.com/photo-1581092335397-9583ee92d03b?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Digital Multimeter', category: 'Meter', manufacturer: 'Fluke', model: '87V', status: 'Available', location: 'Lab A, Bench 2', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400' },
];

const Inventory: React.FC = () => {
    const { openBookingModal } = useModal();
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Available': return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/50';
            case 'In Use': return 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-100 dark:border-blue-800/50';
            case 'Calibration': return 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border-orange-100 dark:border-orange-800/50';
            default: return 'bg-slate-50 text-slate-600 dark:bg-slate-900/30 dark:text-slate-400 border-slate-100 dark:border-slate-800/50';
        }
    };

    return (
        <div className="space-y-8 page-fade">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-slate-200 dark:border-slate-800 pb-10">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Equipment Inventory</h1>
                    <p className="text-slate-500 font-medium">Manage and monitor laboratory instrumentation.</p>
                </div>
                <button
                    onClick={openBookingModal}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={18} />
                    <span>New Booking</span>
                </button>
            </div>

            {/* Search and Actions */}
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center standard-card p-4">
                <div className="relative w-full lg:max-w-xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search equipment..."
                        className="w-full pl-12 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none btn-secondary flex items-center gap-2">
                        <Filter size={18} />
                        <span>Filters</span>
                    </button>
                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow text-blue-600' : 'text-slate-500'}`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow text-blue-600' : 'text-slate-500'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {mockEquipment.map((item) => (
                        <div key={item.id} className="premium-card rounded-[3rem] overflow-hidden group cursor-pointer flex flex-col h-full bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-900/80 hover:border-blue-500/30 interactive-hover">
                            <div className="relative h-64 overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1)" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                                <div className="absolute top-6 left-6">
                                    <span className={`px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] border backdrop-blur-3xl shadow-2xl ${getStatusColor(item.status)}`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1 space-y-6">
                                <div className="flex-1 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">{item.category}</span>
                                        <button className="text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors p-1 active:scale-90"><MoreVertical size={18} /></button>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-[1.2] group-hover:text-blue-600 transition-colors tracking-tight">{item.name}</h3>
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">{item.manufacturer} <span className="mx-2 opacity-30">|</span> {item.model}</p>
                                </div>

                                <div className="flex items-center gap-4 py-4 px-5 bg-white dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-white/5 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest shadow-sm">
                                    <MapPin size={16} className="text-blue-500 opacity-70" />
                                    {item.location}
                                </div>

                                <div className="pt-2 flex items-center justify-between gap-4 relative z-10">
                                    <Link to={`/inventory/${item.id}`} className="flex-1 text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-200 dark:shadow-none cursor-pointer">
                                        Data Profile
                                    </Link>
                                    <button
                                        onClick={(e) => { e.preventDefault(); alert(`Handshake initiated for ${item.name}`); }}
                                        className="flex items-center justify-center p-4 text-blue-600 border border-blue-100 dark:border-blue-900/30 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all active:scale-90 shadow-sm shadow-blue-500/5 cursor-pointer"
                                    >
                                        <ArrowRight size={18} className="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="premium-card rounded-[3rem] overflow-hidden border border-slate-200/50 dark:border-white/5 shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[1000px]">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-800/20">
                                    <th className="px-10 py-7 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Asset Nomenclature</th>
                                    <th className="px-10 py-7 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Department</th>
                                    <th className="px-10 py-7 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Validation</th>
                                    <th className="px-10 py-7 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Location Hub</th>
                                    <th className="px-10 py-7 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] text-right">Operations</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                {mockEquipment.map((item) => (
                                    <tr key={item.id} className="hover:bg-blue-50/40 dark:hover:bg-blue-900/10 transition-all group">
                                        <td className="px-10 py-7">
                                            <div className="flex items-center gap-6">
                                                <div className="w-16 h-16 rounded-[1.25rem] overflow-hidden bg-slate-100 shrink-0 border border-slate-200 dark:border-slate-800 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-lg font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors tracking-tight">{item.name}</p>
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.manufacturer} • {item.model}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-7">
                                            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700 uppercase tracking-widest">{item.category}</span>
                                        </td>
                                        <td className="px-10 py-7">
                                            <span className={`px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] border shadow-sm ${getStatusColor(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-10 py-7">
                                            <div className="flex items-center gap-3 text-[10px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest">
                                                <MapPin size={16} className="text-blue-500 opacity-60" />
                                                {item.location}
                                            </div>
                                        </td>
                                        <td className="px-10 py-7 text-right">
                                            <div className="flex items-center justify-end gap-3">
                                                <Link to={`/inventory/${item.id}`} className="p-3.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-2xl transition-all active:scale-90 border border-transparent hover:border-blue-500/20 shadow-sm">
                                                    <ExternalLink size={20} />
                                                </Link>
                                                <button className="p-3.5 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-2xl transition-all active:scale-90 border border-transparent hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">
                                                    <MoreVertical size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-10 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col items-center sm:items-start space-y-1">
                            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Asset Count</span>
                            <p className="text-sm font-black text-slate-900 dark:text-white">Showing <span className="text-blue-600">{mockEquipment.length}</span> individual items</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-not-allowed opacity-30">Archive</button>
                            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700">
                                <button className="px-5 py-2.5 bg-white dark:bg-slate-700 rounded-lg shadow-xl text-blue-600 text-[10px] font-black">01</button>
                                <button className="px-5 py-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg text-[10px] font-black transition-colors">02</button>
                            </div>
                            <button className="px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700 active:scale-95 group flex items-center gap-2">
                                Forward <ArrowRight size={14} className="opacity-50 group-hover:translate-x-1 transition-all" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;
