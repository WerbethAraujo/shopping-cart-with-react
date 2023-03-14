import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container, Nav } from './styles';

function Navbar() {
  return (
    <Container>
      <Nav>
        <h1>Ecommerce Store</h1>
        <button>
          <AiOutlineShoppingCart />
          <span>0</span>
        </button>
      </Nav>
    </Container>
  );
}

export default Navbar;
