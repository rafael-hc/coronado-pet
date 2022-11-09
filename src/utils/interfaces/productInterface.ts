interface IDetails {
  title: string
  body: string
}

export interface IProduct {
  _id?: string
  name: string
  category: string
  price: number
  inventory: number
  details: IDetails[]
  createdAt?: Date
}
