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
        <div className="min-h-screen bg-white dark:bg-slate-950 flex overflow-hidden font-['Outfit'] selection:bg-blue-500/10 selection:text-blue-600">
            {/* Left Side: Form */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center p-10 md:p-24 relative z-10 bg-white dark:bg-slate-950">
                <div className="max-w-md w-full mx-auto space-y-12 animate-reveal">
                    <div className="space-y-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] shadow-2xl shadow-blue-500/30 flex items-center justify-center text-white mb-10 group hover:rotate-6 hover:scale-110 transition-all duration-500 active:scale-95 cursor-pointer">
                            <LogIn size={36} />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">
                                Quality <span className="text-blue-600">Control</span> Starts Here.
                            </h1>
                            <p className="text-slate-500 font-semibold text-lg leading-relaxed max-w-sm">Manage your laboratory assets with precision and ease.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] ml-1">Academic Credentials</label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="researcher@university.edu"
                                        className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500/50 focus:ring-8 focus:ring-blue-500/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">Identity Verification</label>
                                    <button type="button" className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest border-b-2 border-blue-500/20 hover:border-blue-500 transition-all">Forgot Key?</button>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={18} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-14 pr-16 py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 focus:border-blue-500/50 focus:ring-8 focus:ring-blue-500/5 rounded-3xl outline-none transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-blue-600 transition-colors bg-white dark:bg-slate-800 p-1.5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 active:scale-90"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 ml-1 group cursor-pointer w-fit">
                            <div className="relative">
                                <input type="checkbox" id="remember" className="peer sr-only" />
                                <div className="w-5 h-5 border-2 border-slate-200 dark:border-slate-800 rounded-lg peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center peer-active:scale-90">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                            <label htmlFor="remember" className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest cursor-pointer group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">Maintain Active Session</label>
                        </div>

                        <button type="submit" className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-3xl font-black shadow-2xl hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group text-[11px] uppercase tracking-[0.3em]">
                            Initialize Session
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                    </form>

                    <div className="text-center pt-8">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            New Laboratory Staff? {' '}
                            <Link to="/register" className="text-blue-600 hover:text-blue-700 underline underline-offset-8 decoration-2 decoration-blue-500/20 hover:decoration-blue-500 transition-all">Create Profile</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Hero Imagery */}
            <div className="hidden lg:block lg:w-[55%] relative overflow-hidden bg-slate-950">
                <img
                    src="/modern_lab_equipment_hero.png"
                    alt="Lab Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 scale-100 animate-pulse-slow object-[center_right]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-indigo-900/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.3),transparent_70%)]"></div>

                <div className="absolute top-0 right-0 p-16 flex flex-col items-end text-right space-y-4">
                    <div className="px-5 py-2.5 bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-[0.4em]">
                        v2.4.0 • Enterprise
                    </div>
                </div>

                <div className="absolute bottom-20 left-20 right-20 space-y-8 animate-reveal" style={{ animationDelay: '300ms' }}>
                    <div className="space-y-4">
                        <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
                        <h2 className="text-6xl font-black text-white max-w-2xl leading-[1.1] tracking-tighter">
                            Advanced Asset <br /> Control <span className="text-white/30">&</span> Precision.
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-8 max-w-xl">
                        <div className="p-6 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 space-y-2 hover:bg-white/10 transition-colors group cursor-default">
                            <p className="text-blue-400 text-2xl font-black">100%</p>
                            <p className="text-xs text-white/60 font-bold uppercase tracking-widest">Uptime Reliability</p>
                        </div>
                        <div className="p-6 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 space-y-2 hover:bg-white/10 transition-colors group cursor-default">
                            <p className="text-blue-400 text-2xl font-black">Real-time</p>
                            <p className="text-xs text-white/60 font-bold uppercase tracking-widest">Telemetry Data</p>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            </div>
        </div>
    );
};


export default Login;
