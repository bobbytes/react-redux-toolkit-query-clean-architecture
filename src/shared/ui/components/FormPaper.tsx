import React, { FC, PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import SectionTitle from './SectionTitle'

type FormPaperProps = PropsWithChildren<{
  title: string,
}>

const FormPaper: FC<FormPaperProps> = ({ title, children }) => {
  return (
    <Box>
      <SectionTitle>
        {title}
      </SectionTitle>
      <Paper sx={{ p: 2 }}>
        {children}
      </Paper >
    </Box>
  )
}

export default FormPaper
