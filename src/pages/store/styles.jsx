import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  margin: 30px 0;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-top: 5rem;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 2fr;
  }
`;
