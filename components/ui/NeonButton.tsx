'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'electric' | 'cyber' | 'matrix';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export default function NeonButton({ 
  children, 
  variant = 'electric', 
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  glowIntensity = 'medium'
}: NeonButtonProps) {
  const baseClasses = "relative font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden border-2 bg-transparent";
  
  const variantClasses = {
    electric: "border-aurora-cyan text-aurora-cyan hover:text-quantum-black hover:bg-aurora-cyan",
    cyber: "border-purple-400 text-purple-400 hover:text-quantum-black hover:bg-purple-400",
    matrix: "border-green-400 text-green-400 hover:text-quantum-black hover:bg-green-400"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-md",
    md: "px-6 py-3 text-sm rounded-lg",
    lg: "px-8 py-4 text-base rounded-xl"
  };

  const glowClasses = {
    low: "shadow-sm",
    medium: "shadow-lg",
    high: "shadow-2xl"
  };

  const getGlowColor = () => {
    switch (variant) {
      case 'electric': return 'rgba(34, 211, 238, 0.5)';
      case 'cyber': return 'rgba(168, 85, 247, 0.5)';
      case 'matrix': return 'rgba(74, 222, 128, 0.5)';
      default: return 'rgba(34, 211, 238, 0.5)';
    }
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        glowClasses[glowIntensity],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      whileHover={!disabled ? { 
        scale: 1.05,
        boxShadow: `0 0 30px ${getGlowColor()}, 0 0 60px ${getGlowColor()}`
      } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
      style={{
        boxShadow: `0 0 20px ${getGlowColor()}`
      }}
    >
      {/* Electric Lines */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${getGlowColor()} 50%, transparent 70%)`
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Corner Sparks */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-current rounded-full"
          style={{
            top: i < 2 ? '2px' : 'auto',
            bottom: i >= 2 ? '2px' : 'auto',
            left: i % 2 === 0 ? '2px' : 'auto',
            right: i % 2 === 1 ? '2px' : 'auto',
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}