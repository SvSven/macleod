import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mcl-blue': {
          50: 'hsl(196, 38%, 80%)',
          900: 'hsl(196, 38%, 40%)',
        },
        'mcl-green': {
          50: 'hsl(182, 38%, 80%)',
          900: 'hsl(182, 38%, 40%)',
        },
        'mcl-yellow': {
          50: 'hsl(44, 78%, 95%)',
          900: 'hsl(44, 78%, 95%)',
        },
        'mcl-red': {
          900: 'hsl(7, 61%, 50%)',
          50: 'hsl(7, 61%, 45%)',
        },
      },
    },
  },
  plugins: [],
}
export default config
