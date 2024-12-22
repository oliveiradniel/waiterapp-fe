import { Order } from '../../../types/Order';

export const doneOrders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '1',
    status: 'DONE',
    products: [
      {
        product: {
          _id: '675ec6602ca962aded3ef0f9',
          name: 'Pizza quatro queijos',
          imagePath: '1734274394650-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
      },
      {
        product: {
          _id: '675ec6602ca962aded3ef0f0',
          name: 'Coca cola',
          imagePath: '1734824026783-coca-cola.png',
          price: 7,
        },
        quantity: 2,
      }
    ],
  }
];
