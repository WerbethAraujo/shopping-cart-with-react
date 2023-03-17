import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Modal from './components/modal';

import CartProvider from './context/CartContext';

import Store from './pages/store/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  function handleShowModal() {
    setIsShowModal(true);
  }

  function handleCloseModal() {
    setIsShowModal(false);
  }

  return (
    <CartProvider>
      {isShowModal && <Modal onCloseModal={handleCloseModal} />}
      <Navbar onShowModal={handleShowModal} />
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
