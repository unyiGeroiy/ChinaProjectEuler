import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './App.tsx';
import TaskPage from './taskPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/task/:id' element={<TaskPage />} />
    </Routes>
  </Router>
  </StrictMode>
);

