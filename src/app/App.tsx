import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import PizzaPage from '../features/pizza/ui/pages/PizzaPage';
import Header from './components/Header';
import Main from './components/Main';

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
