'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { auth } from '@/lib/firebase/config';
import AuroraBackground from '@/components/ui/AuroraBackground';
import GlowButton from '@/components/ui/GlowButton';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (error: any) {
      setError('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error: any) {
      setError('Google sign-in failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuroraBackground className="min-h-screen flex items-center justify-center p-4 pt-24">
      <motion.div
        className="w-full max-w-3xl glass-panel rounded-xl backdrop-blur-glass border border-glass-border overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 min-h-[450px]">
          {/* Form Panel */}
          <div className="p-5 lg:p-7 flex items-center">
            <div className="w-full max-w-xs mx-auto">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-cinematic text-white mb-2">
                  Welcome <span className="bg-aurora-gradient bg-clip-text text-transparent">Back</span>
                </h1>
                <p className="text-gray-400">Sign in to your dashboard</p>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleEmailSignIn} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-glass-white/10 rounded-lg border border-glass-border 
                               focus:border-aurora-glow focus:outline-none text-white placeholder-gray-500 transition-all duration-200 text-sm"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 bg-glass-white/10 rounded-lg border border-glass-border 
                               focus:border-aurora-glow focus:outline-none text-white placeholder-gray-500 transition-all duration-200 text-sm"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm pt-2">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-transparent" />
                    <span className="ml-3 text-gray-300">Remember me</span>
                  </label>
                  <Link href="/auth/reset" className="text-aurora-glow hover:text-aurora-mint transition-colors">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-aurora-cyan via-aurora-glow to-aurora-mint text-quantum-black font-semibold rounded-lg shadow-lg shadow-aurora-glow/25 hover:shadow-aurora-glow/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>

              <div className="my-8 flex items-center">
                <div className="flex-1 h-px bg-glass-border"></div>
                <span className="px-6 text-gray-400 text-sm font-medium">or continue with</span>
                <div className="flex-1 h-px bg-glass-border"></div>
              </div>

              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full py-3 px-4 bg-white/5 border border-glass-border text-white font-medium rounded-lg hover:bg-white/10 hover:border-aurora-glow/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <p className="text-center text-gray-400 mt-8">
                Don't have an account?{' '}
                <Link href="/auth/signup" className="text-aurora-glow hover:text-aurora-mint font-medium transition-colors">
                  Create account
                </Link>
              </p>
            </div>
          </div>

          {/* Branding Panel */}
          <div className="bg-aurora-gradient/10 p-5 lg:p-7 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-aurora-cyan/5 via-transparent to-aurora-mint/5"></div>
            <div className="text-center relative z-10">
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-aurora-gradient/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-aurora-gradient"></div>
                </div>
                <h2 className="text-3xl font-cinematic text-white mb-3">
                  Welcome to <span className="bg-aurora-gradient bg-clip-text text-transparent">SaaSFlow</span>
                </h2>
                <p className="text-gray-300">Streamline your subscription management</p>
              </div>
              <div className="space-y-4 max-w-sm mx-auto">
                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-white/5">
                  <div className="w-3 h-3 bg-aurora-glow rounded-full mr-4 flex-shrink-0"></div>
                  <span>Real-time analytics & insights</span>
                </div>
                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-white/5">
                  <div className="w-3 h-3 bg-aurora-teal rounded-full mr-4 flex-shrink-0"></div>
                  <span>Automated billing & invoicing</span>
                </div>
                <div className="flex items-center text-gray-300 p-3 rounded-lg bg-white/5">
                  <div className="w-3 h-3 bg-aurora-mint rounded-full mr-4 flex-shrink-0"></div>
                  <span>Enterprise-grade security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}