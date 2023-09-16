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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: (theme: any) => ({  
        DEFAULT: {
          css: {
            '.clamp-2': {
              display: '-webkit-box',
              overflow: 'hidden',
              '-webkit-line-clamp': '2',
              '-webkit-box-orient': 'vertical',
            },
          },
        },
      }),
    },
  },
  plugins: [require("daisyui")],
};

export default config;