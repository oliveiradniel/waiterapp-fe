import { Order } from '../../../types/Order';

export const waitingOrders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '4',
    status: 'WAITING',
    products: [
      {
        product: {
          _id: '675ec6602ca962aded3ef0f3',
          name: 'Pizza quatro queijos',
          imagePath: '1734274394650-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
      },
      {
        product: {
          _id: '675ec6602ca962aded3ef0f4',
          name: 'Coca cola',
          imagePath: '1734824026783-coca-cola.png',
          price: 7,
        },
        quantity: 2,
      }
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '7',
    status: 'WAITING',
    products: [
      {
        product: {
          _id: '675ec6602ca962aded3ef0f5',
          name: 'Pizza quatro queijos',
          imagePath: '1734274394650-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
      },
      {
        product: {
          _id: '675ec6602ca962aded3ef0f6',
          name: 'Coca cola',
          imagePath: '1734824026783-coca-cola.png',
          price: 7,
        },
        quantity: 2,
      }
    ],
  }
];
