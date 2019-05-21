import React, { useState, useRef, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const styles = () => ({
  input: {
    height: 0,
    overflow: 'hidden'
  }
})

const Option = ({
  width, value, onChange, text, autoFocus = false, options = [], classes
}) => {
  const otherRef = useRef(null)
  const [withInput, setWithInput] = useState(false)
  const [otherValue, setOtherValue] = useState('')
  const onChangeSelect = (e) => {
    const { value: valueSelect } = e.target
    if (valueSelect === (`${options.length}`)) {
      setWithInput(true)
      return
    }
    setWithInput(false)
    onChange(e)
  }
  const onChangeOther = (e) => {
    const { value: valueOther } = e.target
    setOtherValue(valueOther)
    onChange(e)
  }

  useEffect(() => {
    if (withInput) {
      otherRef.current.focus()
    }
  }, [withInput])
  return (
    <Grid item xs={12} md={6} lg={width} style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 6 }}>
      <TextField
        variant="outlined"
        select
        autoFocus={autoFocus}
        fullWidth
        label={text}
        value={withInput ? `${options.length}` : value}
        onChange={onChangeSelect}
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
      <TextField
        disabled={!withInput}
        className={!withInput ? classes.input : null}
        fullWidth
        value={otherValue}
        placeholder="Ingrese aquí el texto"
        onChange={onChangeOther}
        inputProps={{
          ref: otherRef
        }}
      />
    </Grid>
  )
}

export default withStyles(styles)(Option)
