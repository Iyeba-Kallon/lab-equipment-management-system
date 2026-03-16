import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Register: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] flex overflow-hidden font-['Outfit'] selection:bg-primary/10 selection:text-primary">
            {/* Left Side: Brand Story */}
            <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-24 overflow-hidden border-r border-white/5 bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-indigo-900/40 z-10"></div>
                
                {/* Abstract Visual Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -mr-64 -mt-64 animate-pulse"></div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="relative z-20 space-y-12"
                >
                    <div className="flex items-center gap-4 group">
                        <div className="h-1 w-16 bg-primary rounded-full group-hover:w-24 transition-all duration-500"></div>
                        <span className="text-primary font-black text-xs uppercase tracking-[0.4em]">Infrastructure Registry</span>
                    </div>

                    <h2 className="text-7xl font-black text-white leading-[0.95] tracking-tighter">
                        Architecting <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">The Future.</span>
                    </h2>

                    <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl">
                        Join an elite network of high-performance research facilities managing thermal, optical, and digital instrumentation with absolute precision.
                    </p>

                    <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-white tracking-tighter">12.4k+</p>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Instruments</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-white tracking-tighter">Global</p>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Operational Sync</p>
                        </div>
                    </div>
                </motion.div>

                {/* Vector Decoration */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-5">
                    <ShieldCheck size={500} className="text-white" />
                </div>
            </div>

            {/* Right Side: Onboarding Interface */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-24 bg-white dark:bg-[#0d111a] relative overflow-y-auto custom-scrollbar">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-xl w-full mx-auto space-y-12"
                >
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        <motion.div 
                            whileHover={{ scale: 1.05, rotate: -5 }}
                            className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] shadow-2xl flex items-center justify-center text-white cursor-pointer"
                        >
                            <UserPlus size={40} />
                        </motion.div>
                        <div className="space-y-2">
                            <h1 className="text-4xl font-black text-slate-800 dark:text-white tracking-tighter">Initialize Protocol</h1>
                            <p className="text-slate-500 font-bold">Establish your facility credentials.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Full Nomenclature</label>
                                <div className="relative group/field">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-primary transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Dr. Alexander Vance"
                                        className="w-full pl-14 pr-8 py-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:border-primary/50 focus:ring-8 focus:ring-primary/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">System Alias</label>
                                <div className="relative group/field">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 font-black text-lg group-focus-within/field:text-primary transition-colors">@</div>
                                    <input
                                        type="text"
                                        placeholder="vance_lab"
                                        className="w-full pl-14 pr-8 py-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:border-primary/50 focus:ring-8 focus:ring-primary/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Operational Interface (Email)</label>
                            <div className="relative group/field">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-primary transition-colors" size={20} />
                                <input
                                    type="email"
                                    placeholder="a.vance@central-research.io"
                                    className="w-full pl-14 pr-8 py-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:border-primary/50 focus:ring-8 focus:ring-primary/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Primary Research Hub</label>
                            <div className="relative group/field">
                                <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-primary transition-colors" size={20} />
                                <select className="w-full pl-14 pr-12 py-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:border-primary/50 focus:ring-8 focus:ring-primary/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white appearance-none cursor-pointer">
                                    <option value="">Select Departmental Node</option>
                                    <option value="physics">Applied Quantum Physics</option>
                                    <option value="chemistry">Computational Chemistry</option>
                                    <option value="biology">Genetic Engineering</option>
                                    <option value="engineering">Aerospace Infrastructure</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <ArrowRight size={18} className="rotate-90 opacity-20" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Security Cipher (Password)</label>
                            <div className="relative group/field">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-primary transition-colors" size={20} />
                                <input
                                    type="password"
                                    placeholder="••••••••••••"
                                    className="w-full pl-14 pr-8 py-5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 focus:border-primary/50 focus:ring-8 focus:ring-primary/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full py-6 btn-primary flex items-center justify-center gap-4 group text-[11px] uppercase tracking-[0.3em] mt-8">
                            Establish Connection
                            <ArrowRight size={18} className="translate-y-[1px] group-hover:translate-x-2 transition-transform" />
                        </button>
                    </form>

                    <div className="text-center pt-8">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            Existing Terminal Access? {' '}
                            <Link to="/login" className="text-primary hover:text-indigo-600 font-black border-b-2 border-primary/20 hover:border-primary transition-all ml-2">Sign In Protocol</Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
