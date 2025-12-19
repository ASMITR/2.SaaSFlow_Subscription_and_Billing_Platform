'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface HologramButtonProps {
  children: ReactNode;
  variant?: 'scan' | 'glitch' | 'phase';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function HologramButton({ 
  children, 
  variant = 'scan', 
  size = 'md',
  className = '',
  onClick,
  disabled = false
}: HologramButtonProps) {
  const baseClasses = "relative font-mono font-bold transition-all duration-300 overflow-hidden border-2 bg-transparent";
  
  const variantClasses = {
    scan: "border-aurora-cyan text-aurora-cyan",
    glitch: "border-purple-400 text-purple-400",
    phase: "border-green-400 text-green-400"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-md",
    md: "px-6 py-3 text-sm rounded-lg",
    lg: "px-8 py-4 text-base rounded-xl"
  };

  const getColor = () => {
    switch (variant) {
      case 'scan': return '#00FFFF';
      case 'glitch': return '#A855F7';
      case 'phase': return '#4ADE80';
      default: return '#00FFFF';
    }
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
      whileHover={!disabled ? { 
        scale: 1.05,
        textShadow: `0 0 10px ${getColor()}`,
        borderColor: getColor(),
      } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            ${getColor()}20 2px,
            ${getColor()}20 4px
          )`
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Hologram Flicker */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [1, 0.8, 1, 0.9, 1],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Corner Brackets */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 border-current"
          style={{
            top: i < 2 ? '0' : 'auto',
            bottom: i >= 2 ? '0' : 'auto',
            left: i % 2 === 0 ? '0' : 'auto',
            right: i % 2 === 1 ? '0' : 'auto',
            borderTopWidth: i < 2 ? '2px' : '0',
            borderBottomWidth: i >= 2 ? '2px' : '0',
            borderLeftWidth: i % 2 === 0 ? '2px' : '0',
            borderRightWidth: i % 2 === 1 ? '2px' : '0',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Glitch Effect */}
      {variant === 'glitch' && (
        <motion.div
          className="absolute inset-0 bg-current opacity-10"
          animate={{
            x: [0, 2, -2, 0],
            scaleX: [1, 1.02, 0.98, 1],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      )}
      
      {/* Content */}
      <span className="relative z-10 tracking-wider">{children}</span>
    </motion.button>
  );
}