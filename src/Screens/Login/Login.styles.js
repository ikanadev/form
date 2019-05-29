export default theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    width: '50%',
    minWidth: 500,
    padding: theme.spacing(2)
  },
  margin: {
    margin: theme.spacing(2)
  }
})
