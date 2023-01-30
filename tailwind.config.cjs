/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				birthstone: ['Birthstone', 'cursive'],
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
