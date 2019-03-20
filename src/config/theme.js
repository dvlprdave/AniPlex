const colors = {
  primary: '#187791', // Color for buttons or links
  background: '#9b89b3', // Background color
  button: '#599bb3', // Button color 
  inputBackground: 'rgba(57, 63, 84, 0.8)', // Input background color
  inputTextActive: '#BFD2FF'
}

const transitions = {
  normal: '0.5s',
}

const fontSize = {
  small: '0.9rem'
}

const fontFamily = {
  serif: `'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  cursive: `'Lilita One', cursive`
}

const breakpoints = {
  tablet: '1200px',
  phone: '600px'
}

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '1000px',
  baseFontSize: '16px',
}

export default theme