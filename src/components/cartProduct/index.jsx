import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getProductData } from '../../data/productsData';

import { Container } from './styles';

function CartProduct({ id, quantity }) {
  const cart = useContext(CartContext);

  const productData = getProductData(id);
  return (
    <Container>
      <img src={productData.image} alt={productData.name} />
      <h3>{productData.name}</h3>
      <p>Total: {quantity}</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>

      <button onClick={() => cart.deleteFromCart(id)}>Remover</button>
      <hr />
    </Container>
  );
}

export default CartProduct;
