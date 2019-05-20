import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const Option = ({
  width, value, onChange, text, autoFocus = false, options = []
}) => (
  <Grid item xs={12} md={6} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
    <TextField
      select
      autoFocus={autoFocus}
      fullWidth
      label={text}
      value={value}
      onChange={onChange}
      SelectProps={{
        native: true
      }}
    >
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

export default Option
