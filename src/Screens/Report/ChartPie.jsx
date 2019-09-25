import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import Chip from '@material-ui/core/Chip'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { ResponsivePie } from '@nivo/pie'

import est from '../../utils/questions/est'
import pro from '../../utils/questions/pro'
import ins from '../../utils/questions/inst'
import pre from '../../utils/questions/pre'
import doc from '../../utils/questions/doc'

const routeQuestions = {
  'form-est': est,
  'form-pro': pro,
  'form-ins': ins,
  'form-pre': pre,
  'form-doc': doc
}

const ChartPie = ({
  open, onClose, route,
  chartData: {
    title, opts, name, total, others = []
  }
}) => {
  if (!opts) {
    return <br />
  }
  const chartData = opts.map((item) => {
    const chartItem = {}
    if (item.opt === '0') {
      chartItem.id = '-1'
    } else {
      chartItem.id = item.opt
    }
    if (item.opt === '0' || item.opt === '') {
      chartItem.label = 'Sin Respuesta/Ninguno'
    } else {
      const optIndex = parseInt(item.opt, 10)
      if (optIndex) {
        chartItem.label = routeQuestions[route][name].options[item.opt - 1]
      } else {
        chartItem.label = routeQuestions[route][name].options[item.opt]
      }
    }
    chartItem.value = parseInt(item.qty, 10)
    chartItem.percent = `${((chartItem.value / total) * 100).toFixed(2)} %`
    return chartItem
  }).sort((a, b) => b.value - a.value)
  return (
    <Dialog open={open} onClose={onClose} fullWidth fullScreen>
      <DialogContent>
        <Paper style={{
          padding: 20, maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto'
        }}
        >
          <div style={{
            display: 'flex', height: 400, justifyContent: 'center', alignItems: 'center'
          }}
          >
            <div style={{ width: '100%', height: 400 }}>
              <ResponsivePie
                animate
                sortByValue
                radialLabelsSkipAngle={5}
                startAngle={-90}
                data={chartData}
                radialLabel="label"
                sliceLabel="percent"
                margin={{
                  top: 20, right: 170, bottom: 20, left: 170
                }}
                innerRadius={0.5}
                cornerRadius={6}
                padAngle={1}
                colors={{ scheme: 'category10' }}
                slicesLabelsTextColor="#FFFFFF"
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
          {
            others && others.length > 0 && (
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

export default ChartPie
