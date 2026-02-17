import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

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
        <div className="min-h-screen bg-white dark:bg-slate-950 flex overflow-hidden font-['Outfit']">
            {/* Left Side: Form */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center p-10 md:p-20 relative z-10 bg-white dark:bg-slate-950">
                <div className="max-w-md w-full mx-auto space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
                    <div className="space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] shadow-2xl shadow-blue-500/20 flex items-center justify-center text-white mb-8 group hover:rotate-6 transition-transform duration-500">
                            <LogIn size={40} />
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Access LabOps</h1>
                        <p className="text-slate-500 font-medium text-lg leading-relaxed">Enter your credentials to manage your laboratory resources.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">Work Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="j.doe@university.edu"
                                        className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 rounded-2xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Secret Key</label>
                                    <button type="button" className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest border-b border-blue-200">Reset Access</button>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-14 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 rounded-2xl outline-none transition-all font-bold text-slate-900 dark:text-white"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 dark:hover:text-slate-100 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 ml-1 group cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" id="remember" className="peer sr-only" />
                                <div className="w-5 h-5 border-2 border-slate-200 dark:border-slate-800 rounded-lg peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                            <label htmlFor="remember" className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest cursor-pointer group-hover:text-slate-600 transition-colors">Remember my session</label>
                        </div>

                        <button type="submit" className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[1.25rem] font-black shadow-2xl hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group text-xs uppercase tracking-[0.2em]">
                            Initialize Access
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                            New Researcher? {' '}
                            <Link to="/register" className="text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-2 decoration-blue-100 dark:decoration-blue-900 transition-all">Create Profile</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Hero Imagery */}
            <div className="hidden lg:block lg:w-[60%] relative overflow-hidden bg-slate-900">
                <img
                    src="/modern_lab_equipment_hero.png"
                    alt="Lab Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 scale-110 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                <div className="absolute bottom-20 left-20 right-20 space-y-6">
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em]">
                        Advanced Asset Control
                    </div>
                    <h2 className="text-5xl font-black text-white max-w-xl leading-tight tracking-tight">
                        Streamline your research with precision management.
                    </h2>
                    <div className="h-1.5 w-32 bg-blue-500 rounded-full"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-64 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] space-y-4 animate-in fade-in slide-in-from-top-12 duration-1000 delay-500">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <ArrowRight size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-white uppercase tracking-widest">Real-time status</p>
                            <p className="text-xs text-slate-400 font-bold">12 Active Reservations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
