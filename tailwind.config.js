module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				"xs-xs": "460px",
				xs: "520px",
				sm: "640px",
				"sm-md": "704px",
				md: "768px",
				"md-md": "824px",
				"md-lg": "899px",
				lg: "1024px",
				"lg-lg": "1120px",
				xl: "1280px",
				xxl: "1366px",
				"2xl": "1536px",
			},
			colors: {
				primary: { main: "#00A3FF", alternate: "#01D6EA" },
				deepblue: "#0D0C58",
				accent: { main: "#FF4757" },
				secondary: { main: "#FD640F" },
			},
			fontFamily: {
				primary: ["Poppins", "sans"],
				secondary: ["Cinzel", "serif"],
			},
			maxWidth: {
				full: "1440px",
			},
			spacing: {
				circle: "600px",
			},
			gridTemplateColumns: {
				16: "repeat(16, minmax(0, 1fr))",
			},
			zIndex: {
				800: "800",
				900: "900",
				950: "950",
			},
		},
	},
	variants: {
		extend: {
			ringWidth: ["hover"],
			ringColor: ["hover"],
			borderWidth: ["focus-within"],
			translate: ["hover", "group-hover"],
			shadow: ["group-hover"],
			ringOffsetColor: ["hover"],
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}
