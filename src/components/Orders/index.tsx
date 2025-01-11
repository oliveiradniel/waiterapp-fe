import { useEffect, useState } from 'react';

import { api } from '../../utils/api';

import { Order } from '../../types/Order';

import Board from './components/Board';
import OrderModal from '../OrderModal';

import { Container } from './styles';

export default function Orders() {
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      });
  }, []);

  const waitingOrders = orders.filter(({ status }) => status === 'WAITING');

  const inProductionOrders = orders.filter(({ status }) => status === 'IN_PRODUCTION');

  const doneOrders = orders.filter(({ status }) => status === 'DONE');

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
