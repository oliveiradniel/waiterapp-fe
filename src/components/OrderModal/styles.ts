import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  backdrop-filter: blur(4.5px);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
  width: 480px;

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      background-color: transparent;
      border: none;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        color: #666;
        display: block;
        font-size: 14px;
        margin-left: 12px;
        min-width: 20px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          color: #666;
          font-size: 14px;
        }
      }
    }
  }

  .total {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;

  .primary {
    align-items: center;
    background-color: #333;
    border: none;
    border-radius: 48px;
    color: #fff;
    display: flex;
    font-size: 16px;
    gap: 8px;
    justify-content: center;
    padding: 12px 24px;
    width: 100%;
  }

  .secondary {
    align-items: center;
    border: none;
    background-color: transparent;
    color: #d73035;
    display: flex;
    font-weight: bold;
    gap: 8px;
    justify-content: center;
    margin-top: 12px;
    padding: 14px 24px;
  }
`;
