import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
import { Camera, X, RefreshCw, AlertCircle } from 'lucide-react';

const Scanner: React.FC = () => {
    const navigate = useNavigate();
    const [scanResult, setScanResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "reader",
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
                aspectRatio: 1.0
            },
            /* verbose= */ false
        );

        scanner.render(
            (decodedText) => {
                setScanResult(decodedText);
                scanner.clear();

                if (decodedText.startsWith('labops://equipment/')) {
                    const equipmentId = decodedText.split('/').pop();
                    if (equipmentId) {
                        navigate(`/inventory/${equipmentId}`);
                    }
                } else {
                    setError("Invalid QR code format. Please scan a LabOps asset tag.");
                }
            },
            () => { }
        );

        return () => {
            scanner.clear().catch(error => console.error("Failed to clear scanner", error));
        };
    }, [navigate]);

    return (
        <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 font-['Outfit']">
            <div className="text-center space-y-4">
                <div className="inline-flex px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100 dark:border-blue-800 mb-2">Neural Vision</div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase">Asset Scanner</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Align your device to scan encrypted LabOps asset tags.</p>
            </div>

            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden aspect-square flex flex-col items-center justify-center group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600"></div>
                <div id="reader" className="w-full h-full rounded-[2.5rem] overflow-hidden"></div>

                {!scanResult && (
                    <div className="absolute inset-0 pointer-events-none border-[4rem] border-slate-950/40 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="w-72 h-72 border-4 border-blue-500 rounded-[2.5rem] relative">
                            <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-8 border-l-8 border-white -translate-x-2 -translate-y-2 rounded-tl-2xl"></div>
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-8 border-r-8 border-white translate-x-2 -translate-y-2 rounded-tr-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-8 border-l-8 border-white -translate-x-2 translate-y-2 rounded-bl-2xl"></div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-8 border-r-8 border-white translate-x-2 translate-y-2 rounded-br-2xl"></div>
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50 p-8 rounded-[2rem] flex items-center gap-6 animate-in shake duration-500">
                    <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-2xl shadow-rose-500/30">
                        <AlertCircle size={32} />
                    </div>
                    <div className="flex-1 space-y-1">
                        <p className="text-rose-800 dark:text-rose-200 font-black uppercase text-[10px] tracking-widest leading-none">Scanning Protocol Failure</p>
                        <p className="text-rose-600 dark:text-rose-300 text-lg font-bold">{error}</p>
                    </div>
                    <button
                        onClick={() => { setError(null); window.location.reload(); }}
                        className="p-4 bg-white dark:bg-slate-800 text-rose-600 rounded-2xl hover:bg-rose-500 hover:text-white transition-all shadow-sm border border-rose-100 dark:border-rose-800"
                    >
                        <RefreshCw size={24} />
                    </button>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex items-center gap-6 group hover:border-blue-500/30 transition-all duration-500">
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                        <Camera size={32} />
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Sensor</p>
                        <h4 className="font-black text-slate-900 dark:text-white uppercase text-sm">Optical Input Control</h4>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/inventory')}
                    className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-8 rounded-[2.5rem] flex items-center gap-6 hover:scale-[1.02] transition-all group overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500 rounded-full blur-[60px] opacity-10 -mr-16 -mt-16 group-hover:opacity-20 transition-opacity"></div>
                    <div className="w-16 h-16 bg-white/10 dark:bg-slate-100 rounded-2xl flex items-center justify-center group-hover:rotate-90 transition-transform relative z-10">
                        <X size={32} />
                    </div>
                    <div className="text-left relative z-10 space-y-1">
                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Abort Process</p>
                        <h4 className="font-black uppercase text-sm">Deactivate Vision</h4>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Scanner;
