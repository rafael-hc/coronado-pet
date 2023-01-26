export interface Product {
  id?: string
  name: string
  slug: string
  price: number
  costPrice: number
  brand: string
  pet: string | null
  specie: string | null
  imageUrl: string[]
  size: string
  inventory: number
  barcode: string | null
  registeredAt: Date
  description: string[]
  line: string | null
  age: string[]
  breedSize: string[]
}

export interface LatestProducts {
  id: string
  name: string
  price: number
  imageUrl: string[]
  slug: string
}
