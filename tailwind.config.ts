
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cores inspiradas na floresta amazônica - mais claras e suaves
				emerald: {
					50: 'hsl(var(--emerald-50))',
					100: 'hsl(var(--emerald-100))',
					200: 'hsl(var(--emerald-200))',
					300: 'hsl(var(--emerald-300))',
					400: 'hsl(var(--emerald-400))',
					500: 'hsl(var(--emerald-500))',
					600: 'hsl(var(--emerald-600))',
					700: 'hsl(var(--emerald-700))',
					800: 'hsl(var(--emerald-800))',
					900: 'hsl(var(--emerald-900))',
				},
				// Tons de terra e madeira - mais claros
				amber: {
					50: 'hsl(var(--amber-50))',
					100: 'hsl(var(--amber-100))',
					200: 'hsl(var(--amber-200))',
					300: 'hsl(var(--amber-300))',
					400: 'hsl(var(--amber-400))',
					500: 'hsl(var(--amber-500))',
					600: 'hsl(var(--amber-600))',
					700: 'hsl(var(--amber-700))',
					800: 'hsl(var(--amber-800))',
					900: 'hsl(var(--amber-900))',
				},
				// Tons de céu e água - suaves
				sky: {
					50: 'hsl(var(--sky-50))',
					100: 'hsl(var(--sky-100))',
					200: 'hsl(var(--sky-200))',
					300: 'hsl(var(--sky-300))',
					400: 'hsl(var(--sky-400))',
					500: 'hsl(var(--sky-500))',
					600: 'hsl(var(--sky-600))',
					700: 'hsl(var(--sky-700))',
					800: 'hsl(var(--sky-800))',
					900: 'hsl(var(--sky-900))',
				},
				// Tons neutros mais suaves
				sage: {
					50: 'hsl(var(--sage-50))',
					100: 'hsl(var(--sage-100))',
					200: 'hsl(var(--sage-200))',
					300: 'hsl(var(--sage-300))',
					400: 'hsl(var(--sage-400))',
					500: 'hsl(var(--sage-500))',
					600: 'hsl(var(--sage-600))',
					700: 'hsl(var(--sage-700))',
					800: 'hsl(var(--sage-800))',
					900: 'hsl(var(--sage-900))',
				},
				slate: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					from: {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					to: {
						opacity: '1',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
