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
        <div className="min-h-screen bg-white dark:bg-slate-950 flex overflow-hidden font-['Outfit']">
            {/* Left Side: Hero Imagery */}
            <div className="hidden lg:block lg:w-[45%] relative overflow-hidden bg-slate-900">
                <img
                    src="/modern_lab_equipment_hero.png"
                    alt="Lab Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 scale-110 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-20 left-20 right-20 space-y-8">
                    <div className="w-20 h-2 bg-blue-500 rounded-full"></div>
                    <h2 className="text-5xl font-black text-white leading-tight tracking-tight">
                        Powering the next generation of discovery.
                    </h2>
                    <p className="text-slate-300 text-lg font-medium max-w-md"> Join a global network of researchers managing over 10,000 high-performance laboratory assets every day.</p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center p-10 md:p-20 relative z-10 bg-white dark:bg-slate-950 overflow-y-auto">
                <div className="max-w-2xl w-full mx-auto space-y-10 animate-in fade-in slide-in-from-right-8 duration-1000">
                    <div className="space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] shadow-2xl shadow-blue-500/20 flex items-center justify-center text-white mb-8 group hover:rotate-6 transition-transform duration-500">
                            <UserPlus size={40} />
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Join Research Network</h1>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed">Create your researcher profile to begin reserving equipment.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Dr. John Doe"
                                        className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 rounded-2xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Username</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="johndoe_lab"
                                        className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 rounded-2xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Institutional Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                <input
                                    type="email"
                                    placeholder="j.doe@university.edu"
                                    className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 rounded-2xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Primary Department</label>
                            <div className="relative group">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                <select className="w-full pl-12 pr-10 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 rounded-2xl outline-none transition-all font-bold text-slate-900 dark:text-white appearance-none">
                                    <option value="">Select Division</option>
                                    <option value="physics">Applied Physics</option>
                                    <option value="chemistry">Advanced Chemistry</option>
                                    <option value="biology">Molecular Biology</option>
                                    <option value="engineering">Structural Engineering</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <ArrowRight size={16} className="rotate-90" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Access Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 rounded-2xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-[1.25rem] font-black shadow-2xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group text-xs uppercase tracking-[0.2em] mt-10">
                            Create Researcher Profile
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                            Authorized Already? {' '}
                            <Link to="/login" className="text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-2 decoration-blue-100 dark:decoration-blue-900 transition-all font-black">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
