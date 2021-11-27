import useSWR from 'swr'

import { api, routes } from 'shared/api'

export const obtainToken = async (values: Components.Schemas.TokenObtainPair) =>
  await api.post(routes.token, values)

export const useMyself = () => {
  const { data: myself } = useSWR<Components.Schemas.User>(routes.me)

  return { myself }
}

export const createUser = (values: Components.Schemas.UserRequest) =>
  api.post<Components.Schemas.User>(routes.users, values)