import { Order } from '../../../types/Order';

export const inProductionOrders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '2',
    status: 'IN_PRODUCTION',
    products: [
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668473462705-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
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
          name: 'Pizza quatro queijos',
          imagePath: '1668472896991-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
    ],
  }
];
