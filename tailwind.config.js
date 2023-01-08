/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      default: { light: '#e3e2e080', dark: '#373737' },
      font: { light: '#404040', dark: '#FFFFFC' },
      pink: { light: '#F5E0E9', dark: '#69314C' },
      red: { light: '#FFE2DD', dark: '#6E3630' },
      orange: { light: '#FFDAD9', dark: '#854C1D' },
      yellow: { light: '#FADEC9', dark: '#89632A' },
      green: { light: '#DBEDDB', dark: '#2B593F' },
      blue: { light: '#D3E5EF', dark: '#28456C' },
      purple: { light: '#E8DEEE', dark: '#492F64' },
      brown: { light: '#FDE4CF', dark: '#603B2C' },
      gray: { light: '#E2E3E0', dark: '#5A5A5A' },
    },
  },
  safelist: [
    { pattern: /(bg|text)-./ },
    'dark:bg-default-dark',
    'dark:bg-pink-dark',
    'dark:bg-red-dark',
    'dark:bg-orange-dark',
    'dark:bg-yellow-dark',
    'dark:bg-green-dark',
    'dark:bg-blue-dark',
    'dark:bg-purple-dark',
    'dark:bg-brown-dark',
    'dark:bg-gray-dark',
  ],
};
