import { Board, Container, OrdersContainer } from './styles';

export default function Orders() {
  return (
    <Container>
      <Board>
        <header>
          <span>🕛</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <OrdersContainer>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 Items</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 Items</span>
          </button>
        </OrdersContainer>
      </Board>
    </Container>
  );
}
