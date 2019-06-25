import React, { useState, useEffect, memo } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Typography from '@material-ui/core/Typography'

const styles = () => ({
  cont: {
    display: 'flex',
    orientation: 'horizontal',
    marginBottom: 0
  },
  text: {
    flex: 2
  },
  option: {
    flex: 1
  },
  root: {
    padding: 0
  }
})

const Multiple = ({
  width,
  title,
  options = [],
  classes,
  setter,
  value
}) => {
  const [answers, setAnswers] = useState(options.map(() => 0))
  const changeInput = pos => (ev) => {
    const newAnswers = answers.map((val, index) => {
      if (index === pos) {
        return Number(ev.target.value)
      }
      return val
    })
    setAnswers(newAnswers)
  }
  useEffect(() => {
    setter(answers.join(','))
  }, [answers])
  useEffect(() => {
    if (value === '') {
      setAnswers(options.map(() => 0))
    }
  }, [value])
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={width}
      style={{
        margin: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 6,
        backgroundColor: '#ededed',
        borderRadius: 4
      }}
    >
      <FormLabel>{ title }</FormLabel>
      <FormGroup>
        {
          answers.map((answer, index) => (
            <div
              className={classes.cont}
              key={index} // eslint-disable-line
            >
              <Typography
                className={classes.text}
                variant="body1"
              >
                {`${index + 1}. ${options[index]}`}
              </Typography>
              <TextField
                className={classes.option}
                classes={{
                  root: classes.root
                }}
                key={index} // eslint-disable-line
                variant="outlined"
                select
                fullWidth
                value={answer}
                onChange={changeInput(index)}
                SelectProps={{
                  native: true
                }}
                inputProps={{
                  style: {
                    padding: 5
                  }
                }}
              >
                {
                  [0, 1, 2, 3, 4, 5].map((_, i) => (
                    <option key={i} value={i}> {/* eslint-disable-line */}
                      {i}
                    </option>
                  ))
                }
              </TextField>
            </div>
          ))
        }
      </FormGroup>
    </Grid>
  )
}

export default memo(withStyles(styles)(Multiple), (prevProps, nextProps) => {
  if (prevProps.options.length === nextProps.options.length && prevProps.value === nextProps.value) {
    return true
  }
  return false
})
