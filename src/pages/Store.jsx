import { Row, Col } from 'react-bootstrap';

import ProductCard from '../components/ProductCard';

import { productsArray } from '../../productsData';

function Store() {
  return (
    <>
      <h1 align='center' className='p-3'>
        Bem Vindo a Nossa Loja!
      </h1>
      <Row xs={1} md={3} className='g-4'>
        {productsArray.map((product) => (
          <Col align='center' key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
