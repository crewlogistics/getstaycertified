/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111921',          // dark navy (nav, hero, footer, featured card)
        mist: '#e5e8ec',         // light gray section bg
        coral: '#fb432c',         // brand CTA accent
        'coral-hover': '#e83b26',
        muted: '#444444',         // nav link gray
        rule: '#e3e6ea',          // hairline borders on light cards
        tick: '#37b1f3',          // circular tick icon background (from live CSS)
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['85px', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '500' }],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
