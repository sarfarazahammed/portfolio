/** @type {import('tailwindcss').Config} */

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fill: ({ theme }) => ({
			dark: theme('colors.dark'),
			light: theme('colors.light'),
		}),
		extend: {
			colors: {
				light: {
					bgMain: 'theme("colors.light.primary.50")',
					primary: {
						'50': '#f2f9f9',
						'100': '#ddeff0',
						'200': '#bfe0e2',
						'300': '#92cace',
						'400': '#5faab1',
						'500': '#438e96',
						'600': '#3b757f',
						'700': '#356169',
						'800': '#325158',
						'900': '#2d464c',
						'950': '#1a2c32',
					},
					primaryText: '#333333',
					secondaryText: '#6B7280',
					placeholderText: '#9CA3AF'
				},
				dark: {
					bgMain: 'theme("colors.dark.primary.50")',
					primary: {
						50: "#1A2C32",
						100: "#213840",
						200: "#31535E",
						300: "#3F6A79",
						400: "#4E8597",
						500: "#619AAD",
						600: "#7FADBD",
						700: "#9ABFCB",
						800: "#B9D2DA",
						900: "#D3E3E8",
						950: "#E1ECEF"
					},
					primaryText: '#E0E0E0',
					secondaryText: '#9CA3AF',
					placeholderText: '#6B7280',
				},
			},
			fontFamily: {
				display: ['Mulish', 'sans-serif']
			},
			screens: {
				sm: '640px',
				md: '769px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			}
		},
		future: {
			purgeLayersByDefault: true,
			removeDeprecatedGapUtilities: true
		}
	},
	darkMode: 'class',
	plugins: [require('flowbite/plugin')]
};
