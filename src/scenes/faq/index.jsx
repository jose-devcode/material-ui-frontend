import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const Faq = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
      <Box marginTop='20px'>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              An Important question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              dolore molestiae quisquam unde! Adipisci vitae ipsam, dolore
              laudantium vel laborum, obcaecati nam sed fuga explicabo nihil
              quae qui nulla, temporibus amet eius fugiat quasi distinctio
              quidem culpa voluptates eaque. Enim dignissimos suscipit
              perferendis amet iusto fugiat, mollitia numquam voluptas unde!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              Some random question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              dolore molestiae quisquam unde! Adipisci vitae ipsam, dolore
              laudantium vel laborum, obcaecati nam sed fuga explicabo nihil
              quae qui nulla, temporibus amet eius fugiat quasi distinctio
              quidem culpa voluptates eaque. Enim dignissimos suscipit
              perferendis amet iusto fugiat, mollitia numquam voluptas unde!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              Another Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              dolore molestiae quisquam unde! Adipisci vitae ipsam, dolore
              laudantium vel laborum, obcaecati nam sed fuga explicabo nihil
              quae qui nulla, temporibus amet eius fugiat quasi distinctio
              quidem culpa voluptates eaque. Enim dignissimos suscipit
              perferendis amet iusto fugiat, mollitia numquam voluptas unde!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              The last question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              dolore molestiae quisquam unde! Adipisci vitae ipsam, dolore
              laudantium vel laborum, obcaecati nam sed fuga explicabo nihil
              quae qui nulla, temporibus amet eius fugiat quasi distinctio
              quidem culpa voluptates eaque. Enim dignissimos suscipit
              perferendis amet iusto fugiat, mollitia numquam voluptas unde!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default Faq
