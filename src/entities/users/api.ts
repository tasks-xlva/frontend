import { api, routes } from 'shared/api'

export const obtainToken = async (values: Components.Schemas.TokenObtainPair) =>
  await api.post(routes.token, values)
