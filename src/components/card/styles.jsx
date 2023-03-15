import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 2rem;
  border-radius: 5px;
  transition: 0.5s;
  border: 1px solid transparent;
  transform: scale(0.98);
  padding: 2rem;

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

    cursor: pointer;

    &:hover {
      background: #4444f3;
    }
  }

  .btn-danger {
    background: #f80b0b;

    &:hover {
      background: #f53131;
    }
  }

  .increments {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-btns {
      .minus {
        margin-left: 5px;
        background: #f80b0b;

        &:hover {
          background: #f53131;
        }
      }
    }
  }
`;
