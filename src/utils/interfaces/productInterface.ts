export interface Product {
  id?: string
  name: string
  slug: string
  price: number
  costPrice: number
  description: string[]
  brand: string
  pet: string
  specie: string
  type: string
  imageUrl: string[]
  size: string
  inventory: number
  barcode: string
  registeredAt?: Date
}

export interface LatestProducts {
  id: string
  name: string
  price: number
  imageUrl: string[]
  slug: string
}
