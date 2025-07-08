/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: '#d6c5b0',
        background: '#f7f3f0',
        foreground: '#2a230b',
        primary: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        mystical: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        earth: {
          50: '#f7f3f0',
          100: '#e8ddd4',
          200: '#d6c5b0',
          300: '#c4ad8b',
          400: '#b29566',
          500: '#9f7d41',
          600: '#8b6914',
          700: '#6b5211',
          800: '#4a3b0e',
          900: '#2a230b',
        }
      },
      fontFamily: {
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
          'to': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}