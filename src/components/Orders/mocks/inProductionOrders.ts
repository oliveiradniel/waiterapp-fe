import { Order } from '../../../types/Order';

export const inProductionOrders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '2',
    status: 'IN_PRODUCTION',
    products: [
      {
        product: {
          _id: '675ec6602ca962aded3ef0f2',
          name: 'Coca cola',
          imagePath: '1734824026783-coca-cola.png',
          price: 7,
        },
        quantity: 2,
      },
    ],
  },
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '3',
    status: 'IN_PRODUCTION',
    products: [
      {
        product: {
          _id: '675ec6602ca962aded3ef0f1',
          name: 'Pizza quatro queijos',
          imagePath: '1734274394650-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
      },
    ],
  }
];
