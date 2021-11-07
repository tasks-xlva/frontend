import axios from 'axios'

export const api = axios.create({
  baseURL: `https://tasks.api.xlvn.ru/v1`,
})
