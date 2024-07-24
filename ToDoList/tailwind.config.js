module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				white: "#fcfcfc",
				gray: "#2a2a2a",
				cream: "#e2e2e2"
			},
			animation: {
				rotate: "rotate 10s linear infinite",
			},
			keyframes: {
				rotate: {
					"0%": {transform: "rotate(0deg) scale(10)"},
					"100%": {transform: "rotate(-360deg) scale(10)"},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("tailwindcss-animate"),

	],
}
