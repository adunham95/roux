import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: {
          '50': '#f2f8f9',
          '100': '#deedef',
          '200': '#c1dae0',
          '300': '#96bfca',
          '400': '#649dad',
          '500': '#488192',
          '600': '#3e6b7c',
          '700': '#385866',
          '800': '#344b56',
          '900': '#2f414a',
          '950': '#1b2931',
          DEFAULT: '#649dad',
        },
        surface: {
          DEFAULT: '#e6e6e6',
        },
      },
    },
  },
  plugins: [],
};
export default config;
