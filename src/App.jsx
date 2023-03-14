import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';

import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
