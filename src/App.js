import GuestRoute from './routes/GuestRoute';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sistemas from './pages/Sistemas';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
