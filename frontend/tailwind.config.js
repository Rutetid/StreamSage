export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['"Poppins"', "sans-serif"],
				koulen: ['"Koulen"', "cursive"],
			},
			fontWeight: {
				regular: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
			},
			colors: {
				text: "#ddeef8",
				background: "#040a10",
				bglight: "#0a1929",
				primary: "#8fbde5",
				secondary: "#851e63",
				accent: "#d5504d",
				top: "#020508",
				"grad-start": "#8fbde5",
				"grad-end": "#D5504D",
			},
			screens: {
				"3xl": "1920px",
			},
			animation: {
				fadeIn: "fadeIn 0.3s ease-out forwards",
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0", transform: "translateY(-10px) scale(0.98)" },
					"100%": { opacity: "1", transform: "translateY(0) scale(1)" }
				},
				pulse: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.5 },
				}
			},
			backdropBlur: {
				xs: '2px',
				sm: '4px',
				md: '8px',
				lg: '12px',
				xl: '16px',
				'2xl': '24px',
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		({ addUtilities }) => {
			const newUtilities = {
				".gradient-text": {
					background: "linear-gradient(to right, var(--tw-gradient-stops))",
					"-webkit-background-clip": "text",
					"-webkit-text-fill-color": "transparent",
				},
			};
			addUtilities(newUtilities);
		},
	],
};
