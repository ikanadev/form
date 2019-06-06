import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  fieldset: {
    position: 'relative',
    padding: 50,
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 55,
    paddingTop: 75,
    width: '100%',
    marginBottom: 25,
    backgroundColor: '#FFFFFF',
    boxShadow: '2px 2px 8px 1px rgba(135,135,135,1)',
    border: '0.5px solid rgb(135,135,135,0.5)'
  },
  legend: {
    position: 'absolute',
    top: -32,
    left: 40,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingLeft: 14,
    paddingRight: 14,
    border: '0.5px solid rgb(135,135,135,0.5)',
    borderBottom: 0
  }
})

const FieldSet = ({
  title, children, classes
}) => (
  <div className={classes.fieldset}>
    <span className={classes.legend}>
      <Typography variant="h6">
        {title}
      </Typography>
    </span>
    <Grid container spacing={10} alignItems="flex-start">
      {children}
    </Grid>
  </div>
)
export default withStyles(styles)(FieldSet)
