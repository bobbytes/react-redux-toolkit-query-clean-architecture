import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Main from './layout/Main';
import PizzaPage from './pages/PizzaPage';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<PizzaPage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App
