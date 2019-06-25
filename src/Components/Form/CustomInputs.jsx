import React, { useState, useEffect, memo } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ChipInput from 'material-ui-chip-input'

const styles = () => ({
  input: {
    marginTop: -8
  }
})

const CustomInputs = ({
  width, text, classes, setter, upTo = 1, value
}) => {
  const [options, setOptions] = useState([])
  const [customOptions, setCustomOptions] = useState([])
  const addChip = (chip) => {
    if (/^-?[\d.]+(?:e-?\d+)?$/.test(chip)) {
      if (Number(chip) > upTo || Number(chip) === 0) {
        return
      }
      setOptions([...options, chip])
      return
    }
    setCustomOptions([...customOptions, chip])
  }
  const deleteChip = (chip) => {
    setOptions(options.filter(chipItem => chipItem !== chip))
    setCustomOptions(customOptions.filter(chipItem => chipItem !== chip))
  }
  useEffect(() => {
    setter(`${options.join(',')};${customOptions.join(',')}`)
  }, [options, customOptions])
  useEffect(() => {
    if (value === '') {
      setOptions([])
      setCustomOptions([])
    }
  }, [value])
  return (
    <Grid item xs={12} md={6} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
      <ChipInput
        variant="outlined"
        value={[...options, ...customOptions]}
        onAdd={addChip}
        onDelete={deleteChip}
        fullWidth
        label={text}
        placeholder="Ingrese las opciones"
        classes={{
          root: classes.input
        }}
      />
    </Grid>
  )
}

export default withStyles(styles)(memo(CustomInputs))
