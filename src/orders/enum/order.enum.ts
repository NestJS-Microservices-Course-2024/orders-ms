import { OrderStatus } from '@prisma/client';

export const OrderStatusList = [
  OrderStatus.CANCELED,
  OrderStatus.PENDING,
  OrderStatus.DELIVERED
]