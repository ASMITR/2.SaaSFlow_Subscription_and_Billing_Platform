'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface QuantumButtonProps {
  children: ReactNode;
  variant?: 'orbital' | 'plasma' | 'void' | 'crystal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  isActive?: boolean;
}

export default function QuantumButton({ 
  children, 
  variant = 'orbital', 
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  isActive = false
}: QuantumButtonProps) {
  const baseClasses = "relative rounded-full transition-all duration-500 overflow-hidden border flex items-center justify-center";
  
  const variantClasses = {
    orbital: "bg-quantum-dark border-aurora-glow/40 hover:border-aurora-glow shadow-neon hover:shadow-neon-strong",
    plasma: "bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-400/40 hover:border-pink-400 shadow-purple-500/30 hover:shadow-pink-500/50",
    void: "bg-black/80 border-gray-600/40 hover:border-white/60 shadow-gray-500/20 hover:shadow-white/30",
    crystal: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-400/40 hover:border-blue-400 shadow-cyan-500/30 hover:shadow-blue-500/50"
  };
  
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-lg"
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        isActive && "ring-2 ring-aurora-glow ring-offset-2 ring-offset-quantum-black",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={!disabled ? { scale: 1.1, rotate: 5 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Orbital Ring Effect */}
      <motion.div
        className="absolute inset-0 rounded-full border border-aurora-glow/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Pulse Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-aurora-glow/10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Content */}
      <span className="relative z-10 text-aurora-glow">{children}</span>
    </motion.button>
  );
}