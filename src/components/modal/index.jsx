import { CgCloseR } from 'react-icons/cg';

import { Overlay, Container } from './styles';

function Modal({ onCloseModal }) {
  return (
    <Overlay>
      <Container>
        <h1>Modal</h1>
        <span onClick={onCloseModal}>
          <CgCloseR />
        </span>
      </Container>
    </Overlay>
  );
}

export default Modal;
