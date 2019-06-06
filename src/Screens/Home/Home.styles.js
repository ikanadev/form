export default theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  drawerIcon: {
    position: 'absolute',
    top: theme.spacing(2),
    left: 0,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    fontSize: 40,
    cursor: 'pointer',
    boxSizing: 'content-box',
    transition: 'all 0.4s',
    '&:hover': {
      backgroundColor: '#ffffff',
      boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
      borderTopRightRadius: theme.spacing(1),
      borderBottomRightRadius: theme.spacing(1)
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative'
    }
  }
})
