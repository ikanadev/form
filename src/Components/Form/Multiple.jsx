import React, { useState, useEffect } from 'react'
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
  onChange
}) => {
  const [answers, setAnswers] = useState(options.map(() => 1))
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
    onChange(answers.join(','))
  }, [answers])
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
          options.map((option, index) => (
            <div
              className={classes.cont}
              key={index} // eslint-disable-line
            >
              <Typography
                className={classes.text}
                variant="body1"
              >
                {`${index + 1}. ${option}`}
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
                  [1, 2, 3, 4, 5].map((_, i) => (
                    <option key={i} value={i + 1}> {/* eslint-disable-line */}
                      {i + 1}
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

export default withStyles(styles)(Multiple)
