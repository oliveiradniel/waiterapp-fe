import closeIcon from '../../assets/images/close-icon.svg';

import { ModalBody, OrderDetails, Overlay } from './styles';

interface OrdelModalProps {
  onClose: () => void;
  visible: boolean;
}

export default function OrderModal({ onClose, visible }: OrdelModalProps) {
  if (!visible) {
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
            <span>🕛</span>
            <strong>Em produção</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
