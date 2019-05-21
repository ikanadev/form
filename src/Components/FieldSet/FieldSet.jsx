import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  fieldset: {
    paddingBottom: 18,
    paddingTop: 0,
    borderRadius: 14,
    borderColor: '#cbcbcb',
    width: '100%'
  }
})

const FieldSet = ({
  title, children, classes
}) => (
  <fieldset className={classes.fieldset}>
    <legend>
      <Typography variant="subtitle1">
        {title}
      </Typography>
    </legend>
    <Grid container spacing={8} alignItems="flex-start">
      {children}
    </Grid>
  </fieldset>
)
export default withStyles(styles)(FieldSet)
