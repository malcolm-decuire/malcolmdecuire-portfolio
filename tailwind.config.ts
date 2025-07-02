// // tailwind.config.ts or tailwind.config.js
// import { type Config } from 'tailwindcss';
// const { nextui } = require('@nextui-org/react');
// import typographyPlugin from '@tailwindcss/typography';
// import typographyStyles from './typography'; // Adjust path as needed

// const config: Config = {
//   content: [
//     './index.html',
//     './src/**/*.{js,jsx,ts,tsx}', // Include src directory for directory-b
//     './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontSize: {
//         xs: ['0.8125rem', { lineHeight: '1.5rem' }],
//         sm: ['0.875rem', { lineHeight: '1.5rem' }],
//         base: ['1rem', { lineHeight: '1.75rem' }],
//         lg: ['1.125rem', { lineHeight: '1.75rem' }],
//         xl: ['1.25rem', { lineHeight: '2rem' }],
//         '2xl': ['1.5rem', { lineHeight: '2rem' }],
//         '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
//         '4xl': ['2rem', { lineHeight: '2.5rem' }],
//         '5xl': ['3rem', { lineHeight: '3.5rem' }],
//         '6xl': ['3.75rem', { lineHeight: '1' }],
//         '7xl': ['4.5rem', { lineHeight: '1' }],
//         '8xl': ['6rem', { lineHeight: '1' }],
//         '9xl': ['8rem', { lineHeight: '1' }],
//       },
//       typography: typographyStyles,
//     },
//   },
//   plugins: [typographyPlugin, nextui()],
// };

// export default config;


/////////////
////////////
// // /Users/malcolmdecuire/DEPLOYED_APPS_Q42024_20XX/decurelabs-portfolio-app/tailwind.config.ts
// import { type Config } from 'tailwindcss';
// const { nextui } = require('@nextui-org/react');
// import typographyPlugin from '@tailwindcss/typography';
// import typographyStyles from './typography'; // Adjust path as needed

// const config: Config = {
//   content: [
//     './index.html',
//     './src/**/*.{js,jsx,ts,tsx}', // Include src directory for directory-b
//     './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontSize: {
//         xs: ['0.8125rem', { lineHeight: '1.5rem' }],
//         sm: ['0.875rem', { lineHeight: '1.5rem' }],
//         base: ['1rem', { lineHeight: '1.75rem' }],
//         lg: ['1.125rem', { lineHeight: '1.75rem' }],
//         xl: ['1.25rem', { lineHeight: '2rem' }],
//         '2xl': ['1.5rem', { lineHeight: '2rem' }],
//         '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
//         '4xl': ['2rem', { lineHeight: '2.5rem' }],
//         '5xl': ['3rem', { lineHeight: '3.5rem' }],
//         '6xl': ['3.75rem', { lineHeight: '1' }],
//         '7xl': ['4.5rem', { lineHeight: '1' }],
//         '8xl': ['6rem', { lineHeight: '1' }],
//         '9xl': ['8rem', { lineHeight: '1' }],
//       },
//       backgroundImage: {
//         'hero-section-title': 'linear-gradient(91deg, #FFF 32.88%, rgba(255, 255, 255, 0.40) 99.12%)',
//         'gradient-text-purple-white-blue': 'linear-gradient(90deg, #a855f7 0%, #ffffff 50%, #3b82f6 100%)',
//         'gradient-lilac-white-marine': 'linear-gradient(90deg, #c7adf4 0%, #ffffff 50%, #3b82f6 100%)',
//       },

//       textColor: {
//         'gradient-white-fade': '#ffffffcc',
//       },
//       typography: typographyStyles,
//     },
//   },
//   plugins: [typographyPlugin, nextui()],
// };

// export default config;


/////////////////////////
// //////////////////////////NEW TAILWIND -> DOESNT WORK 
// import { type Config } from 'tailwindcss';
// const { nextui } = require('@nextui-org/react');
// import typographyPlugin from '@tailwindcss/typography';
// import typographyStyles from './typography'; // Adjust path as needed

// const config: Config = {
//   content: [
//     './index.html',
//     './src/**/*.{js,jsx,ts,tsx}',
//     './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontSize: {
//         xs: ['0.8125rem', { lineHeight: '1.5rem' }],
//         sm: ['0.875rem', { lineHeight: '1.5rem' }],
//         base: ['1rem', { lineHeight: '1.75rem' }],
//         lg: ['1.125rem', { lineHeight: '1.75rem' }],
//         xl: ['1.25rem', { lineHeight: '2rem' }],
//         '2xl': ['1.5rem', { lineHeight: '2rem' }],
//         '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
//         '4xl': ['2rem', { lineHeight: '2.5rem' }],
//         '5xl': ['3rem', { lineHeight: '3.5rem' }],
//         '6xl': ['3.75rem', { lineHeight: '1' }],
//         '7xl': ['4.5rem', { lineHeight: '1' }],
//         '8xl': ['6rem', { lineHeight: '1' }],
//         '9xl': ['8rem', { lineHeight: '1' }],
//       },
//       backgroundImage: {
//         'hero-section-title': 'linear-gradient(91deg, #c7adf4 0%, #3b82f6 100%)',
//         'gradient-lilac-blue': 'linear-gradient(90deg, #c7adf4 0%, #3b82f6 100%)',
//       },
//       textColor: {
//         'gradient-white-fade': '#ffffffcc',
//       },
//       typography: typographyStyles,
//     },
//   },
//   plugins: [typographyPlugin, nextui()],
// };

// export default config;



/////////////////////////////////////
////////////////////////////////////TEST 3
// /Users/malcolmdecuire/DEPLOYED_APPS_Q42024_20XX/decurelabs-portfolio-app/tailwind.config.ts
import { type Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import typographyPlugin from '@tailwindcss/typography';
import typographyStyles from './typography'; // ✅ Ensure this file exists and exports a valid object

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        'hero-section-title': 'linear-gradient(91deg, #c7adf4 0%, #3b82f6 100%)',
        'gradient-lilac-blue': 'linear-gradient(90deg, #c7adf4 0%, #3b82f6 100%)',
      },
      textColor: {
        'gradient-white-fade': '#ffffffcc',
      },
      typography: typographyStyles,
    },
  },
  plugins: [
    typographyPlugin,
    nextui(),
  ],
};

export default config;
