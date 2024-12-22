import { Order } from '../../../../types/Order';

import { Container, OrdersContainer } from './styles';

interface OrdersBoardProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (order: Order) => void;
  orders: Order[];
  typeOrder: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
}

export default function Board({
  onClick,
  orders,
  typeOrder,
}: OrdersBoardProps) {
  const emptyOrderBoardText = (
    typeOrder === 'WAITING' && 'Não há nenhum pedido em espera.' ||
    typeOrder === 'IN_PRODUCTION' && 'Não há nenhum pedido em produção.' ||
    typeOrder === 'DONE' && 'Não há nenhum pedido pronto.'
  );

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

      {orders.length > 0 ? (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              key={order._id}
              onClick={() => onClick(order)}
              type="button"
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} Items</span>
            </button>
          ))}
        </OrdersContainer>
      ) : (
        <p className='empty-order-board'>
          {emptyOrderBoardText}
        </p>
      )}
    </Container>
  );
}
