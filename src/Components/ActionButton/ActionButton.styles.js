export default theme => ({
  container: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  leftIcon: {
    marginRight: theme.spacing(1),
    display: 'flex'
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
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
