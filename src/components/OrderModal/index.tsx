import { Order } from '../../types/Order';

import closeIcon from '../../assets/images/close-icon.svg';

import { ModalBody, OrderDetails, Overlay } from './styles';
import formatCurrency from '../../utils/formatCurrency';

interface OrdelModalProps {
  onClose: () => void;
  order: Order | null;
  visible: boolean;
}

export default function OrderModal({ onClose, order, visible }: OrdelModalProps) {

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => (
    total + (product.price * quantity)
  ), 0);

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

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div key={_id} className="item">
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />

                <span className="quantity">
                  {quantity}x
                </span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
