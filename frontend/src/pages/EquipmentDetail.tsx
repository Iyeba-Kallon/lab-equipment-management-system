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
        <div className="space-y-12 page-reveal">
            <Link to="/inventory" className="inline-flex items-center gap-3 text-slate-500 hover:text-blue-600 transition-all group font-black px-6 py-3.5 bg-white dark:bg-slate-900 rounded-[1.25rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/20 active:scale-95">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] uppercase tracking-[0.3em]">Back to Inventory</span>
            </Link>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                {/* Left Column: Image and Main Info */}
                <div className="xl:col-span-2 space-y-12">
                    <div className="premium-card rounded-[3rem] overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/80 hover:border-blue-500/20 transition-all duration-500 shadow-2xl">
                        <div className="aspect-[21/9] w-full relative group overflow-hidden">
                            <img src={equipment.image} alt={equipment.name} className="w-full h-full object-cover transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-12">
                                <div className="space-y-6 animate-reveal">
                                    <div className="flex items-center gap-3">
                                        <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-3xl text-white rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] shadow-2xl border border-white/10">{equipment.category}</span>
                                        <span className="px-4 py-2 bg-emerald-500/90 backdrop-blur-3xl text-white rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] shadow-2xl border border-white/10">{equipment.status}</span>
                                    </div>
                                    <h1 className="text-5xl font-black text-white leading-[1.1] tracking-tighter">{equipment.name}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="p-12">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                                <div className="space-y-3">
                                    <p className="text-slate-400 dark:text-slate-500 font-black flex items-center gap-4 uppercase tracking-[0.3em] text-[10px]">
                                        {equipment.manufacturer} <span className="w-2 h-2 bg-blue-500/50 rounded-full"></span> {equipment.model}
                                    </p>
                                    <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-blue-500 opacity-60" />
                                            {equipment.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5">
                                    <button className="flex-1 lg:flex-none px-12 py-5 bg-blue-600 text-white rounded-[1.5rem] font-black tracking-[0.2em] shadow-2xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all text-[11px] uppercase group">
                                        Establish Booking
                                        <ArrowRight size={14} className="inline-block ml-3 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="p-5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-[1.5rem] hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm border border-slate-100 dark:border-slate-800 active:scale-95">
                                        <Calendar size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Tabs Navigation */}
                            <div className="flex gap-4 border-b border-slate-100 dark:border-slate-800/50 mt-20 overflow-x-auto no-scrollbar scroll-smooth">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-4 px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] transition-all border-b-2 whitespace-nowrap relative ${activeTab === tab.id
                                            ? 'border-blue-600 text-blue-600'
                                            : 'border-transparent text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                            }`}
                                    >
                                        <span className={`${activeTab === tab.id ? 'scale-110' : 'scale-100'} transition-transform duration-500`}>{tab.icon}</span>
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 rounded-t-3xl -z-10 animate-reveal"></div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="py-16">
                                {activeTab === 'overview' && (
                                    <div className="space-y-12 animate-in fade-in slide-in-from-left-6 duration-700">
                                        <div className="space-y-6">
                                            <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Asset Summary</h4>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl text-xl font-semibold tracking-tight">{equipment.description}</p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                            <div className="flex gap-6 p-8 rounded-[2.5rem] bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100 dark:border-white/5 interactive-hover group">
                                                <div className="w-16 h-16 rounded-[1.25rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 shadow-2xl shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                                    <MapPin size={28} />
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">Operational Node</p>
                                                    <p className="text-lg font-black text-slate-900 dark:text-white leading-tight tracking-tight">{equipment.location}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 p-8 rounded-[2.5rem] bg-slate-50/50 dark:bg-slate-800/20 border border-slate-100 dark:border-white/5 interactive-hover group">
                                                <div className="w-16 h-16 rounded-[1.25rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-emerald-500 shadow-2xl shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                                    <ShieldCheck size={28} />
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">Integrity Validation</p>
                                                    <div className="space-y-1">
                                                        <p className="text-lg font-black text-slate-900 dark:text-white leading-tight tracking-tight">{equipment.calibration.status}</p>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest underline decoration-emerald-200 decoration-4 underline-offset-4">Expires {equipment.calibration.nextDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'specs' && (
                                    <div className="animate-in fade-in slide-in-from-left-6 duration-700">
                                        <div className="rounded-[3rem] border border-slate-100 dark:border-white/5 overflow-hidden bg-white dark:bg-slate-900/50 shadow-2xl">
                                            <table className="w-full text-left">
                                                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                                    {Object.entries(equipment.specs).map(([key, value]) => (
                                                        <tr key={key} className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all group">
                                                            <td className="px-12 py-8 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] w-1/3 group-hover:text-blue-600 transition-colors">{key}</td>
                                                            <td className="px-12 py-8 text-lg font-black text-slate-800 dark:text-white tracking-tight">{value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'availability' && (
                                    <div className="p-24 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[4rem] flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in-95 duration-700">
                                        <div className="w-24 h-24 rounded-[2rem] bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center text-slate-300 dark:text-slate-600 shadow-2xl">
                                            <Calendar size={48} />
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Telemetry Pipeline Offline</p>
                                            <p className="text-slate-500 max-w-md font-semibold text-lg leading-relaxed">The real-time resource allocation engine is undergoing routine optimization protocols.</p>
                                        </div>
                                        <button className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl active:scale-95">Signal Administrator</button>
                                    </div>
                                )}

                                {activeTab === 'history' && (
                                    <div className="flex flex-col items-center py-24 space-y-8 text-slate-400 animate-in fade-in slide-in-from-top-6 duration-700">
                                        <div className="w-24 h-24 rounded-[2rem] bg-slate-50 dark:bg-slate-800/40 flex items-center justify-center shadow-inner">
                                            <History size={48} />
                                        </div>
                                        <div className="text-center space-y-2">
                                            <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Archive Integrity Confirmed</p>
                                            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-500">Zero maintenance incidents recorded.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Quick Stats & Actions */}
                <div className="space-y-12">
                    <div className="bg-slate-950 border border-white/5 text-white rounded-[3.5rem] p-12 space-y-10 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all hover:shadow-blue-500/20 group">
                        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                        <div className="relative space-y-8">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-black tracking-tight">Identity Hub</h3>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Asset Security Parameters</p>
                            </div>
                            <div className="space-y-5">
                                <div className="bg-white/5 backdrop-blur-3xl p-6 rounded-[1.5rem] flex justify-between items-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Serial ID</span>
                                    <span className="text-sm font-black font-mono text-blue-400 tracking-wider">{equipment.serial}</span>
                                </div>
                                <div className="bg-white/5 backdrop-blur-3xl p-6 rounded-[1.5rem] border border-white/10 space-y-5 group-hover:border-white/20 transition-all duration-500">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Core Stability</span>
                                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.3em] animate-pulse">Nominal</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 rounded-full transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"></div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-6 bg-white text-slate-950 rounded-3xl font-black shadow-2xl hover:bg-slate-50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 uppercase text-[10px] tracking-[0.3em]">
                                <Calendar size={20} className="text-blue-600" />
                                Reserve Terminal
                            </button>
                        </div>
                    </div>

                    <div className="premium-card rounded-[3.5rem] p-12 space-y-10 group relative overflow-hidden bg-white/50 dark:bg-slate-900/50 hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                <QrCode size={32} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Digital Node</h3>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Sync Interface</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="flex flex-col items-center gap-8 p-10 bg-slate-50/80 dark:bg-slate-800/80 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800 group-hover:border-blue-500/30 transition-all duration-700">
                                <div className="p-8 bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none group-hover:scale-105 transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) border border-slate-100 select-none">
                                    <QRCodeCanvas
                                        value={`labops://equipment/${id}`}
                                        size={180}
                                        level="H"
                                        includeMargin={false}
                                        fgColor="#0f172a"
                                    />
                                </div>
                                <div className="space-y-3 text-center">
                                    <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.4em]">Establish Handshake</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-[220px] leading-relaxed opacity-70">
                                        Scan encrypted matrix to synchronize mobile telemetry and diagnostics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="premium-card rounded-[3.5rem] p-12 space-y-10 shadow-xl">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Documentation</h3>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Library Manifest</p>
                            </div>
                            <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Vault Access</button>
                        </div>
                        <div className="space-y-5">
                            {[
                                { name: 'User Manual', type: 'PDF', size: '2.4 MB', color: 'text-rose-500', icon: 'PDF', bg: 'bg-rose-50/50 dark:bg-rose-900/10' },
                                { name: 'Safety Protocols', type: 'PDF', size: '1.2 MB', color: 'text-amber-500', icon: 'DOC', bg: 'bg-amber-50/50 dark:bg-amber-900/10' },
                                { name: 'Validation Records', type: 'XLSX', size: '120 KB', color: 'text-emerald-500', icon: 'XLS', bg: 'bg-emerald-50/50 dark:bg-emerald-900/10' }
                            ].map((doc, idx) => (
                                <button key={idx} className="w-full flex items-center justify-between p-6 bg-slate-50/50 dark:bg-slate-800/50 rounded-[2rem] hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700 group/item hover:shadow-2xl active:scale-[0.98]">
                                    <div className="flex items-center gap-5">
                                        <div className={`w-14 h-14 ${doc.bg} rounded-[1.25rem] flex items-center justify-center text-[11px] font-black ${doc.color} shadow-sm border border-white/50 dark:border-white/5`}>
                                            {doc.icon}
                                        </div>
                                        <div className="text-left space-y-1">
                                            <p className="text-base font-black text-slate-900 dark:text-white group-hover/item:text-blue-600 transition-colors tracking-tight">{doc.name}</p>
                                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest opacity-70">{doc.size} <span className="mx-1">•</span> {doc.type}</p>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-300 group-hover/item:text-blue-600 group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-900/50 transition-all shadow-sm border border-slate-100 dark:border-slate-800">
                                        <ExternalLink size={16} />
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

const ArrowRight = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);


export default EquipmentDetail;
