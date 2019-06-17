import React, { memo } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const Simple = ({
  width, value, setter, text, type = 'text', multiline = false, autoFocus = false
}) => {
  const handleChange = (e) => {
    const { value: inputValue } = e.target
    setter(inputValue)
  }
  return (
    <Grid item xs={12} md={6} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
      <TextField
        variant="outlined"
        autoFocus={autoFocus}
        fullWidth
        type={type}
        label={text}
        value={value}
        onChange={handleChange}
        multiline={multiline}
      />
    </Grid>
  )
}

export default memo(Simple)
