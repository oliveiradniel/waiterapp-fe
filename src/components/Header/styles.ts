import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: #d73035;
  display: flex;
  height: 198px;
  justify-content: center;
  padding: 0 80px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1216px;
  width: 100%;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      margin-top: 6px;
      opacity: 0.9;
    }
  }
`;
