import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'

const styles = () => ({
  checkbox: {
    padding: 0,
    marginLeft: 8
  }
})

const MultiOption = ({
  width, options = [], onChange, classes, title
}) => {
  const [selected, setSelected] = useState([])
  const isSelected = i => selected.indexOf(`${i}`) >= 0
  const onChangeBox = index => () => {
    if (isSelected(index)) {
      const newSelected = selected.filter(item => item !== `${index}`)
      onChange(newSelected.join(','))
      setSelected(newSelected)
      return
    }
    const newSelected = [...selected, `${index}`]
    onChange(newSelected.join(','))
    setSelected(newSelected)
  }
  return (
    <Grid item xs={12} md={6} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
      <FormLabel>{ title }</FormLabel>
      <FormGroup>
        {
          options.map((option, index) => (
            <FormControlLabel
              labelPlacement="start"
              key={index + 1} // eslint-disable-line
              label={`${index + 1}. ${option}`}
              control={(
                <Checkbox
                  classes={{
                    root: classes.checkbox
                  }}
                  checked={isSelected(index + 1)}
                  onChange={onChangeBox(index + 1)}
                />
              )}
            />
          ))
        }
      </FormGroup>
    </Grid>
  )
}

export default withStyles(styles)(MultiOption)
