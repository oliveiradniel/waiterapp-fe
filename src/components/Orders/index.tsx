import { useState } from 'react';

import { waitingOrders } from './mocks/waitingOrders';
import { inProductionOrders } from './mocks/inProductionOrders';
import { doneOrders } from './mocks/doneOrders';

import Board from './components/Board';

import { Container } from './styles';

export default function Orders() {
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);

  function handleOpenOrderModal() {
    setIsOrderModalVisible(true);
  }

  function handleCloseOrderModal() {
    setIsOrderModalVisible(false);
  }

  return (
    <Container>
      <Board
        isModalVisible={isOrderModalVisible}
        onClick={handleOpenOrderModal}
        onClose={handleCloseOrderModal}
        orders={waitingOrders}
        typeOrder='WAITING'
      />
      <Board
        isModalVisible={isOrderModalVisible}
        onClick={handleOpenOrderModal}
        onClose={handleCloseOrderModal}
        orders={inProductionOrders}
        typeOrder='IN_PRODUCTION'
      />
      <Board
        isModalVisible={isOrderModalVisible}
        onClick={handleOpenOrderModal}
        onClose={handleCloseOrderModal}
        orders={doneOrders}
        typeOrder='DONE'
      />
    </Container>
  );
}
