import daisyui from 'daisyui'

export default {
	content: ['./src/**/*.{vue,js,ts}'],
	plugins: [daisyui],
	theme: {
		extend: {
			colors: {
				lightblue: 'var(--color-lightblue)',
				orange: 'var(--color-orange)',
				gold: 'var(--color-gold)',
				bluewood: 'var(--color-bluewood)',
				lightgreen: 'var(--color-lightgreen)',
				black: 'var(--color-black)',
				white: 'var(--color-white)',
			},
			fontFamily: {
				heading: ['Baloo', 'sans-serif'],
				subheading: ['Poppins', 'sans-serif'],
				text: ['Poppins', 'sans-serif'],
			},
		},
	},
}
