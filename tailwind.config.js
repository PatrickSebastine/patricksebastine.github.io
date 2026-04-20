/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0f0f1e',
        'cyber-dark': '#1a0a2e',
        'cyber-cyan': '#00d9ff',
        'cyber-magenta': '#ff006e',
        'cyber-green': '#00ff41',
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
        'text-muted': '#888888',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.5)',
        'glow-magenta': '0 0 20px rgba(255, 0, 110, 0.5)',
        'glow-green': '0 0 20px rgba(0, 255, 65, 0.5)',
        'glow-hover': '0 0 30px rgba(0, 217, 255, 0.7)',
        'deep': '0 20px 60px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'glitch': 'glitch 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'gradient-shift': 'gradientShift 15s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { textShadow: '3px 0 #00d9ff, -3px 0 #ff006e' },
          '50%': { textShadow: '-3px 0 #00d9ff, 3px 0 #ff006e' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}