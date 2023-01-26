import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
})

// export const createSessions = async (email: string, password: string) => {
//   return await api.post('/login', { email, password })
// }
