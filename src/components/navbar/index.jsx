import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container, Nav } from './styles';

import { CartContext } from '../../../context/CartContext';

import Modal from '../modal';

import { useState, useContext } from 'react';

function Navbar() {
  const cart = useContext(CartContext);

  const [isShowModal, setIsShowModal] = useState(false);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

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
            <span>{productsCount}</span>
          </button>
        </Nav>
      </Container>
    </>
  );
}

export default Navbar;
