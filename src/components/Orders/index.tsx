import Board from './components/Board';

import { Container } from './styles';

export default function Orders() {
  const waitingOrders = [
    { tableNumber: 2, numberOfItems: 4 },
    { tableNumber: 5, numberOfItems: 2 }
  ];

  return (
    <Container>
      <Board
        orders={waitingOrders}
        quantityOfOrders={1}
        typeOrder='waiting'
      />
    </Container>
  );
}
