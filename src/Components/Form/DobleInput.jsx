import React, { memo, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const DobleInput = ({
  setter,
  value,
  width,
  text1,
  text2,
  withOther = false
}) => {
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [val3, setVal3] = useState('')
  useEffect(() => {
    setter(`${val1},${val2},${val3}`)
  }, [val1, val2, val3])
  useEffect(() => {
    if (value === '') {
      setVal1('')
      setVal2('')
      setVal3('')
    }
  }, [value])
  const handleChange1 = ({ target: { val } }) => setVal1(val)
  const handleChange2 = ({ target: { val } }) => setVal2(val)
  const handleChange3 = ({ target: { val } }) => setVal3(val)
  return (
    <Grid item xs={12} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
      <Grid container direction="row">
        <Grid item xs={6}>
          <TextField
            value={val1}
            fullWidth
            label={text1}
            type="text"
            onChange={handleChange1}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={val2}
            fullWidth
            label={text2}
            type="text"
            onChange={handleChange2}
          />
        </Grid>
      </Grid>
      <TextField
        disabled={!withOther}
        style={withOther || { height: 0, overflow: 'hidden' }}
        value={val3}
        fullWidth
        label="Otros:"
        type="text"
        onChange={handleChange3}
      />
    </Grid>
  )
}

export default memo(DobleInput)
