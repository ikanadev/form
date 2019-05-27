import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  fieldset: {
    padding: 25,
    borderWidth: 0,
    borderRadius: 5,
    width: '100%',
    marginBottom: 25,
    backgroundColor: '#FFFFFF'
  }
})

const FieldSet = ({
  title, children, classes
}) => (
  <fieldset className={classes.fieldset}>
    <legend style={{
      backgroundColor: '#FFFFFF', borderRadius: 5, paddingLeft: 14, paddingRight: 14
    }}
    >
      <Typography variant="h6">
        {title}
      </Typography>
    </legend>
    <Grid container spacing={32} alignItems="flex-start">
      {children}
    </Grid>
  </fieldset>
)
export default withStyles(styles)(FieldSet)
