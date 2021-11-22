import axios from 'axios'

export const baseURL = `https://tasks.api.xlvn.ru/v1`

export const api = axios.create({ baseURL })
