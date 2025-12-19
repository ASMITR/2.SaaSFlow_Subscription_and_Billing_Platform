'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface GlowButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'success';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export default function GlowButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false
}: GlowButtonProps) {
  const baseClasses = "relative font-semibold rounded-xl transition-all duration-300 overflow-hidden border inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-aurora-gradient text-quantum-black border-transparent shadow-aurora hover:shadow-neon-strong",
    secondary: "glass-panel text-white border-aurora-glow/30 hover:border-aurora-glow/60 hover:shadow-neon backdrop-blur-glass",
    ghost: "bg-transparent text-aurora-glow hover:bg-aurora-glow/10 border-transparent hover:shadow-neon",
    outline: "bg-transparent text-aurora-glow border-aurora-glow/50 hover:bg-aurora-glow/10 hover:border-aurora-glow hover:shadow-neon",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white border-transparent shadow-red-500/30 hover:shadow-red-500/60",
    success: "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-transparent shadow-green-500/30 hover:shadow-green-500/60"
  };
  
  const sizeClasses = {
    xs: "px-3 py-1.5 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {/* Shimmer Effect */}
      {!loading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{
            translateX: ['100%', '100%', '-100%', '-100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      
      {/* Loading Spinner */}
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}