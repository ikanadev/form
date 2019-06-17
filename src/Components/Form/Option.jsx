import React, { memo } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const Option = ({
  width, value, setter, text, autoFocus = false, options = []
}) => {
  const handleChange = (e) => {
    const { value: optionValue } = e.target
    setter(optionValue)
  }
  return (
    <Grid item xs={12} md={6} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
      <TextField
        variant="outlined"
        select
        autoFocus={autoFocus}
        fullWidth
        label={text}
        value={value}
        onChange={handleChange}
        SelectProps={{
          native: true
        }}
      >
        <option value={0}>0. Ninguno</option>
        {
          options.map((option, index) => (
            <option key={index} value={index + 1}> {/* eslint-disable-line */}
              {`${index + 1}. ${option}`}
            </option>
          ))
        }
      </TextField>
    </Grid>
  )
}

export default memo(Option, (prevProps, nextProps) => {
  if (prevProps.options.length === nextProps.options.length && prevProps.value === nextProps.value) {
    return true
  }
  return false
})
