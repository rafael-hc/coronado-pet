import NextAuth from 'next-auth'

interface Address{
  id: string
}

declare module 'next-auth' {
  interface User {
    id: string
    name?: string
    email?: string
    cpf?: string
    phone?: string
    date_of_birth?: Date
    avatar_url: string
    address?: Address[]
  }
}
