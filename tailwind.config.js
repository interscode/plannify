/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,jsx,ts,tsx}",
  "./shared/**/*.{js,jsx,ts,tsx}",
  "./features/**/*.{js,jsx,ts,tsx}",
];
export const presets = [require("nativewind/preset")];
export const theme = {
  extend: {
    colors: {
      primary: "#000080",
      light: "#f8f8ff",
    },
  },
};
export const plugins = [];
