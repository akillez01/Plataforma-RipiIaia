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
				// =============================
				// PALETA DE CORES PRINCIPAL
				// =============================
				//
				// Para alterar as cores do projeto, edite os valores abaixo.
				// Você pode usar hsl(), hex ou rgb. Exemplo: '#0ea5e9' ou 'hsl(160, 100%, 40%)'
				//
				// Cores institucionais (exemplo):
				// primary: Cor principal da marca
				// secondary: Cor secundária
				// accent: Destaques e botões
				// card: Fundo dos cards
				// background: Fundo geral
				// foreground: Cor do texto principal
				// border: Cor das bordas
				//
				// Paletas inspiradas na floresta amazônica:
				// emerald: Tons de verde (floresta)
				// amber: Tons de amarelo/laranja (terra, madeira)
				// sky: Tons de azul (céu, água)
				// sage: Tons neutros suaves
				// slate: Tons de cinza
				//
				// Exemplo de uso no projeto:
				// bg-primary, text-secondary, border-accent, bg-emerald-600, text-amber-700, etc.
				// =============================

				// --- Cores utilitárias globais ---
				// border: Cor das bordas gerais
				// input: Cor de inputs
				// ring: Cor de foco
				// background: Fundo principal
				// foreground: Texto principal
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',

				// --- Cores institucionais ---
				// primary: Cor principal da marca
				primary: {
					DEFAULT: 'hsl(var(--primary))', // Cor principal
					foreground: 'hsl(var(--primary-foreground))' // Texto sobre primary
				},
				// secondary: Cor secundária
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				// destructive: Erros/alertas
				// muted: Tons neutros
				// accent: Destaques
				// popover: Fundo de popovers
				// card: Fundo dos cards
				// sidebar: Fundo e elementos da sidebar

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

				// --- Paletas temáticas ---
				// emerald: Tons de verde (floresta)
				emerald: {
					// Verde floresta
					50: '#ecfdf5',
					100: '#d1fae5',
					200: '#a7f3d0',
					300: '#6ee7b7',
					400: '#34d399',
					500: '#10b981',
					600: '#059669',
					700: '#047857',
					800: '#065f46',
					900: '#064e3b',
				},
				// amber: Tons de amarelo/laranja (terra, madeira)
				amber: {
					// Marrom/terra com tons de madeira
					50: '#f9f6f2', // bege claro
					100: '#f3e9dd',
					200: '#e6d3bb',
					300: '#d2b48c', // marrom claro (tan)
					400: '#b98c5a', // caramelo/madeira clara
					500: '#a47149', // madeira média
					600: '#855c3a', // marrom médio
					700: '#6b4226', // marrom escuro
					800: '#4e2e1f', // madeira escura
					900: '#2d1a10', // marrom/madeira bem escuro
				},
				// sky: Tons de azul (céu, água)
				sky: {
					// Azul céu/água
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				},
				// sage: Tons neutros suaves
				sage: {
					// Neutros suaves
					50: '#f8faf9',
					100: '#e9f5ee',
					200: '#d3e8dd',
					300: '#b7d6c7',
					400: '#8fc1a9',
					500: '#6ba98a',
					600: '#4e8c6e',
					700: '#3b6d56',
					800: '#2d5442',
					900: '#1e362b',
				},
				// slate: Tons de cinza
				slate: {
					// Cinzas
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
