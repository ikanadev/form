import React from 'react'
import Typography from '@material-ui/core/Typography'

const Title = ({ title }) => (
  <div>
    <br />
    <Typography color="primary" variant="h4" align="center">
      {title}
    </Typography>
    <br />
  </div>
)

export default Title
