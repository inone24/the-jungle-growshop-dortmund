/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,tsx,vue,svelte,md,mdx}',
    './content/**/*.json',
    './public/**/*.html'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem'
      },
      screens: {
        '2xl': '1200px'
      }
    },
    extend: {
      colors: {
        'accent-primary': 'var(--accent-primary)',
        'accent-moss': 'var(--accent-alt-moss)',
        'text-high': 'var(--text-high)',
        'text-dim': 'var(--text-dim)',
        'background-dark': 'var(--bg-dark)'
      },
      boxShadow: {
        card: 'var(--shadow-card)'
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)'
      }
    },
    fontFamily: {
      sans: ['Manrope', 'system-ui', 'Segoe UI', 'sans-serif'],
      display: ['Syne', 'Manrope', 'system-ui', 'sans-serif']
    }
  },
  plugins: []
};
