/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,mdx}'],
	theme: {
		extend: {
			colors: {
				'brown': '#855043',
				'gray-dark': '#5a5a5a',
				'gray-light': '#eaeaea',
				'matte-black': '#373435',
				'matte-yellow': '#eed50c',
			},
			fontFamily: {
				birthstone: ['Birthstone', 'cursive'],
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
