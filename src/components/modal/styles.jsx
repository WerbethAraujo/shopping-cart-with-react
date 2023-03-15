import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  position: relative;
  background: #fff;
  max-width: 500px;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  span {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
