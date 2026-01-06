/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#FF5A5F', // Example brand color from image (reddish/coral)
                secondary: '#fca5a5',
                dark: '#1a1a1a',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'], // Modern font
            }
        },
    },
    plugins: [],
}
