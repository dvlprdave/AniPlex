const colors = {
  white: '#fff',
  darkGrey: '#1e1e1e',
  primary: '#187791',
  firstLetter: '#bf0760', // Anime title first letter 
  background: '#333333', // Background color
  button: '#599bb3', // Button color 
  buttonBg: 'gold',
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
  cursive: `'Lilita One', 'Carter One', cursive`
}

const formStyle = {
  borderRadius: '5px',
  color: 'red'
}

const buttonStyle = {
  border: 'none',
  backgroundColor: '#4834d4',
  backgroundImage: 'linear-gradient(315deg, #4834d4 0%, #0c0c0c 74%)',
  borderRadius: '1rem'
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
  formStyle,
  maxWidth: '1000px',
  baseFontSize: '16px',
  buttonStyle
}

export default theme