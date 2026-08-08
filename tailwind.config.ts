import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 24px 80px rgba(13, 30, 76, 0.18)',
      },
      backgroundImage: {
        'nyaya-gradient': 'radial-gradient(circle at top left, rgba(54, 142, 255, 0.35), transparent 28%), radial-gradient(circle at bottom right, rgba(217, 91, 255, 0.28), transparent 28%)',
      },
      colors: {
        nyaya: {
          dark: '#09101f',
          deep: '#0f1d3e',
          blue: '#3c8ef9',
          purple: '#a05bff',
          mint: '#53d7c8',
        },
      },
    },
  },
  plugins: [],
};

export default config;
