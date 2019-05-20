import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ChipInput from 'material-ui-chip-input'

const styles = () => ({
  input: {
    marginTop: -8
  }
})

const CustomInputs = ({
  width, text, classes, onChange
}) => {
  const [chips, setChips] = useState([])
  const addChip = (chip) => {
    const newChips = [...chips, chip]
    onChange(newChips.join(','))
    setChips(newChips)
  }
  const deleteChip = (chip, index) => {
    const newChips = chips.filter((_, i) => (i !== index))
    onChange(newChips.join(','))
    setChips(newChips)
  }
  return (
    <Grid item xs={12} md={6} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
      <ChipInput
        value={chips}
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

export default withStyles(styles)(CustomInputs)
