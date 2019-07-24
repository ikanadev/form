import React, { memo } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './ActionButton.styles'

const ActionButton = ({
  onClick,
  loading = false,
  classes,
  full = false,
  iconLeft = null,
  iconRight = null,
  text = '',
  typeButton = 'button',
  secondary = false
}) => (
  <div className={classes.container}>
    <Button
      onClick={onClick}
      fullWidth={full}
      variant="contained"
      color={secondary ? 'secondary' : 'primary'}
      disabled={loading}
      type={typeButton}
    >
      {iconLeft}
      {` ${text} `}
      <span className={classes.rightIcon}>
        {iconRight}
      </span>
    </Button>
    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
  </div>
)

export default memo(withStyles(styles)(ActionButton))
