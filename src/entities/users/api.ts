import { api, routes } from 'shared/api'
import useSWR from 'swr'

export const obtainToken = async (values: Components.Schemas.TokenObtainPair) =>
  await api.post(routes.token, values)

export const useMyself = () => {
  const { data: myself } = useSWR<Components.Schemas.User>(routes.me)

  return { myself }
}
