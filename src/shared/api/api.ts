import { notification } from 'antd'
import axios from 'axios'

export const baseURL = `https://tasks.api.xlvn.ru/v1`

export const api = axios.create({ baseURL })

api.interceptors.response.use(undefined, (error) => {
  console.log(error.response)
  notification.error({
    message: `Ошибка запроса`,
    description: Object.entries(error.response.data).map(
      ([key, value]) =>
        `${key.charAt(0).toUpperCase()}${key.slice(1)}: ${
          Array.isArray(value) ? value.join(`, `) : value
        }`,
    ),
  })
})
