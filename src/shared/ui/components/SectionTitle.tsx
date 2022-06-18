import React, { FC, PropsWithChildren } from 'react'
import Typography from '@mui/material/Typography'

type SectionTitleProps = PropsWithChildren<unknown>

const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <Typography color="primary" variant="h2" gutterBottom>
      {children}
    </Typography>
  )
}

export default SectionTitle
