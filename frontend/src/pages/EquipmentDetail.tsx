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
import { useModal } from '../context/ModalContext';

const EquipmentDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { openBookingModal } = useModal();
    const [activeTab, setActiveTab] = useState('overview');

    // Mock data
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
        description: 'High-performance oscilloscope with 2.5 GHz bandwidth and 10 GS/s sample rate.',
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
        <div className="max-w-6xl mx-auto space-y-8 page-fade">
            <Link to="/inventory" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
                <ArrowLeft size={18} />
                <span className="text-sm font-medium">Back to Inventory</span>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Image and Header */}
                <div className="md:col-span-8 space-y-8">
                    <div className="standard-card overflow-hidden">
                        <div className="aspect-video w-full">
                            <img src={equipment.image} alt={equipment.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{equipment.name}</h1>
                                    <p className="text-slate-500">{equipment.manufacturer} • {equipment.model}</p>
                                </div>
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-full text-xs font-semibold">
                                    {equipment.status}
                                </span>
                            </div>

                            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                                            ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm'
                                            : 'text-slate-500 hover:text-slate-700'
                                            }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="py-4">
                                {activeTab === 'overview' && (
                                    <div className="space-y-6 animate-fade-in">
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                            {equipment.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                                                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                                                    <MapPin size={16} className="text-blue-500" />
                                                    {equipment.location}
                                                </div>
                                            </div>
                                            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Calibration</p>
                                                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                                                    <ShieldCheck size={16} className="text-emerald-500" />
                                                    Valid until {equipment.calibration.nextDate}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'specs' && (
                                    <div className="standard-card overflow-hidden animate-fade-in">
                                        <table className="w-full text-left">
                                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                                {Object.entries(equipment.specs).map(([key, value]) => (
                                                    <tr key={key} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                        <td className="px-6 py-4 text-sm font-medium text-slate-500 w-1/3">{key}</td>
                                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions Sidebar */}
                <div className="md:col-span-4 space-y-6">
                    <div className="standard-card p-6 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold">Actions</h3>
                            <p className="text-sm text-slate-500">Resource allocation and control hub.</p>
                        </div>
                        <div className="space-y-3">
                            <button
                                onClick={openBookingModal}
                                className="w-full btn-primary flex items-center justify-center gap-2 py-3"
                            >
                                <Calendar size={18} />
                                Reserve Equipment
                            </button>
                            <button
                                className="w-full btn-secondary py-3"
                                onClick={() => alert('Maintenance report downloaded.')}
                            >
                                Download Specs (PDF)
                            </button>
                        </div>
                    </div>

                    <div className="standard-card p-6 flex flex-col items-center gap-4 text-center">
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-inner">
                            <QRCodeCanvas
                                value={`labops://equipment/${id}`}
                                size={120}
                                level="H"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-bold flex items-center justify-center gap-2">
                                <QrCode size={16} /> Asset Tag
                            </p>
                            <p className="text-xs text-slate-500 mt-1">Scan for mobile diagnostics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetail;
