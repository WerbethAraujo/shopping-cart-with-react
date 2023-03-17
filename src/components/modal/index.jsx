import { useContext } from 'react';
import { CgCloseR } from 'react-icons/cg';

import CartProduct from '../cartProduct';

import { CartContext } from '../../context/CartContext';

import { Overlay, Container } from './styles';

function Modal({ onCloseModal }) {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const total = cart.getTotalCost();

  return (
    <Overlay>
      <Container>
        <h2>Carrinho de Compras</h2>
        <span onClick={onCloseModal}>
          <CgCloseR />
        </span>
        {productsCount > 0 ? (
          <div className='productsModal'>
            <h3>Items no carrinho:</h3>
            {cart.items.map((currentProduct, idx) => (
              <CartProduct
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
              />
            ))}

            <h1>Total: R${total}</h1>
            <button className='confirm-btn'>Confirmar Compra</button>
          </div>
        ) : (
          <h1>O seu carrinho está vazio!😭</h1>
        )}
      </Container>
    </Overlay>
  );
}

export default Modal;
