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
          variable: 'rgb(var(--brand-primary) / <alpha-value>)',
          'variable-alt': 'rgb(var(--brand-primary-alt) / <alpha-value>)',
          'variable-text': 'rgb(var(--brand-primary-text) / <alpha-value>)',
        },
        accent: {
          '50': '#fcf9f5',
          '100': '#fcf5ed',
          '200': '#f5e2d3',
          '300': '#f0ceb9',
          '400': '#e6a18a',
          '500': '#da6d5e',
          '600': '#c45b4d',
          '700': '#a33f34',
          '800': '#822b22',
          '900': '#611912',
          '950': '#400c08',
          DEFAULT: ' #da6d5e',
          variable: 'rgb(var(--brand-accent) / <alpha-value>)',
          'variable-text': 'rgb(var(--brand-accent-text) / <alpha-value>)',
        },
        surface: {
          background: 'rgb(var(--background) / <alpha-value>)',
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          '1': 'rgb(var(--text-surface-1) / <alpha-value>)',
          '2': 'rgb(var(--text-surface-2) / <alpha-value>)',
          '3': 'rgb(var(--text-surface-3) / <alpha-value>)',
          '4': 'rgb(var(--text-surface-4) / <alpha-value>)',
          '5': 'rgb(var(--text-surface-5) / <alpha-value>)',
        },
        background: {
          text: {
            '1': 'rgb(var(--text-background-1) / <alpha-value>)',
            '2': 'rgb(var(--text-background-2) / <alpha-value>)',
            '3': 'rgb(var(--text-background-3) / <alpha-value>)',
            '4': 'rgb(var(--text-background-4) / <alpha-value>)',
            '5': 'rgb(var(--text-background-5) / <alpha-value>)',
          },
        },
        success: `rgb(var(--success) / <alpha-value>)`,
        error: `rgb(var(--error) / <alpha-value>)`,
        warning: `rgb(var(--warning) / <alpha-value>)`,
        info: `rgb(var(--info) / <alpha-value>)`,
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
export default config;
