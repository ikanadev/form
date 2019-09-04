import React from 'react'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { ResponsivePie } from '@nivo/pie'

import est from '../../utils/questions/est'

const Chart = ({
  title, open, data, onClose, name
}) => {
  if (!data) {
    return <br />
  }
  const chartData = data.map((item) => {
    const chartItem = {}
    if (item.opt === '0') {
      chartItem.id = '-1'
    } else {
      chartItem.id = item.opt
    }
    if (item.opt === '0' || item.opt === '') {
      chartItem.label = 'Sin Respuesta'
    } else {
      chartItem.label = est[name].options[item.opt - 1]
    }
    chartItem.value = parseInt(item.qty, 10)
    return chartItem
  })
  return (
    <Modal open={open} onClose={onClose}>
      <Paper style={{
        padding: 20, maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto'
      }}
      >
        <Typography variant="h5" color="primary">
          { title }
        </Typography>
        <div style={{
          display: 'flex', height: 500, justifyContent: 'center'
        }}
        >
          <div style={{ width: '100%', height: 500, maxWidth: 500 }}>
            <ResponsivePie
              animate
              data={chartData}
              radialLabel="label"
              margin={{
                top: 10, right: 110, bottom: 10, left: 110
              }}
              innerRadius={0.5}
              cornerRadius={6}
              padAngle={1}
              colors={{ scheme: 'category10' }}
              slicesLabelsTextColor="#FFFFFF"
            />
          </div>
        </div>
      </Paper>
    </Modal>
  )
}

export default Chart
