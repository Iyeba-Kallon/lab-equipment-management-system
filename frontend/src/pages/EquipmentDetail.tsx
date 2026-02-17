import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft,
    MapPin,
    Settings,
    History,
    Calendar,
    FileText,
    ExternalLink,
    ShieldCheck,
    QrCode
} from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

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
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
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
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Link to="/inventory" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-all group font-bold px-4 py-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs uppercase tracking-widest">Back to Inventory</span>
            </Link>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                {/* Left Column: Image and Main Info */}
                <div className="xl:col-span-2 space-y-10">
                    <div className="premium-card rounded-[3rem] overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/50">
                        <div className="aspect-[21/9] w-full relative group overflow-hidden">
                            <img src={equipment.image} alt={equipment.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-10">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">{equipment.category}</span>
                                        <span className="px-3 py-1 bg-emerald-500 text-white rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/20">{equipment.status}</span>
                                    </div>
                                    <h1 className="text-4xl font-extrabold text-white leading-tight tracking-tight">{equipment.name}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="p-10">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <p className="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-3 uppercase tracking-widest text-xs">
                                        {equipment.manufacturer} <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {equipment.model}
                                    </p>
                                    <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-blue-500" />
                                            {equipment.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button className="flex-1 lg:flex-none px-10 py-4 bg-blue-600 text-white rounded-[1.25rem] font-black tracking-wide shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase">
                                        Reserve Now
                                    </button>
                                    <button className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-[1.25rem] hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm">
                                        <Calendar size={22} />
                                    </button>
                                </div>
                            </div>

                            {/* Tabs Navigation */}
                            <div className="flex gap-2 border-b border-slate-100 dark:border-slate-800 mt-16 overflow-x-auto no-scrollbar scroll-smooth">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-3 px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all border-b-2 whitespace-nowrap relative ${activeTab === tab.id
                                            ? 'border-blue-600 text-blue-600'
                                            : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                            }`}
                                    >
                                        <span className={`${activeTab === tab.id ? 'scale-110' : 'scale-100'} transition-transform`}>{tab.icon}</span>
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <div className="absolute inset-0 bg-blue-50/30 dark:bg-blue-900/10 rounded-t-xl -z-10 animate-in fade-in zoom-in-95 duration-500"></div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="py-12">
                                {activeTab === 'overview' && (
                                    <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-500">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">Equipment Description</h4>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl text-lg font-medium">{equipment.description}</p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="flex gap-5 p-6 rounded-[2rem] bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group hover:shadow-lg transition-all duration-500">
                                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 shadow-sm shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                                                    <MapPin size={24} />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Storage & Lab Bin</p>
                                                    <p className="text-base font-bold text-slate-900 dark:text-white leading-tight">{equipment.location}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-5 p-6 rounded-[2rem] bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group hover:shadow-lg transition-all duration-500">
                                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-emerald-600 shadow-sm shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all">
                                                    <ShieldCheck size={24} />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Calibration Status</p>
                                                    <p className="text-base font-bold text-slate-900 dark:text-white leading-tight">{equipment.calibration.status} <span className="text-xs font-medium text-slate-400 underline decoration-emerald-200 underline-offset-4">Until {equipment.calibration.nextDate}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'specs' && (
                                    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                                        <div className="rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
                                            <table className="w-full text-left">
                                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                                    {Object.entries(equipment.specs).map(([key, value]) => (
                                                        <tr key={key} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                                                            <td className="px-10 py-6 text-sm font-black text-slate-400 uppercase tracking-widest w-1/3 group-hover:text-blue-600 transition-colors">{key}</td>
                                                            <td className="px-10 py-6 text-base font-bold text-slate-800 dark:text-white">{value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'availability' && (
                                    <div className="p-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                                        <div className="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300">
                                            <Calendar size={40} />
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Booking Schedule</p>
                                            <p className="text-slate-500 max-w-xs font-medium">Interactive timeline and reservation calendar view is currently under maintenance.</p>
                                        </div>
                                        <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-all">Contact Admin</button>
                                    </div>
                                )}

                                {activeTab === 'history' && (
                                    <div className="flex flex-col items-center py-20 space-y-6 text-slate-400 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">
                                            <History size={40} />
                                        </div>
                                        <div className="text-center space-y-1">
                                            <p className="text-lg font-bold text-slate-900 dark:text-white">Clean History</p>
                                            <p className="text-xs uppercase tracking-widest font-black">No recent maintenance records found.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Quick Stats & Actions */}
                <div className="space-y-8">
                    <div className="bg-slate-900 border border-slate-800 text-white rounded-[3rem] p-10 space-y-8 overflow-hidden relative shadow-2xl transition-all hover:shadow-blue-500/10 group">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-600 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative space-y-6">
                            <h3 className="text-xl font-bold tracking-tight">Quick Verification</h3>
                            <div className="space-y-4">
                                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl flex justify-between items-center border border-white/10 group-hover:border-white/20 transition-all">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Serial Number</span>
                                    <span className="text-sm font-bold font-mono text-blue-400">{equipment.serial}</span>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-4 group-hover:border-white/20 transition-all">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Health</span>
                                        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Optimized</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="w-3/4 h-full bg-gradient-to-r from-blue-600 to-emerald-400 rounded-full animate-pulse-slow"></div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-5 bg-white text-slate-900 rounded-[1.25rem] font-black shadow-lg hover:bg-slate-50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest">
                                <Calendar size={18} className="text-blue-600" />
                                Request Access
                            </button>
                        </div>
                    </div>

                    <div className="premium-card rounded-[3rem] p-10 space-y-8 group relative overflow-hidden">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                                <QrCode size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Asset Tag</h3>
                        </div>
                        <div className="relative">
                            <div className="flex flex-col items-center gap-6 p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-700 group-hover:border-blue-500/30 transition-all">
                                <div className="p-6 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:scale-105 transition-transform duration-500 border border-slate-100">
                                    <QRCodeCanvas
                                        value={`labops://equipment/${id}`}
                                        size={160}
                                        level="H"
                                        includeMargin={false}
                                        fgColor="#1e293b"
                                    />
                                </div>
                                <div className="space-y-2 text-center">
                                    <p className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-widest">SCAN TO SYNC</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-[180px] leading-relaxed">
                                        Verify this asset on mobile device to unlock scanner features
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="premium-card rounded-[3rem] p-10 space-y-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Documents</h3>
                            <button className="text-xs font-black text-blue-600 uppercase tracking-widest hover:underline">View All</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'User Manual', type: 'PDF', size: '2.4 MB', color: 'text-red-500', icon: 'PDF' },
                                { name: 'Safety Guide', type: 'PDF', size: '1.2 MB', color: 'text-amber-500', icon: 'DOC' },
                                { name: 'Calibration Report', type: 'XLSX', size: '120 KB', color: 'text-emerald-500', icon: 'XLS' }
                            ].map((doc, idx) => (
                                <button key={idx} className="w-full flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800 rounded-[1.5rem] hover:bg-white dark:hover:bg-slate-700 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700 group/item hover:shadow-md">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-[11px] font-black ${doc.color} shadow-sm border border-slate-100 dark:border-slate-800`}>
                                            {doc.icon}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 transition-colors">{doc.name}</p>
                                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-0.5">{doc.size} • {doc.type}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 group-hover/item:text-blue-600 group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-900/30 transition-all shadow-sm">
                                        <ExternalLink size={14} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetail;
