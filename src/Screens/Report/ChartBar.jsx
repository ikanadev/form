import React from 'react'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'

const ChartBar = ({
  open, onClose,
  chartData
}) => {
  console.log(chartData)
  return (
    <Modal open={open} onClose={onClose}>
      <Paper style={{
        padding: 20, maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto'
      }}
      >
        <div style={{
          display: 'flex', height: 400, justifyContent: 'center', alignItems: 'center'
        }}
        >
          <div style={{ width: '100%', height: 400 }}>
            hello there
          </div>
        </div>
        <br />
        <br />
      </Paper>
    </Modal>
  )
}

export default ChartBar
