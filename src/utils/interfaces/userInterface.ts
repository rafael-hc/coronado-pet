interface IAddress {
  city: string
  complement: string
  district: string
  numberOf: string
  state: string
  street: string
  zipCode: string
}

interface IUserInfo {
  name?: string
  email: string
  password?: string
  personType?: 'legal' | 'natural'
  cpf?: string
  cnpj?: string
  gender?: string
  birthDate?: Date
  mobilePhone?: string
  phone?: string
  avatar?: string
  address?: IAddress[]
}

export interface IUser {
  loading: boolean
  userInfo?: IUserInfo
  userToken?: string // for storing the JWT
  error?: string
  success: boolean // for monitoring the registration process.
}
