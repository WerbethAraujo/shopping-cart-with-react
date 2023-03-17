import Card from '../../components/card';

import { productsArray } from '../../data/productsData';

import { Container, Header } from './styles';

function Store() {
  return (
    <>
      <Header>
        <h1>Bem Vindo a Nossa Loja</h1>
      </Header>
      <Container>
        {productsArray.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </Container>
    </>
  );
}

export default Store;
