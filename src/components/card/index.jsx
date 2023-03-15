import { CardContainer } from './styles';

function Card({ product }) {
  return (
    <CardContainer>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h1>R${product.price}</h1>

      <button>Adicionar ao carrinho</button>
    </CardContainer>
  );
}

export default Card;
