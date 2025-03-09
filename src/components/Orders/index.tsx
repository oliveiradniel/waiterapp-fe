import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { api } from '../../utils/api';

import { Order } from '../../types/Order';

import Board from './components/Board';
import OrderModal from '../OrderModal';

import { Container } from './styles';

export default function Orders() {
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });
  }, []);

  const waitingOrders = orders.filter(({ status }) => status === 'WAITING');

  const inProductionOrders = orders.filter(
    ({ status }) => status === 'IN_PRODUCTION'
  );

  const doneOrders = orders.filter(({ status }) => status === 'DONE');

  function handleOpenOrderModal(order: Order) {
    setIsOrderModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseOrderModal() {
    setIsOrderModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);

    setIsLoading(false);
    setIsOrderModalVisible(false);

    setOrders((prevState) =>
      prevState.filter((order) => order._id !== selectedOrder?._id)
    );
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status =
      selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(
      `O pedido da mesa ${selectedOrder?.table} teve o status alterado!`
    );
    setIsLoading(false);
    setIsOrderModalVisible(false);

    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === selectedOrder?._id ? { ...order, status } : order
      )
    );
  }

  return (
    <Container>
      <OrderModal
        visible={isOrderModalVisible}
        order={selectedOrder}
        isLoading={isLoading}
        onClose={handleCloseOrderModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <Board
        onClick={handleOpenOrderModal}
        orders={waitingOrders}
        typeOrder="WAITING"
      />

      <Board
        onClick={handleOpenOrderModal}
        orders={inProductionOrders}
        typeOrder="IN_PRODUCTION"
      />

      <Board
        onClick={handleOpenOrderModal}
        orders={doneOrders}
        typeOrder="DONE"
      />
    </Container>
  );
}
