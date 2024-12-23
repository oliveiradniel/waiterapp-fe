import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  flex: 1;
  padding: 16px;

  > header {
    align-items: center;
    display: flex;
    font-size: 14px;
    gap: 8px;
    justify-content: center;
    padding: 8px;
  }

  .empty-order-board {
    color: rgba(0, 0, 0, 0.4);
    font-weight: bold;
    margin-top: 24px;
    text-align: center;
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
