/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        50: '#fefefe',
        100: '#f7f7f7',
        200: '#e6e6e6',
        300: '#959595',
        400: '#6c6c6c',
        500: '#585858',
        600: '#464646',
        700: '#2b2b2b',
        800: '#1c1b1b',
        900: '#111',
      },
      blue: {
        50: '#e6f1ff',
        100: '#b4d4fe',
        200: '#81b7fd',
        300: '#4f9afc',
        400: '#2f89fc', // Primary
        500: '#1d7dfc',
        600: '#0364e2',
        700: '#034eb0',
        800: '#02387e',
        900: '#01214b',
      },
      warmGray: {
        50: '#F2F6FF', // Light
        100: '#E5E7EF', // Border
        200: '#d4d6dd',
        300: '#b8bac7',
        400: '#9b9fb0',
        500: '#7e839a',
        600: '#6d728b', // Secondary
        700: '#5a5e72',
        800: '#33374B',
        850: '#25262D',
        900: '#16171d',
      },
      cyan: {
        50: '#EDFDFD',
        100: '#C4F1F9',
        200: '#9DECF9',
        300: '#76E4F7',
        400: '#0BC5EA',
        500: '#00B5D8',
        600: '#00A3C4',
        700: '#0987A0',
        800: '#086F83',
        900: '#065666',
      },
      orange: {
        50: '#fef2e6',
        100: '#fde6ce',
        200: '#fbcc9d',
        300: '#fab36b',
        400: '#f8993a',
        500: '#f68718', // Danger
        600: '#dd7308',
        700: '#ac5906',
        800: '#7b4004',
        900: '#311a02',
      },
      red: {
        50: '#ffe6e8',
        100: '#ffccd1',
        200: '#ff99a3',
        300: '#ff6675',
        400: '#ff4457', // Warning
        500: '#ff1a30',
        600: '#e60017',
        700: '#b30012',
        800: '#80000d',
        900: '#330005',
      },
      green: {
        50: '#e6fef6',
        100: '#cefded',
        200: '#9cfcdc',
        300: '#79ffe1', // Selector
        400: '#39f9b9',
        500: '#08f7a7',
        600: '#06cc89', // Succes
        700: '#05ad75',
        800: '#047c54',
        900: '#023121',
      },
      yellow: {
        50: '#fff8e6',
        100: '#ffeab3',
        200: '#fedd80',
        300: '#fecf4d',
        400: '#fec321', // Premium
        500: '#feba01',
        600: '#cb9501',
        700: '#987001',
        800: '#654b01',
        900: '#332500',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
