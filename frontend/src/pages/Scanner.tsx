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
                // Success callback
                setScanResult(decodedText);
                scanner.clear();

                // Parse the custom scheme labops://equipment/:id
                if (decodedText.startsWith('labops://equipment/')) {
                    const equipmentId = decodedText.split('/').pop();
                    if (equipmentId) {
                        navigate(`/inventory/${equipmentId}`);
                    }
                } else {
                    setError("Invalid QR code format. Please scan a LabOps asset tag.");
                }
            },
            () => {
                // Error callback (ignoring for cleaner UX unless critical)
                // console.warn(errorMessage);
            }
        );

        return () => {
            scanner.clear().catch(error => console.error("Failed to clear scanner", error));
        };
    }, [navigate]);

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-2">
                <h1 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Asset Scanner</h1>
                <p className="text-sm text-slate-500 font-medium font-inter">Point your camera at a LabOps QR code tag</p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] border-4 border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden aspect-square flex flex-col items-center justify-center group">
                <div id="reader" className="w-full h-full rounded-[2rem] overflow-hidden"></div>

                {!scanResult && (
                    <div className="absolute inset-0 pointer-events-none border-[3rem] border-black/40 flex items-center justify-center">
                        <div className="w-64 h-64 border-4 border-blue-500 rounded-3xl relative">
                            <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white -translate-x-1 -translate-y-1 rounded-tl-lg"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white translate-x-1 -translate-y-1 rounded-tr-lg"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white -translate-x-1 translate-y-1 rounded-bl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white translate-x-1 translate-y-1 rounded-br-lg"></div>
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/50 p-6 rounded-3xl flex items-center gap-4 animate-in shake duration-500">
                    <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-200/50 dark:shadow-none">
                        <AlertCircle size={24} />
                    </div>
                    <div className="flex-1">
                        <p className="text-red-800 dark:text-red-200 font-bold uppercase text-[10px] tracking-widest mb-1">Scanning Error</p>
                        <p className="text-red-600 dark:text-red-300 text-sm font-bold">{error}</p>
                    </div>
                    <button
                        onClick={() => { setError(null); window.location.reload(); }}
                        className="p-3 bg-white dark:bg-slate-800 text-red-600 rounded-xl hover:bg-red-50 transition-colors shadow-sm"
                    >
                        <RefreshCw size={20} />
                    </button>
                </div>
            )}

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex items-center gap-4 group hover:border-blue-200 transition-all">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Camera size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Method</p>
                        <h4 className="font-black text-slate-800 dark:text-white uppercase text-xs">Direct Camera</h4>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/inventory')}
                    className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-6 rounded-[2rem] flex items-center gap-4 hover:scale-[1.02] transition-all group"
                >
                    <div className="w-12 h-12 bg-white/10 dark:bg-slate-100 rounded-2xl flex items-center justify-center group-hover:rotate-90 transition-transform">
                        <X size={24} />
                    </div>
                    <div className="text-left">
                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Cancel</p>
                        <h4 className="font-black uppercase text-xs">Exit Scanner</h4>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Scanner;
