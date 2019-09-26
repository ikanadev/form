import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TCell from '@material-ui/core/TableCell'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

import { ResponsiveRadar } from '@nivo/radar'
import { ResponsiveBar } from '@nivo/bar'

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

const TableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#848484',
    color: theme.palette.common.white,
    fontSize: 17,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 15
  }
}))(TCell)

const ChartLikertRadar = ({
  open, onClose, isRadar = false, route,
  chartData: {
    title, opts, name
  }
}) => {
  const [chartType, setChartType] = useState(isRadar ? 'radar' : 'bar')
  const chartData = opts.map((item, index) => {
    const chartItem = { ...item }
    chartItem.index = `Preg. ${index + 1}`
    chartItem.media = parseFloat(item.media.toFixed(2))
    chartItem.question = routeQuestions[route][name].options[index]
    return chartItem
  })
  const handleChange = ({ target: { value } }) => {
    setChartType(value)
  }
  return (
    <Dialog open={open} onClose={onClose} fullWidth fullScreen>
      <DialogContent>
        <Paper style={{
          padding: 20, maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto'
        }}
        >
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h5" color="primary" align="center">
              { title }
            </Typography>
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
              <RadioGroup aria-label="chartType" value={chartType} onChange={handleChange}>
                <FormControlLabel value="radar" control={<Radio />} label="Radar" />
                <FormControlLabel value="bar" control={<Radio />} label="Barras" />
              </RadioGroup>
            </div>
          </div>
          <br />
          <br />
          <div style={{
            display: 'flex', height: 400, justifyContent: 'center', alignItems: 'center'
          }}
          >
            <div style={{ width: '100%', height: 400 }}>
              {
                chartType === 'radar'
                  ? (
                    <ResponsiveRadar
                      enableDotLabel
                      dotLabel={d => d.value}
                      data={chartData}
                      indexBy="question"
                      maxValue={5}
                      keys={['media']}
                      borderWidth={4}
                      dotSize={10}
                      margin={{
                        top: 40, right: 40, bottom: 40, left: 40
                      }}
                    />
                  )
                  : (
                    <ResponsiveBar
                      animate
                      indexBy="question"
                      keys={['media']}
                      maxValue={5}
                      label={l => l.data.media}
                      minValue={0}
                      padding={0.3}
                      borderRadius={5}
                      labelTextColor="#FFFFFF"
                      colorBy="index"
                      layout="horizontal"
                      data={chartData}
                      margin={{
                        top: 20, right: 20, bottom: 30, left: 650
                      }}
                      colors={{ scheme: 'category10' }}
                    />
                  )
              }
            </div>
          </div>
          <br />
          <br />
          <Typography variant="h5" color="primary" align="center">
            Detalle
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Clave</TableCell>
                <TableCell>Pregunta</TableCell>
                <TableCell>Media Likert</TableCell>
                <TableCell>Votos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                chartData.map((item, index) => (
                  // eslint-disable-next-line
                  <TableRow key={index}>
                    <TableCell>{ item.index }</TableCell>
                    <TableCell>{ item.question }</TableCell>
                    <TableCell>{ item.media }</TableCell>
                    <TableCell>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              Opci&oacute;n
                            </TableCell>
                            <TableCell>
                              Cantidad
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            ['Sin respuesta', 1, 2, 3, 4, 5].map((nro, ind) => (
                              <TableRow key={nro}>
                                <TableCell>
                                  { nro }
                                </TableCell>
                                <TableCell>
                                  { item[ind] }
                                </TableCell>
                              </TableRow>
                            ))
                          }
                        </TableBody>
                      </Table>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Paper>
      </DialogContent>
    </Dialog>
  )
}

export default ChartLikertRadar
