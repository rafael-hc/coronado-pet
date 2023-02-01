/* eslint-disable camelcase */
import { prisma } from '../../lib/prisma'

export interface OrderProps {
  freight_cost: number
  total_amount: number
  user_id: string
  shopping_cart_id: string
  address_id: string
}
export async function createOrder({
  address_id,
  freight_cost,
  shopping_cart_id,
  total_amount,
  user_id,
}: OrderProps) {
  const orderPrisma = await prisma.order.upsert({
    where: {
      shopping_cart_id,
    },
    create: {
      freight_cost,
      total_amount,
      address_id,
      shopping_cart_id,
      user_id,
    },
    update: {
      address_id,
    },
  })
  return orderPrisma
}
