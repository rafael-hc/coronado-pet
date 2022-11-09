import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const createSessions = async (email: string, password: string) => {
  return await api.post('/login', { email, password })
}
