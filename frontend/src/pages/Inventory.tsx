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
    MapPin
} from 'lucide-react';

const mockEquipment = [
    { id: 1, name: 'Oscilloscope DPO7000', category: 'Oscilloscope', manufacturer: 'Tektronix', model: 'DPO7024', status: 'Available', location: 'Lab A, Bench 4', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'DC Power Supply', category: 'Power Supply', manufacturer: 'Keysight', model: 'E3631A', status: 'In Use', location: 'Lab B, Bench 1', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Spectrum Analyzer', category: 'Analyzer', manufacturer: 'Rohde & Schwarz', model: 'FSV30', status: 'Calibration', location: 'Service Center', image: 'https://images.unsplash.com/photo-1581092335397-9583ee92d03b?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Digital Multimeter', category: 'Meter', manufacturer: 'Fluke', model: '87V', status: 'Available', location: 'Lab A, Bench 2', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400' },
];

const Inventory: React.FC = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Available': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200/50';
            case 'In Use': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200/50';
            case 'Calibration': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200/50';
            default: return 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400 border-slate-200/50';
        }
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Equipment Inventory</h1>
                    <p className="text-slate-500 mt-1 font-medium">Manage and track all laboratory assets in one place.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-2xl transition-all hover:bg-blue-700 shadow-lg shadow-blue-500/25 font-bold group">
                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    <span>Add New Equipment</span>
                </button>
            </div>

            {/* Search and Actions */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center glass-morphism p-6 rounded-[2rem] shadow-sm">
                <div className="relative w-full lg:max-w-xl group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, category, or model..."
                        className="w-full pl-12 pr-6 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 outline-none transition-all font-medium text-slate-700 dark:text-slate-200"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-3.5 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md font-bold">
                        <Filter size={18} />
                        <span>Filters</span>
                    </button>
                    <div className="h-10 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2 hidden lg:block"></div>
                    <div className="flex bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-2xl">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                        >
                            <LayoutGrid size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                        >
                            <List size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {mockEquipment.map((item) => (
                        <div key={item.id} className="premium-card rounded-[2.5rem] overflow-hidden group cursor-pointer flex flex-col h-full bg-gradient-to-b from-white to-slate-50/30 dark:from-slate-900 dark:to-slate-900/50">
                            <div className="relative h-56 overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-5 left-5">
                                    <span className={`px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border backdrop-blur-md ${getStatusColor(item.status)}`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1 space-y-5">
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-[0.2em]">{item.category}</span>
                                        <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1"><MoreVertical size={18} /></button>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">{item.name}</h3>
                                    <p className="text-xs text-slate-500 mt-2 font-medium">{item.manufacturer} • {item.model}</p>
                                </div>

                                <div className="flex items-center gap-3 py-3 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold">
                                    <MapPin size={16} className="text-blue-500" />
                                    {item.location}
                                </div>

                                <div className="pt-2 flex items-center justify-between gap-3">
                                    <Link to={`/inventory/${item.id}`} className="flex-1 text-center py-3 text-blue-600 text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border border-blue-100 dark:border-blue-900/30">
                                        Details
                                    </Link>
                                    <button className="flex-1 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-extrabold uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-slate-200 dark:shadow-none">
                                        Reserve
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="premium-card rounded-[2.5rem] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                                    <th className="px-8 py-5 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">Equipment Asset</th>
                                    <th className="px-8 py-5 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">Category</th>
                                    <th className="px-8 py-5 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="px-8 py-5 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">Location</th>
                                    <th className="px-8 py-5 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {mockEquipment.map((item) => (
                                    <tr key={item.id} className="hover:bg-blue-50/30 dark:hover:bg-blue-900/5 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform">
                                                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.name}</p>
                                                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide mt-0.5">{item.manufacturer} • {item.model}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">{item.category}</span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border ${getStatusColor(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-bold">
                                                <MapPin size={14} className="text-blue-500" />
                                                {item.location}
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link to={`/inventory/${item.id}`} className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all">
                                                    <ExternalLink size={20} />
                                                </Link>
                                                <button className="p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all">
                                                    <MoreVertical size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-bold text-slate-500">
                        <span>Showing {mockEquipment.length} items</span>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-600 cursor-not-allowed opacity-50">Previous</button>
                            <button className="px-4 py-2 bg-white dark:bg-slate-700 rounded-lg transition-all border border-slate-200 dark:border-slate-600 shadow-sm text-blue-600">1</button>
                            <button className="px-4 py-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-600">Next</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inventory;
