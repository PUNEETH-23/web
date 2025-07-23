/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Indian Gold
          50: '#FDF7E2',
          100: '#FAEDC0',
          200: '#F4DC85',
          300: '#EBC849',
          400: '#D4AF37', // Default
          500: '#B38F24',
          600: '#8C6F1D',
          700: '#664F15',
          800: '#40320E',
          900: '#1A1406'
        },
        accent: {
          DEFAULT: '#C41E3A', // Indian Red
          50: '#FCE4E8',
          100: '#F8BCC6',
          200: '#F17D91',
          300: '#E33D5B',
          400: '#C41E3A', // Default
          500: '#9E182F',
          600: '#781224',
          700: '#520C18',
          800: '#2C060D',
          900: '#060102'
        }
      },
      fontFamily: {
        display: ['Rozha One', 'serif'],
        body: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'mandala-pattern': "url('https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg')",
        'stone-texture': "url('https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg')"
      }
    }
  },
  plugins: [],
};