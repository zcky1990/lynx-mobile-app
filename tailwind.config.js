import lynxPreset from '@lynx-js/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [lynxPreset],
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};