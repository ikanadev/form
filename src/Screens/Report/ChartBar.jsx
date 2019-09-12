import React from 'react'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import Chip from '@material-ui/core/Chip'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { ResponsiveBar } from '@nivo/bar'

import est from '../../utils/questions/est'

const ChartBar = ({
  open, onClose,
  chartData: {
    title, total, opts, others = [], name
  }
}) => {
  const chartData = opts.map((opt) => {
    const chartItem = {}
    chartItem.id = opt.opt === '' ? '-1' : opt.opt
    if (opt.opt === '0' || opt.opt === '') {
      chartItem.label = 'Sin Respuesta/Ninguno'
    } else {
      const optIndex = parseInt(opt.opt, 10)
      chartItem.label = est[name].options[optIndex - 1]
    }
    chartItem.value = parseInt(opt.qty, 10)
    chartItem.percent = `${((chartItem.value / total) * 100).toFixed(2)} %`
    return chartItem
  }).sort((a, b) => a.value - b.value)
  return (
    <Dialog open={open} onClose={onClose} fullWidth fullScreen>
      <DialogContent>

        <Paper style={{
          padding: 20, maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', minWidth: 900
        }}
        >
          <div style={{
            display: 'flex', height: 400, justifyContent: 'center', alignItems: 'center'
          }}
          >
            <div style={{ width: '100%', height: 400 }}>
              <ResponsiveBar
                animate
                indexBy="label"
                padding={0.3}
                borderRadius={5}
                label={l => l.data.percent}
                labelTextColor="#FFFFFF"
                colorBy="indexValue"
                layout="horizontal"
                data={chartData}
                margin={{
                  top: 20, right: 20, bottom: 30, left: 250
                }}
                colors={{ scheme: 'category10' }}
              />
            </div>
          </div>
          <br />
          <br />
          <Typography variant="h5" color="primary" align="center">
            { title }
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Opci&oacute;n</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Porcentaje</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                chartData.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{ item.label }</TableCell>
                    <TableCell>{ item.value }</TableCell>
                    <TableCell>{ `${((item.value / total) * 100).toFixed(2)}%` }</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
          <br />
          <br />
          {
            others.length > 0 && (
              <div>
                <Typography variant="h6">
                  Otras respuestas:
                </Typography>
                {
                  others.map((othersVal, index) => (
                    // eslint-disable-next-line
                    <Chip key={index} size="medium" label={othersVal} style={{ marginLeft: 10, marginBottom: 5 }} />
                  ))
                }
              </div>
            )
          }
        </Paper>
      </DialogContent>
    </Dialog>
  )
}

export default ChartBar
