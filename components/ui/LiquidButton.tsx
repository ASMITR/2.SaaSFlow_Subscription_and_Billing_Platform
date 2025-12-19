'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface LiquidButtonProps {
  children: ReactNode;
  variant?: 'flow' | 'wave' | 'ripple';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function LiquidButton({ 
  children, 
  variant = 'flow', 
  size = 'md',
  className = '',
  onClick,
  disabled = false
}: LiquidButtonProps) {
  const baseClasses = "relative font-medium rounded-2xl transition-all duration-700 overflow-hidden border-0 cursor-pointer";
  
  const variantClasses = {
    flow: "bg-gradient-to-r from-aurora-cyan via-aurora-teal to-aurora-mint text-quantum-black",
    wave: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white",
    ripple: "bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-quantum-black"
  };
  
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundSize: '200% 200%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Liquid Blob Effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 10, -10, 0],
          y: [0, -5, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Surface Ripple */}
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-2xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 font-semibold">{children}</span>
    </motion.button>
  );
}