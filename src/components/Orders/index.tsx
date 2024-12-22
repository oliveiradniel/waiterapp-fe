import { useState } from 'react';

import { Order } from '../../types/Order';

import { waitingOrders } from './mocks/waitingOrders';
import { inProductionOrders } from './mocks/inProductionOrders';
import { doneOrders } from './mocks/doneOrders';

import Board from './components/Board';
import OrderModal from '../OrderModal';

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
    setSelectedOrder(null);
  }

  return (
    <Container>
      <OrderModal
        onClose={handleCloseOrderModal}
        visible={isOrderModalVisible}
        order={selectedOrder}
      />

      <Board
        onClick={handleOpenOrderModal}
        orders={waitingOrders}
        typeOrder='WAITING'
      />

      <Board
        onClick={handleOpenOrderModal}
        orders={inProductionOrders}
        typeOrder='IN_PRODUCTION'
      />

      <Board
        onClick={handleOpenOrderModal}
        orders={doneOrders}
        typeOrder='DONE'
      />
    </Container>
  );
}
