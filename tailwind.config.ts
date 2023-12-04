import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          colors: {
            background: '#063347',
            // background: '#063347',
            primary: {
              50: '#f3f4f6',
              100: '#e5e7eb',
              200: '#d1d5db',
              300: '#9ca3af',
              400: '#6b7280',
              500: '#4b5563',
              600: '#374151',
              700: '#1f2937',
              800: '#111827',
              900: '#030712',
              DEFAULT: '#FCADF9',
              foreground: '#fff',
            },
          },
        },
        dark: {
          colors: {
            background: '#0D001A',
            primary: {
              50: '#3B097C',
              100: '#3B096C',
              200: '#520F83',
              300: '#7318A2',
              400: '#9823C2',
              500: '#c031e2',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#F182F6',
              foreground: '#030712',
            },
          },
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
