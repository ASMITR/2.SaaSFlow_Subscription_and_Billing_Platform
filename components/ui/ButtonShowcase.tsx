'use client';

import { Play, Download, Settings, Zap, Star, Shield } from 'lucide-react';
import { 
  GlowButton, 
  QuantumButton, 
  LiquidButton, 
  NeonButton, 
  GlassButton, 
  HologramButton 
} from './buttons';

export default function ButtonShowcase() {
  return (
    <div className="p-8 space-y-12 bg-quantum-black min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-cinematic aurora-text mb-4">SaaSFlow Button System</h1>
        <p className="text-gray-400">Futuristic UI components for quantum experiences</p>
      </div>

      {/* Glow Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-aurora-glow">Glow Buttons</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <GlowButton variant="primary" size="sm">Primary</GlowButton>
          <GlowButton variant="secondary" size="sm">Secondary</GlowButton>
          <GlowButton variant="ghost" size="sm">Ghost</GlowButton>
          <GlowButton variant="outline" size="sm">Outline</GlowButton>
          <GlowButton variant="danger" size="sm">Danger</GlowButton>
          <GlowButton variant="success" size="sm">Success</GlowButton>
        </div>
        <div className="flex gap-4 items-center">
          <GlowButton size="lg" className="flex items-center gap-2">
            <Play className="w-5 h-5" />
            Get Started
          </GlowButton>
          <GlowButton variant="secondary" loading>Loading...</GlowButton>
          <GlowButton variant="outline" disabled>Disabled</GlowButton>
        </div>
      </section>

      {/* Quantum Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-aurora-glow">Quantum Buttons</h2>
        <div className="flex gap-4 items-center">
          <QuantumButton variant="orbital"><Settings className="w-5 h-5" /></QuantumButton>
          <QuantumButton variant="plasma"><Zap className="w-5 h-5" /></QuantumButton>
          <QuantumButton variant="void"><Star className="w-5 h-5" /></QuantumButton>
          <QuantumButton variant="crystal" size="lg"><Shield className="w-6 h-6" /></QuantumButton>
        </div>
      </section>

      {/* Liquid Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-aurora-glow">Liquid Buttons</h2>
        <div className="flex gap-4 items-center">
          <LiquidButton variant="flow">Flow Effect</LiquidButton>
          <LiquidButton variant="wave">Wave Motion</LiquidButton>
          <LiquidButton variant="ripple">Ripple Flow</LiquidButton>
        </div>
      </section>

      {/* Neon Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-aurora-glow">Neon Buttons</h2>
        <div className="flex gap-4 items-center">
          <NeonButton variant="electric">ELECTRIC</NeonButton>
          <NeonButton variant="cyber" glowIntensity="high">CYBER</NeonButton>
          <NeonButton variant="matrix" size="lg">MATRIX</NeonButton>
        </div>
      </section>

      {/* Glass Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-aurora-glow">Glass Buttons</h2>
        <div className="flex gap-4 items-center">
          <GlassButton variant="frost">Frost Glass</GlassButton>
          <GlassButton variant="crystal" blur="heavy">Crystal</GlassButton>
          <GlassButton variant="mirror" size="lg">Mirror</GlassButton>
        </div>
      </section>

      {/* Hologram Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-aurora-glow">Hologram Buttons</h2>
        <div className="flex gap-4 items-center">
          <HologramButton variant="scan">SCAN</HologramButton>
          <HologramButton variant="glitch">GLITCH</HologramButton>
          <HologramButton variant="phase" size="lg">PHASE</HologramButton>
        </div>
      </section>

      {/* Full Width Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-aurora-glow">Full Width Variants</h2>
        <div className="space-y-4 max-w-md">
          <GlowButton fullWidth className="flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Now
          </GlowButton>
          <GlassButton variant="crystal" className="w-full">Subscribe to Premium</GlassButton>
        </div>
      </section>
    </div>
  );
}