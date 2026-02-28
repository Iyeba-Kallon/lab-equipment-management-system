import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, Building2, ArrowRight } from 'lucide-react';

const Register: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex overflow-hidden font-['Outfit'] select-none">
            {/* Left Side: Hero Imagery */}
            <div className="hidden lg:block lg:w-[45%] relative overflow-hidden bg-slate-900 border-r border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-900/40 z-10"></div>
                <img
                    src="/modern_lab_equipment_hero.png"
                    alt="Lab Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-20"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-24 z-30 space-y-12">
                    <div className="space-y-4 max-w-xl animate-reveal">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-0.5 w-16 bg-blue-500 rounded-full"></span>
                            <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em]">Infrastructure Registry</span>
                        </div>
                        <h2 className="text-6xl font-black text-white leading-[1.05] tracking-tighter">
                            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">future</span> of research.
                        </h2>
                        <p className="text-slate-400 text-xl font-medium leading-relaxed">
                            Join the elite network of institutions managing high-performance thermal, optical, and digital instrumentation units.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/10 animate-reveal" style={{ animationDelay: '200ms' }}>
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-white tracking-tighter">12.4k+</p>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Instruments</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-black text-white tracking-tighter">99.8%</p>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">System Integrity</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center p-10 md:p-32 relative z-10 bg-white dark:bg-slate-950 overflow-y-auto page-reveal">
                <div className="max-w-xl w-full mx-auto space-y-12">
                    <div className="space-y-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2.5rem] shadow-2xl shadow-blue-500/25 flex items-center justify-center text-white mb-10 interactive-hover group">
                            <UserPlus size={44} className="group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Initialize Protocol</h1>
                            <p className="text-slate-500 font-semibold text-xl leading-relaxed">Establish your credentials within the LEMS ecosystem.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Full Nomenclature</label>
                                <div className="relative group/field">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Dr. Alexander Vance"
                                        className="w-full pl-14 pr-8 py-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500/50 focus:ring-8 focus:ring-blue-500/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">System Alias</label>
                                <div className="relative group/field">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 font-black text-lg group-focus-within/field:text-blue-600 transition-colors">@</div>
                                    <input
                                        type="text"
                                        placeholder="vance_lab"
                                        className="w-full pl-14 pr-8 py-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500/50 focus:ring-8 focus:ring-blue-500/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Operational Interface (Email)</label>
                            <div className="relative group/field">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-blue-600 transition-colors" size={20} />
                                <input
                                    type="email"
                                    placeholder="a.vance@central-research.io"
                                    className="w-full pl-14 pr-8 py-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500/50 focus:ring-8 focus:ring-blue-500/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Primary Research Hub</label>
                            <div className="relative group/field">
                                <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-blue-600 transition-colors" size={20} />
                                <select className="w-full pl-14 pr-12 py-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500/50 focus:ring-8 focus:ring-blue-500/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white appearance-none cursor-pointer">
                                    <option value="">Select Departmental Node</option>
                                    <option value="physics">Applied Quantum Physics</option>
                                    <option value="chemistry">Computational Chemistry</option>
                                    <option value="biology">Genetic Engineering</option>
                                    <option value="engineering">Aerospace Infrastructure</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <ArrowRight size={18} className="rotate-90 opacity-50" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Security Cipher (Password)</label>
                            <div className="relative group/field">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/field:text-blue-600 transition-colors" size={20} />
                                <input
                                    type="password"
                                    placeholder="••••••••••••"
                                    className="w-full pl-14 pr-8 py-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-blue-500/50 focus:ring-8 focus:ring-blue-500/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full py-6 bg-blue-600 text-white rounded-3xl font-black shadow-2xl shadow-blue-500/25 hover:bg-blue-700 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 group text-[11px] uppercase tracking-[0.3em] mt-12">
                            Establish Connection
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="text-center pt-8">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            Existing Terminal Access? {' '}
                            <Link to="/login" className="text-blue-600 hover:text-blue-700 transition-all font-black border-b-2 border-blue-600/10 hover:border-blue-600 pb-0.5 ml-2">Sign In Protocol</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Register;
