/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class', // ← important: enables dark mode via a CSS class

  theme: {
    extend: {
      fontFamily: {
        openSans: ['OpenSans', 'sans-serif'],
        openSansItalic: ['OpenSansItalic', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
       
      colors: {
        primary: '#03041C',
        secondary: '#FA6490',
        dark: '#0F172A',
        light: '#B7B7BB',
      },
       backgroundImage: {
        'hero-gradient': "linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%)",
      },
    container: {
      center: true,          
      padding: '5rem',        
      screens: {
        sm: '100%',
        md: '80%',
        lg: '80%',
        xl: '80%',
        '2xl': '80%',
      },},
    },
  },
  plugins: [],
};
     
    
