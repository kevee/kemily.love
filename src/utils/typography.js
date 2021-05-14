import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '24px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Spectral', 'Georgia', 'serif'],
  headerWeight: 'bold',
  bodyFontFamily: ['Karla', 'Helvetica', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    li: {
      marginBottom: rhythm(1 / 4),
    },
  }),
})
export default typography
