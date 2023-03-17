import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container, Nav } from './styles';

import { CartContext } from '../../context/CartContext';

import { useContext } from 'react';

function Navbar({ onShowModal }) {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Container>
        <Nav>
          <h1>Ecommerce Store</h1>
          <button onClick={onShowModal}>
            <AiOutlineShoppingCart />
            <span>{productsCount}</span>
          </button>
        </Nav>
      </Container>
    </>
  );
}

export default Navbar;
