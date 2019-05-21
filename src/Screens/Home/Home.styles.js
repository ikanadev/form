export default theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.unit * 2
  },
  paperContainer: {
    backgroundColor: '#C9E0FF',
    padding: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerIcon: {
    position: 'absolute',
    top: theme.spacing.unit * 2,
    left: 0,
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    fontSize: 40,
    cursor: 'pointer',
    boxSizing: 'content-box',
    transition: 'all 0.4s',
    '&:hover': {
      backgroundColor: '#ffffff',
      boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
      borderTopRightRadius: theme.spacing.unit,
      borderBottomRightRadius: theme.spacing.unit
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative'
    }
  }
})
