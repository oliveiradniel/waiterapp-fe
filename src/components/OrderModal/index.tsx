import { Order } from '../../types/Order';

import closeIcon from '../../assets/images/close-icon.svg';

import { ModalBody, OrderDetails, Overlay } from './styles';

interface OrdelModalProps {
  onClose: () => void;
  order: Order | null;
  visible: boolean;
}

export default function OrderModal({ onClose, order, visible }: OrdelModalProps) {
  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>

          <button
            type="button"
            onClick={onClose}
          >
            <img src={closeIcon} alt="Fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>

          <div>
            <span>
              {order.status === 'WAITING' && '🕛'}
              {order.status === 'IN_PRODUCTION' && '👩🏽‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
