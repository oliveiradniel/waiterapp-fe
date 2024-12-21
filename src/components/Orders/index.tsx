import { waitingOrders } from './mocks/waitingOrders';
import { inProductionOrders } from './mocks/inProductionOrders';
import { doneOrders } from './mocks/doneOrders';

import Board from './components/Board';

import { Container } from './styles';

export default function Orders() {
  function handleOpenOrder() {
    console.log('Hello');
  }

  return (
    <Container>
      <Board
        onClick={handleOpenOrder}
        orders={waitingOrders}
        typeOrder='WAITING'
        isModalVisible
      />
      <Board
        onClick={handleOpenOrder}
        orders={inProductionOrders}
        typeOrder='IN_PRODUCTION'
      />
      <Board
        onClick={handleOpenOrder}
        orders={doneOrders}
        typeOrder='DONE'
      />
    </Container>
  );
}
