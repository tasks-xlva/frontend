import { api, routes } from 'shared/api'

export const obtainToken = async (values: Definitions.TokenObtainPair) =>
  await api.post(routes.token, values)
