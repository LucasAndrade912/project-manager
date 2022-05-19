import axios from 'axios'

const baseURL = String(import.meta.env.VITE_API_URL)

export const api = axios.create({ baseURL })