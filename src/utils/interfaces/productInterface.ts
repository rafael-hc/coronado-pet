interface Category {
  id?: string
  name: string
}

export interface Product {
  id?: string
  name: string
  price: number
  costPrice: string
  description: string
  imageUrl: string
  size: string
  inventory: number
  category: Category[]
  registeredAt?: Date
}

export interface LatestProducts {
  id: string
  name: string
  price: number
  imageUrl: string
  slug: string
}
