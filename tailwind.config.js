/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinematic': ['Playfair Display', 'serif'],
        'futuristic': ['Inter', 'sans-serif'],
      },
      colors: {
        quantum: {
          black: '#000000',
          charcoal: '#0A0A0A',
          dark: '#111111',
        },
        aurora: {
          cyan: '#00FFFF',
          teal: '#14B8A6',
          mint: '#10B981',
          glow: '#22D3EE',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)',
        }
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #00FFFF 0%, #14B8A6 50%, #10B981 100%)',
        'quantum-gradient': 'linear-gradient(135deg, #000000 0%, #0A0A0A 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(34, 211, 238, 0.5)',
        'neon-strong': '0 0 40px rgba(34, 211, 238, 0.8)',
        'aurora': '0 0 30px rgba(16, 185, 129, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'depth': '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'aurora-shift': 'aurora-shift 8s ease-in-out infinite',
        'glass-shimmer': 'glass-shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'aurora-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glass-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}