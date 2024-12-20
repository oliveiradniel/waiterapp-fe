import { Order } from '../../../../types/Order';

import { Container, OrdersContainer } from './styles';

interface OrdersBoardProps {
  orders: Order[];
  typeOrder: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
}

export default function Board({
  orders,
  typeOrder,
}: OrdersBoardProps) {
  return (
    <Container>
      <header>
        <span>
          {typeOrder === 'WAITING' && '🕛'}
          {typeOrder === 'IN_PRODUCTION' && '👩🏽‍🍳'}
          {typeOrder === 'DONE' && '✅'}
        </span>
        <strong>
          {typeOrder === 'WAITING' && 'Fila de espera'}
          {typeOrder === 'IN_PRODUCTION' && 'Em produção'}
          {typeOrder === 'DONE' && 'Pronto!'}
        </strong>
        <span>({orders.length})</span>
      </header>

      <OrdersContainer>
        {orders.map((order) => (
          <button type="button">
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} Items</span>
          </button>
        ))}
      </OrdersContainer>
    </Container>
  );
}
