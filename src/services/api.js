import axios from 'axios'
import { BASE_API } from '../utils/constant'

export const api = axios.create({
  baseURL: BASE_API,
  timeout: 5000,
})
