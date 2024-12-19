import Board from './components/Board';

import { Container } from './styles';

export default function Orders() {
  const waitingOrders = [
    { tableNumber: 2, numberOfItems: 4 },
    { tableNumber: 5, numberOfItems: 2 }
  ];

  const inProductionOrders = [
    { tableNumber: 3, numberOfItems: 6 },
    { tableNumber: 7, numberOfItems: 8 }
  ];

  const doneOrders = [
    { tableNumber: 1, numberOfItems: 2 },
  ];

  return (
    <Container>
      <Board
        orders={waitingOrders}
        typeOrder='waiting'
      />
      <Board
        orders={inProductionOrders}
        typeOrder='in_production'
      />
      <Board
        orders={doneOrders}
        typeOrder='done'
      />
    </Container>
  );
}
