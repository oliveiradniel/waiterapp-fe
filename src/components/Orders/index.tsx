import { waitingOrders } from './mocks/waitingOrders';
import { inProductionOrders } from './mocks/inProductionOrders';
import { doneOrders } from './mocks/doneOrders';

import Board from './components/Board';

import { Container } from './styles';

export default function Orders() {
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
