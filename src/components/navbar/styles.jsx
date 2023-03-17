import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: #fff;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  height: auto;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
  }

  button {
    position: relative;
    background: #3535ec;
    border: none;
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;

    svg {
      font-size: 1.8rem;
    }

    span {
      background: #ff0000;
      padding: 5px;
      position: absolute;
      border-radius: 25px;
      top: 0px;
      right: 20px;
    }
  }
`;
