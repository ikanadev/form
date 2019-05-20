import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const Simple = ({
  width, value, onChange, text, type = 'text', multiline = false, autoFocus = false
}) => (
  <Grid item xs={12} md={6} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
    <TextField
      autoFocus={autoFocus}
      fullWidth
      type={type}
      label={text}
      value={value}
      onChange={onChange}
      multiline={multiline}
    />
  </Grid>
)

export default Simple
