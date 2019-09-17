import React, { useEffect, useState, Fragment } from 'react'
import { withSnackbar } from 'notistack'
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import InsertChartIcon from '@material-ui/icons/InsertChartOutlinedOutlined'

import ChartPie from './ChartPie'
import ChartBar from './ChartBar'
import ChartLikertRadar from './ChartLikertRadar'

import { axios, endpoints } from '../../utils'

const charts = {
  select: (open, onClose, chartData) => (
    <ChartPie
      open={open}
      onClose={onClose}
      chartData={chartData}
      title={chartData.title}
      data={chartData.opts}
      others={chartData.others ? chartData.others : []}
      name={chartData.name}
    />
  ),
  multiple: (open, onClose, chartData) => (
    <ChartBar
      open={open}
      onClose={onClose}
      chartData={chartData}
    />
  ),
  likertRadar: (open, onClose, chartData) => (
    <ChartLikertRadar
      open={open}
      onClose={onClose}
      chartData={chartData}
      isRadar
    />
  ),
  likertBar: (open, onClose, chartData) => (
    <ChartLikertRadar
      open={open}
      onClose={onClose}
      chartData={chartData}
    />
  )
}

const Report = ({
  history,
  enqueueSnackbar,
  location: { state: { form } }
}) => {
  const [data, setData] = useState([])
  const [expandedItems, setExpandedItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [chartData, setChartData] = useState(null)
  const fetchData = () => {
    axios.get(endpoints.getReport(form.route))
      .then(({ data: { content: { res } } }) => {
        setData(res)
      })
      .catch((err) => {
        enqueueSnackbar(`Error obteniendo data: ${err.message}`, { variant: 'error' })
        history.goBack()
      })
  }

  const handleExpand = index => () => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(item => item !== index))
    } else {
      setExpandedItems([...expandedItems, index])
    }
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const handleChartData = (chartItem, name) => () => {
    setChartData({ ...chartItem, name })
    handleModal()
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Paper style={{ padding: 20 }}>
        <Typography variant="h4" color="primary" align="center">
          { form.name }
        </Typography>
        <br />
        <br />
        <List>
          {
            data.map((item, index) => (
              // eslint-disable-next-line
              <Fragment key={index}>
                <ListItem button onClick={handleExpand(index)}>
                  <ListItemText primary={item.name} />
                  {expandedItems.includes(index) ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expandedItems.includes(index)} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {
                      Object.keys(item.data).map(name => (
                        <ListItem button key={name} onClick={handleChartData(item.data[name], name)}>
                          <ListItemIcon>
                            <InsertChartIcon />
                          </ListItemIcon>
                          <ListItemText primary={item.data[name].title} />
                        </ListItem>
                      ))
                    }
                  </List>
                </Collapse>
              </Fragment>
            ))
          }
        </List>
      </Paper>
      {
        chartData && charts[chartData.type](showModal, handleModal, chartData)
      }
    </div>
  )
}

export default withSnackbar(Report)
