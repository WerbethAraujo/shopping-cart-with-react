import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container, Nav } from './styles';

import Modal from '../modal';

import { useState } from 'react';

function Navbar() {
  const [isShowModal, setIsShowModal] = useState(false);

  function handleShowModal() {
    setIsShowModal(true);
  }

  function handleCloseModal() {
    setIsShowModal(false);
  }

  return (
    <>
      {isShowModal && <Modal onCloseModal={handleCloseModal} />}
      <Container>
        <Nav>
          <h1>Ecommerce Store</h1>
          <button onClick={handleShowModal}>
            <AiOutlineShoppingCart />
            <span>0</span>
          </button>
        </Nav>
      </Container>
    </>
  );
}

export default Navbar;
