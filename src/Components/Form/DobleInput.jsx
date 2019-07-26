import React, { memo, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const DobleInput = ({
  setter,
  value,
  width,
  text1,
  text2
}) => {
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  useEffect(() => {
    setter(`${val1},${val2}`)
  }, [val1, val2])
  useEffect(() => {
    if (value === '') {
      setVal1('')
      setVal2('')
    }
  }, [value])
  useEffect(() => {
    if (value !== '') {
      const [val1Arr, val2Arr] = value.split(',')
      setVal1(val1Arr)
      setVal2(val2Arr)
    }
  }, [])
  const handleChange1 = ({ target: { value: val } }) => setVal1(val)
  const handleChange2 = ({ target: { value: val } }) => setVal2(val)
  return (
    <Grid item xs={12} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
      <Grid container direction="row" justify="space-around" spacing={8}>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            value={val1}
            fullWidth
            label={text1}
            type="text"
            onChange={handleChange1}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            value={val2}
            fullWidth
            label={text2}
            type="text"
            onChange={handleChange2}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default memo(DobleInput)
