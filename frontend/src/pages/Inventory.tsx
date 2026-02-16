import React, { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    LayoutGrid,
    List,
    MoreVertical,
    ExternalLink,
    MapPin,
    Calendar
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
            case 'Available': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
            case 'In Use': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
            case 'Calibration': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
            default: return 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400';
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Search and Actions */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search equipment, model, serial..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all border border-slate-200 dark:border-slate-800">
                        <Filter size={18} />
                        <span className="text-sm font-medium">Filters</span>
                    </button>
                    <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden md:block"></div>
                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600' : 'text-slate-500'}`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600' : 'text-slate-500'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl transition-all hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none ml-2">
                        <Plus size={18} />
                        <span className="text-sm font-semibold">Add Equipment</span>
                    </button>
                </div>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {mockEquipment.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(item.status)}`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                            <div className="p-5 space-y-4">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors uppercase text-xs tracking-wide">{item.category}</h4>
                                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><MoreVertical size={16} /></button>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-1 leading-tight">{item.name}</h3>
                                    <p className="text-xs text-slate-500 mt-1">{item.manufacturer} • {item.model}</p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                        <MapPin size={14} />
                                        {item.location}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <button className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:underline">
                                        VIEW DETAILS <ExternalLink size={12} />
                                    </button>
                                    <button className="px-4 py-1.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
                                        RESERVE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Equipment</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Location</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {mockEquipment.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-800 dark:text-white">{item.name}</p>
                                                <p className="text-[10px] text-slate-500">{item.manufacturer} • {item.model}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{item.category}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs text-slate-500 font-medium">{item.location}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><ExternalLink size={18} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Inventory;
