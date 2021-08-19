import Typography from 'typography'
import colors from '../style/colors'

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
    'a, a:visited': {
      color: colors.link,
    },
  }),
})
export default typography
