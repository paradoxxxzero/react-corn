const theme = {
  color: {
    base: 'hsl(0, 0%, 50%)',
    modified: 'hsl(0, 0%, 25%)',
    error: 'hsl(0, 100%, 50%)',
    suggestion: 'hsl(180, 100%, 30%)',
  },
  backgroundColor: {
    base: 'transparent',
  },
}

export const withTheme = Component => {
  Component.defaultProps = { theme }
  return Component
}

export default theme
