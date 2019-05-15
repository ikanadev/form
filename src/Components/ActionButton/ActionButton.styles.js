export default theme => ({
  container: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    display: 'flex'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
    display: 'flex'
  },
  buttonProgress: {
    color: '#424242',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
})
