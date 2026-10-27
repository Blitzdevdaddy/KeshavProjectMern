/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // High-tech neo-fintech & legaltech palette
        frost: '#F6F8FC',
        mist: '#E7ECF5',
        ink: { DEFAULT: '#090D16', soft: '#192033' },
        midnight: { DEFAULT: '#080C16', 800: '#0E1526', 700: '#17223D' },
        steel: '#58637B',
        line: '#DFE5F2',
        glacier: { 100: '#EAF0FD', 300: '#B6CBF5', 500: '#3D5982', 700: '#12203A' },
        silver: '#C4D2E8',
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          cyan: '#06B6D4',
          sky: '#38BDF8',
          teal: '#14B8A6',
          violet: '#8B5CF6',
        },
        marigold: '#D97706',
        emerald: '#059669',
        crimson: '#E11D48',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Archivo Variable"', 'Archivo', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 1px 0 rgba(255,255,255,.8) inset, 0 16px 40px -16px rgba(15,23,42,.12)',
        glow: '0 0 0 1px rgba(99,102,241,.25), 0 20px 50px -20px rgba(99,102,241,.35)',
        lift: '0 20px 45px -20px rgba(15,23,42,.2)',
        brand: '0 10px 30px -8px rgba(79,70,229,0.45)',
        cyan: '0 10px 30px -8px rgba(6,182,212,0.45)',
        emerald: '0 10px 30px -8px rgba(16,185,129,0.45)',
      },
      borderRadius: { panel: '28px' },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
