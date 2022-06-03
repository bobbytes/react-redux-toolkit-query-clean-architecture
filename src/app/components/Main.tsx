import React, { FC, PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

type MainProps = PropsWithChildren<unknown>

const Main: FC<MainProps> = ({ children }) => (
  <Box
    component="main"
    sx={{ pt: 3 }}
  >
    <Container maxWidth="xl">
      {children}
    </Container>
  </Box>
)

export default Main
