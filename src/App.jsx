import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';

import CartProvider from '../context/CartContext';

import Store from './pages/store/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
