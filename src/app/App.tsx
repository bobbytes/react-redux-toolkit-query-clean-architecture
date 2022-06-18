import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'
import theme from './plugins/theme'
import PizzaPage from './pages/PizzaPage'
import Header from './components/Header'
import Main from './components/Main'
import CheckoutPage from './pages/CheckoutPage'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<PizzaPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Main>
    </ThemeProvider>
  )
}

export default App
