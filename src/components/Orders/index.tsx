import { useState } from 'react';

import { Order } from '../../types/Order';

import { waitingOrders } from './mocks/waitingOrders';
import { inProductionOrders } from './mocks/inProductionOrders';
import { doneOrders } from './mocks/doneOrders';

import Board from './components/Board';

import { Container } from './styles';

export default function Orders() {
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenOrderModal(order: Order) {
    setIsOrderModalVisible(true);
    setSelectedOrder(order);
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
        selectedOrder={selectedOrder}
        typeOrder='WAITING'
      />

      <Board
        isModalVisible={isOrderModalVisible}
        onClick={handleOpenOrderModal}
        onClose={handleCloseOrderModal}
        orders={inProductionOrders}
        selectedOrder={selectedOrder}
        typeOrder='IN_PRODUCTION'
      />

      <Board
        isModalVisible={isOrderModalVisible}
        onClick={handleOpenOrderModal}
        onClose={handleCloseOrderModal}
        orders={doneOrders}
        selectedOrder={selectedOrder}
        typeOrder='DONE'
      />
    </Container>
  );
}
