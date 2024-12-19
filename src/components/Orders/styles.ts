import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px auto;
  max-width: 1216px;
  width: 100%;
`;

export const  Board = styled.div`
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  padding: 16px;

  header {
    align-items: center;
    display: flex;
    font-size: 14px;
    gap: 8px;
    justify-content: center;
    padding: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  button {
    align-items: center;
    background-color: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 128px;
    justify-content: center;

    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }
  }
`;
