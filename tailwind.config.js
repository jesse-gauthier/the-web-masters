import daisyui from 'daisyui'

export default {
	content: ['./src/**/*.{vue,js,ts}'],
	plugins: [
		daisyui,
		function ({ addComponents, theme }) {
			const colors = theme('colors');
			const buttons = {
				'.btn': {
					padding: '0.5rem 1rem',
					borderRadius: '0.375rem',
					fontWeight: '600',
					width: 'fit-content',
					transition: 'background-color 0.3s',
					border: 'none',
				},
				'.btn-primary': {
					backgroundColor: colors.lightblue,
					color: colors.white,
					'&:hover': {
						backgroundColor: theme('colors.lightblue', 'darken'),
					},
				},
				'.btn-secondary': {
					backgroundColor: colors.orange,
					color: colors.white,
					'&:hover': {
						backgroundColor: theme('colors.orange', 'darken'),
					},
				},
				'.btn-accent': {
					backgroundColor: colors.gold,
					color: colors.white,
					'&:hover': {
						backgroundColor: theme('colors.gold', 'darken'),
					},
				},
				'.btn-info': {
					backgroundColor: colors.bluewood,
					color: colors.white,
					'&:hover': {
						backgroundColor: theme('colors.bluewood', 'darken'),
					},
				},
				'.btn-success': {
					backgroundColor: colors.lightgreen,
					color: colors.white,
					'&:hover': {
						backgroundColor: theme('colors.lightgreen', 'darken'),
					},
				},
				'.btn-neutral': {
					backgroundColor: colors.black,
					color: colors.white,
					'&:hover': {
						backgroundColor: theme('colors.black', 'darken'),
					},
				},
				'.btn-white': {
					backgroundColor: colors.white,
					color: colors.black,
					'&:hover': {
						backgroundColor: theme('colors.gray.200'),
					},
				},
			};
			addComponents(buttons);
		},
		function ({ addBase, theme }) {
			addBase({
				'h1, h2, h3, h4, h5, h6': { fontFamily: theme('fontFamily.heading') },
				'h2, h3, h4, h5, h6': { fontFamily: theme('fontFamily.subheading') },
				'p, span, a, li, div': { fontFamily: theme('fontFamily.text') },
			});
		},
	],
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
