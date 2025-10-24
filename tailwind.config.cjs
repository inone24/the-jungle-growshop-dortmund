/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0f3d2e',
          light: '#64ffda',
          sand: '#f1f0e8',
          night: '#020817',
        },
        surface: {
          base: 'rgba(15, 23, 42, 0.7)',
          raised: 'rgba(15, 23, 42, 0.85)',
        },
      },
      fontFamily: {
        heading: ['"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(100, 255, 218, 0.25), 0 24px 70px rgba(4, 13, 25, 0.55)',
        soft: '0 0 0 1px rgba(148, 163, 184, 0.18), 0 16px 40px rgba(2, 8, 23, 0.55)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 20% -10%, rgba(100,255,218,0.35), transparent 55%), radial-gradient(circle at 80% -20%, rgba(59,130,246,0.2), transparent 60%)',
        'section-grid':
          'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
