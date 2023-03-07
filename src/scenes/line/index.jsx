import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'

const Line = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
      <Header title='Bar Chart' subtitle='Simple Bar Chart'></Header>
      <Box height='75vh'>
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line
