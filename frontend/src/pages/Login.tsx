import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mockUser = { id: 1, username: 'admin', email, role: 'admin', department: 'Physics' };
        login(mockUser, 'mock-jwt-token');
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] flex overflow-hidden font-['Outfit'] selection:bg-primary/10 selection:text-primary">
            {/* Left Side: Dynamic Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-center p-24 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-900/40 z-10"></div>
                    <div className="absolute h-full w-full opacity-30">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-20 space-y-12"
                >
                    <div className="flex items-center gap-4 group">
                        <div className="w-16 h-1 bg-primary rounded-full group-hover:w-24 transition-all duration-500"></div>
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em]">Integrated Infrastructure</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-7xl font-black text-white leading-[0.95] tracking-tighter">
                            Precision <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Control.</span>
                        </h1>
                        <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg">
                            Elevate your laboratory narrative with an enterprise-grade ecosystem for high-fidelity asset management.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5 max-w-sm">
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-white tracking-tighter">99.9%</p>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Efficiency Rating</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-white tracking-tighter">Real-time</p>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Telemetry Sync</p>
                        </div>
                    </div>
                </motion.div>

                {/* Background Patterns */}
                <div className="absolute bottom-0 right-0 p-12 opacity-10">
                    <Activity size={300} className="text-white" />
                </div>
            </div>

            {/* Right Side: Authentication Interface */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-24 bg-white dark:bg-[#0d111a] relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-md w-full mx-auto space-y-12"
                >
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        <motion.div 
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] shadow-2xl flex items-center justify-center text-white cursor-pointer"
                        >
                            <ShieldCheck size={40} />
                        </motion.div>
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black text-slate-800 dark:text-white tracking-tighter">Welcome Back</h2>
                            <p className="text-slate-500 font-bold">Secure terminal access required.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Network Identity</label>
                                <div className="relative group/field">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-primary transition-colors" size={18} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="researcher@central-core.io"
                                        className="w-full pl-16 pr-8 py-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:border-primary/50 focus:ring-8 focus:ring-primary/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">Access Cipher</label>
                                    <button type="button" className="text-[10px] font-black text-primary hover:text-indigo-600 uppercase tracking-widest transition-all">Reset Sync</button>
                                </div>
                                <div className="relative group/field">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-primary transition-colors" size={18} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-16 pr-16 py-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:border-primary/50 focus:ring-8 focus:ring-primary/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full py-6 btn-primary flex items-center justify-center gap-4 group text-[11px] uppercase tracking-[0.3em]">
                            Authorize Session
                            <ArrowRight size={18} className="translate-y-[1px] group-hover:translate-x-2 transition-transform" />
                        </button>
                    </form>

                    <div className="text-center pt-6">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
                            New Facility Personnel? {' '}
                            <Link to="/register" className="text-primary hover:text-indigo-600 font-black border-b-2 border-primary/20 hover:border-primary transition-all ml-2">Register Hierarchy</Link>
                        </p>
                    </div>
                </motion.div>

                {/* Version & Metadata */}
                <div className="absolute bottom-8 left-0 right-0 text-center lg:text-left lg:px-24">
                    <p className="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.5em]">LabOps Premium • Enterprise Grade OS</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
