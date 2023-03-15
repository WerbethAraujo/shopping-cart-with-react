import { useContext } from 'react';

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import { CartContext } from '../../../context/CartContext';
import { CardContainer } from './styles';

function Card({ product }) {
  const { id, name, image, price } = product;

  const cart = useContext(CartContext);

  const productQty = cart.getProductQuantity(id);

  return (
    <CardContainer>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h1>R${price}</h1>
      {productQty > 0 ? (
        <>
          <div className='increments'>
            <label>No carrinho: {productQty}</label>
            <div className='increments-btns'>
              <button onClick={() => cart.addOneToCart(id)} className='plus'>
                <AiOutlinePlusCircle />
              </button>
              <button
                onClick={() => cart.removeOneFromCart(id)}
                className='minus'
              >
                <AiOutlineMinusCircle />
              </button>
            </div>
          </div>
          <button className='btn-danger'>Remover do Carrinho</button>
        </>
      ) : (
        <button onClick={() => cart.addOneToCart(id)}>
          Adicionar ao carrinho
        </button>
      )}
    </CardContainer>
  );
}

export default Card;
