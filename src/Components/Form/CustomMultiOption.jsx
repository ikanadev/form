import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  checkbox: {
    padding: 0,
    marginLeft: 8
  },
  listItem: {
    padding: 4
  },
  textItem: {
    width: '100%',
    textAlign: 'right'
  }
})

const CustomMultiOption = ({
  width, options = [], onChange, classes, title
}) => {
  const [selected, setSelected] = useState([])
  const [customList, setCustomList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const generateString = () => {
    let res = selected.join(',')
    if (customList.length > 0) {
      res = `${res};${customList.join(',')}`
    }
    return res
  }

  const isSelected = i => selected.indexOf(`${i}`) >= 0
  const onChangeBox = index => () => {
    if (isSelected(index)) {
      const newSelected = selected.filter(item => item !== `${index}`)
      setSelected(newSelected)
      onChange(generateString())
      return
    }
    const newSelected = [...selected, `${index}`]
    setSelected(newSelected)
    onChange(generateString())
  }
  const handleInput = (e) => {
    const { value } = e.target
    setInputValue(value)
  }
  const handleInputEnter = (ev) => {
    if (ev.key === 'Enter') {
      setCustomList([...customList, inputValue])
      setInputValue('')
      ev.preventDefault()
    }
  }

  useEffect(() => {
    onChange(generateString())
  }, [selected, customList])

  return (
    <Grid item xs={12} md={6} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 20 }}>
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
        <List>
          {
            customList.map((listItem, index) => (
              <ListItem key={index} divider dense className={classes.listItem}> {/* eslint-disable-line */}
                <Typography variant="body2" className={classes.textItem}>
                  { listItem }
                </Typography>
              </ListItem>
            ))
          }
        </List>
        <TextField
          fullWidth
          value={inputValue}
          placeholder="Otros...."
          onChange={handleInput}
          onKeyPress={handleInputEnter}
        />
      </FormGroup>
    </Grid>
  )
}

export default withStyles(styles)(CustomMultiOption)
