import React, {
  useState, useRef, useEffect, memo
} from 'react'
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
  width, value, setter, text, autoFocus = false, options = [], classes
}) => {
  const otherRef = useRef(null)
  const [withInput, setWithInput] = useState(false)
  // const [otherValue, setOtherValue] = useState('')
  const onChangeSelect = (e) => {
    const { value: valueSelect } = e.target
    if (valueSelect === (`${options.length}`)) {
      setWithInput(true)
      return
    }
    setWithInput(false)
    setter(valueSelect)
  }
  const onChangeOther = (e) => {
    const { value: valueOther } = e.target
    // setOtherValue(valueOther)
    setter(valueOther)
  }

  useEffect(() => {
    if (withInput) {
      setter('')
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
        <option value={0}>0. Ninguno</option>
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
        value={withInput && value}
        placeholder="Ingrese aquí el texto"
        onChange={onChangeOther}
        inputProps={{
          ref: otherRef
        }}
      />
    </Grid>
  )
}

export default memo(withStyles(styles)(Option), (prevProps, nextProps) => {
  if (prevProps.options.length === nextProps.options.length && prevProps.value === nextProps.value) {
    return true
  }
  return false
})
