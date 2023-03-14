import { Card, Button, Form, Row, Col, Image } from 'react-bootstrap';

function ProductCard({ product }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>R${product.price}</Card.Text>
        <Button variant='primary'>Adicionar ao carrinho</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
