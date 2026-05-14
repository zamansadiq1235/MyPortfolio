import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

export default api

// Usage in any component:
// import api from '../api/axios'
// await api.post('/contact', formData)