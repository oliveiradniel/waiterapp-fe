import { Container, OrdersContainer } from './styles';

interface IOrdersData {
  tableNumber: number;
  numberOfItems: number;
}

interface IBoardProps {
  orders: IOrdersData[];
  quantityOfOrders: number;
  typeOrder: 'waiting' | 'in_production' | 'done';
}

export default function Board({
  orders,
  quantityOfOrders,
  typeOrder,
}: IBoardProps) {
  return (
    <Container>
      <header>
        <span>
          {typeOrder === 'waiting' && '🕛'}
          {typeOrder === 'in_production' && '👩🏽‍🍳'}
          {typeOrder === 'done' && '✅'}
        </span>
        <strong>
          {typeOrder === 'waiting' && 'Fila de espera'}
          {typeOrder === 'in_production' && 'Em produção'}
          {typeOrder === 'done' && 'Pronto!'}
        </strong>
        <span>{quantityOfOrders}</span>
      </header>

      <OrdersContainer>
        {orders.map((order) => (
          <button type="button">
            <strong>Mesa {order.tableNumber}</strong>
            <span>{order.numberOfItems} Items</span>
          </button>
        ))}
      </OrdersContainer>
    </Container>
  );
}
