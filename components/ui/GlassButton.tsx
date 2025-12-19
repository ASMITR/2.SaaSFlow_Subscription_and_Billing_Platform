'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface GlassButtonProps {
  children: ReactNode;
  variant?: 'frost' | 'crystal' | 'mirror';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  blur?: 'light' | 'medium' | 'heavy';
}

export default function GlassButton({ 
  children, 
  variant = 'frost', 
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  blur = 'medium'
}: GlassButtonProps) {
  const baseClasses = "relative font-medium transition-all duration-300 overflow-hidden border";
  
  const variantClasses = {
    frost: "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40",
    crystal: "bg-aurora-glow/10 border-aurora-glow/30 text-aurora-glow hover:bg-aurora-glow/20 hover:border-aurora-glow/50",
    mirror: "bg-gradient-to-br from-white/5 to-white/20 border-white/30 text-white hover:from-white/10 hover:to-white/30"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl"
  };

  const blurClasses = {
    light: "backdrop-blur-sm",
    medium: "backdrop-blur-md",
    heavy: "backdrop-blur-lg"
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        blurClasses[blur],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={!disabled ? { 
        scale: 1.02,
        y: -2,
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Glass Reflection */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)'
        }}
      />
      
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
        animate={{
          translateX: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />
      
      {/* Frost Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1 left-1 w-2 h-2 bg-white/40 rounded-full blur-sm" />
        <div className="absolute top-3 right-2 w-1 h-1 bg-white/60 rounded-full blur-sm" />
        <div className="absolute bottom-2 left-3 w-1.5 h-1.5 bg-white/50 rounded-full blur-sm" />
        <div className="absolute bottom-1 right-1 w-1 h-1 bg-white/40 rounded-full blur-sm" />
      </div>
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}