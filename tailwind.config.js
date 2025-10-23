/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // Broaden content globs to ensure Tailwind scans all project files for class names
  content: ['./**/*.{html,js,ts,jsx,tsx}'],
  safelist: [
    // Layout & spacing
    'max-w-7xl','mx-auto','px-4','sm:px-6','lg:px-8','py-20','pt-16','mb-12','mb-16','mb-8','mb-6','mb-4','gap-4','gap-6','gap-8','gap-12','p-8','p-6','p-4','px-6','py-3',
    // Grids & flex
    'grid','md:grid-cols-2','lg:grid-cols-3','flex','flex-col','items-center','justify-center','justify-between','flex-wrap','md:flex','md:hidden',
    // Sizing
    'min-h-screen','w-full','h-48','h-64','h-3','h-full','w-64','max-w-4xl','max-w-2xl',
    // Typography
    'text-4xl','text-5xl','sm:text-5xl','md:text-6xl','lg:text-7xl','text-2xl','text-lg','text-xl','text-sm','text-primary','text-white','text-gray-600','text-gray-700','text-gray-800','text-gray-900','font-bold','font-semibold','leading-relaxed',
    // Backgrounds & borders
    'bg-white','bg-gray-50','bg-gray-100','bg-gray-200','bg-gray-800','bg-gray-900','bg-transparent','bg-primary','bg-gradient-to-r','bg-gradient-to-br','from-primary','from-primary/20','to-blue-400','to-blue-600','to-blue-600/20',
    'border','border-2','border-t','border-b','border-gray-200','border-gray-300','border-gray-800','rounded-full','rounded-lg','rounded-xl','shadow-lg','shadow-xl',
    // Utilities
    'overflow-hidden','line-clamp-2','text-center','text-left','underline','transition','transition-all','transition-colors','duration-300','backdrop-blur-md','hover:scale-105','hover:scale-110','hover:bg-primary','hover:bg-gray-100','hover:bg-gray-200','hover:text-primary','hover:text-white',
    // Dark variants explicitly
    'dark:bg-darkCard','dark:bg-darkBg/80','dark:text-gray-200','dark:text-gray-300','dark:text-gray-400','dark:border-gray-700','dark:border-gray-800','dark:hover:bg-primary','dark:hover:text-primary'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BFFF',
        darkBg: '#0A0A0A',
        darkCard: '#151515',
        lightBg: '#F8F8F8',
        lightCard: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
