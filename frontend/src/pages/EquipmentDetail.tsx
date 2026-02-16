import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft,
    MapPin,
    Settings,
    History,
    Calendar,
    Wrench,
    FileText,
    AlertCircle,
    ExternalLink,
    ShieldCheck
} from 'lucide-react';

const EquipmentDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState('overview');

    // Mock data for the specific equipment
    const equipment = {
        id: 1,
        name: 'Oscilloscope DPO7000',
        category: 'Oscilloscope',
        manufacturer: 'Tektronix',
        model: 'DPO7024',
        serial: 'TEK-99283-X',
        status: 'Available',
        location: 'Lab A, Bench 4',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
        description: 'High-performance oscilloscope with 2.5 GHz bandwidth and 10 GS/s sample rate. Ideal for complex signal analysis and debugging of high-speed digital designs.',
        specs: {
            'Bandwidth': '2.5 GHz',
            'Channels': '4 Analog',
            'Sample Rate': '10 GS/s',
            'Record Length': '50M points',
            'Inputs': 'Standard BNC',
            'Display': '12.1-inch XGA Touch'
        },
        calibration: {
            lastDate: '2025-10-15',
            nextDate: '2026-10-15',
            status: 'Valid',
            cert: 'CERT-2025-001'
        }
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: <FileText size={16} /> },
        { id: 'specs', label: 'Specifications', icon: <Settings size={16} /> },
        { id: 'availability', label: 'Availability', icon: <Calendar size={16} /> },
        { id: 'history', label: 'History', icon: <History size={16} /> },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Link to="/inventory" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-semibold">Back to Inventory</span>
            </Link>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column: Image and Main Info */}
                <div className="xl:col-span-2 space-y-8">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <div className="aspect-video w-full relative group">
                            <img src={equipment.image} alt={equipment.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/30 transition-all">
                                    Full Preview <ExternalLink size={14} />
                                </button>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-widest">{equipment.category}</span>
                                        <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest">{equipment.status}</span>
                                    </div>
                                    <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">{equipment.name}</h1>
                                    <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium flex items-center gap-2">
                                        {equipment.manufacturer} <span className="w-1 h-1 bg-slate-300 rounded-full"></span> {equipment.model}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button className="flex-1 md:flex-none px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 hover:scale-[1.02] transition-all">
                                        Reserve Now
                                    </button>
                                    <button className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl hover:bg-slate-200 transition-colors">
                                        <Calendar size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Tabs Navigation */}
                            <div className="flex gap-2 border-b border-slate-100 dark:border-slate-800 mt-12 overflow-x-auto no-scrollbar">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap ${activeTab === tab.id
                                                ? 'border-blue-600 text-blue-600'
                                                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                                            }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="py-8">
                                {activeTab === 'overview' && (
                                    <div className="space-y-8 animate-in fade-in duration-300">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-3">About this equipment</h4>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">{equipment.description}</p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                                                    <MapPin size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Current Location</p>
                                                    <p className="text-sm font-bold text-slate-800 dark:text-white">{equipment.location}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                                                    <ShieldCheck size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Calibration Status</p>
                                                    <p className="text-sm font-bold text-slate-800 dark:text-white">{equipment.calibration.status} (Valid until {equipment.calibration.nextDate})</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'specs' && (
                                    <div className="space-y-4 animate-in fade-in duration-300">
                                        <div className="rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                                            <table className="w-full text-left">
                                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                                    {Object.entries(equipment.specs).map(([key, value]) => (
                                                        <tr key={key} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                                            <td className="px-6 py-4 text-sm font-semibold text-slate-500 w-1/3">{key}</td>
                                                            <td className="px-6 py-4 text-sm font-bold text-slate-800 dark:text-white">{value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'availability' && (
                                    <div className="p-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-300">
                                        <Calendar size={48} className="text-slate-300" />
                                        <div>
                                            <p className="text-lg font-bold text-slate-800 dark:text-white">Interactive Calendar View</p>
                                            <p className="text-sm text-slate-500">Coming soon in the next update</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'history' && (
                                    <div className="flex flex-col items-center py-12 space-y-4 text-slate-400 animate-in fade-in duration-300">
                                        <History size={48} />
                                        <p className="text-sm font-medium">No recent maintenance records found.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Quick Stats & Actions */}
                <div className="space-y-6">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 overflow-hidden relative shadow-xl shadow-blue-200/20 dark:shadow-none transition-transform hover:-rotate-1">
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
                        <h3 className="text-lg font-bold">Quick Verification</h3>
                        <div className="space-y-4">
                            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl flex justify-between items-center border border-white/10">
                                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Serial Number</span>
                                <span className="text-sm font-bold font-mono">{equipment.serial}</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Ownership</span>
                                    <span className="text-xs font-bold text-blue-400">ADMINISTRATOR</span>
                                </div>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="w-full h-full bg-blue-500"></div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-extrabold shadow-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            <Calendar size={18} />
                            REQUEST ACCESS
                        </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-6 shadow-sm group">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Documents</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group/item">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center text-red-500 shadow-sm">PDF</div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-slate-800 dark:text-white group-hover/item:text-blue-600">User Manual</p>
                                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">2.4 MB • PDF</p>
                                    </div>
                                </div>
                                <ExternalLink size={16} className="text-slate-400 group-hover/item:text-blue-600" />
                            </button>
                            <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group/item">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center text-emerald-500 shadow-sm">XLS</div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-slate-800 dark:text-white group-hover/item:text-blue-600">Calibration Data</p>
                                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">120 KB • XLSX</p>
                                    </div>
                                </div>
                                <ExternalLink size={16} className="text-slate-400 group-hover/item:text-blue-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetail;
