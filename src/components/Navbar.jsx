import { Button, Container, Navbar, Modal } from 'react-bootstrap';

import { AiOutlineShoppingCart } from 'react-icons/ai';

function NavbarComponent() {
  return (
    <Navbar expand='sm'>
      <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className='justify-content-end'>
        <Button>
          <AiOutlineShoppingCart /> 0
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
