import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 450px;
  gap: 2rem;
  border-radius: 5px;
  transition: 0.5s;
  border: 1px solid transparent;
  transform: scale(0.98);

  &:hover {
    transform: scale(1);
    border-color: #000;
  }
  img {
    width: 200px;
    height: 200px;
  }

  button {
    background: #3535ec;
    color: #fff;
    border: none;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 5px;

    &:hover {
      background: #4444f3;
    }
  }
`;
