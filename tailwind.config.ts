import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './animations/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px',
      '3xl': '1921px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E4157',
        },
        secondary: {
          DEFAULT: '#587e8d',
        },
        third: {
          DEFAULT: '#f2eeeb',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat'],
        gotham: ['var(--font-gotham)', ' Gotham'],
      },
      keyframes: {
        heart: {
          '0%': {
            transform: 'scale(0.90)',
          },
          '50%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0.90)',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        heart: 'heart 1s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      maxWidth: {
        '9/10': '90%',
        '8/10': '80%',
        '7/10': '70%',
      },
    },
  },
  plugins: [],
};
export default config;
